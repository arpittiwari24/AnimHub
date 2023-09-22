const Component = require('../models/component.model');
const userModel = require('../models/user.model');
const categoryModel = require('../models/category.model');

// Create a new component
exports.createComponent = async (req, res) => {
    try {
        // Extract data from the request body
        const { userId, html, css, js, react, categoryId, tags } = req.body;

        // Check if userId is provided
        if (!userId || !categoryId) {
            return res.status(403).send({
                success: false,
                message: "userId and categoryId is required",
            });
        }

        // Construct the code object
        const code = {
            html: html,
            css: css,
            js: js,
            react: react,
        }

        // Create a new component in the database
        const component = await Component.create({
            userId,
            code,
            category: [categoryId],
            tags,
        });

        //push the component in the component array of the user
        await userModel.findByIdAndUpdate({ _id: userId }, {
            $push: { components: component._id }
        }).exec();

        await categoryModel.findByIdAndUpdate({ _id: categoryId }, {
            $push: { components: component._id }
        }).exec();

        // Respond with success message
        res.status(200).json({
            component,
            success: true,
            message: 'Component created and sent for verification',
        });

    } catch (error) {
        // Handle any errors during component creation
        res.status(400).json({
            error: error.message,
            success: false,
            message: 'Unable to create the component, please try again',
        });
    }
};

//Get all components
exports.getAllComponents = async (req, res) => {
    try {
        const componentArray = await Component.find({}).populate('userId').exec();

        return res.status(200).json({
            componentArray,
            success: true,
            message: 'All the components sent successfully'
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Unable to get all components'
        })
    }
}

//Update a component
exports.updateComponent = async (req, res) => {
    try {
        // Extract data from the request body
        const { userId, componentId, html, css, js, react, categoryId, tags } = req.body;

        // Check if userId and componentId are provided
        if (!userId || !componentId) {
            return res.status(400).json({
                success: false,
                message: 'either userId or componentId is not present',
            });
        }

        // Find the component in the database
        const component = await Component.findOne({ _id: componentId }).exec();

        // If no such component is found
        if (!component) {
            return res.status(400).json({
                success: false,
                message: "No such component found"
            });
        }

        const user = await userModel.findById({ _id: userId }).exec();

        // Check if the user is authorized to delete the component
        if (String(component.userId) === userId || user.isAdmin === true) {
            // Construct the code object
            const code = {
                html: html,
                css: css,
                js: js,
                react: react,
            }

            component.code = code;
            component.category = categoryId;
            component.tags = tags;

            await categoryModel.findByIdAndUpdate({ _id: categoryId }, {
                $push: { components: component._id }
            }).exec();

            await component.save();

            // Respond with success message
            return res.status(200).json({
                component,
                success: true,
                message: 'Component updated successfully',
            });
        } else {
            // User is not authorized to delete this component
            return res.status(403).json({
                success: false,
                message: 'Unauthorized to update this component',
            });
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Unable to update the component, please try again',
        });
    }
}

// Delete a component
exports.deleteComponent = async (req, res) => {
    try {
        // Extract data from the request body
        const { userId, componentId } = req.body;

        // Check if userId and componentId are provided
        if (!userId || !componentId) {
            return res.status(400).json({
                success: false,
                message: 'Please send all the fields',
            });
        }

        // Find the component in the database
        const component = await Component.findOne({ _id: componentId }).exec();

        // If no such component is found
        if (!component) {
            return res.status(400).json({
                success: false,
                message: "No such component found"
            });
        }

        const user = await userModel.findById({ _id: userId }).exec();

        // Check if the user is authorized to delete the component
        if (String(component.userId) === userId || user.isAdmin === true) {
            // User is authorized to delete the component, so proceed with deletion
            await Component.deleteOne({ _id: componentId }).exec();

            //pop the componentId in the component array of the user
            await userModel.findByIdAndUpdate({ _id: userId }, {
                $pull: { components: componentId }
            }).exec();

            await categoryModel.findByIdAndUpdate({ _id: component.category }, {
                $pull: { components: componentId }
            }).exec();


            // Respond with success message
            return res.status(200).json({
                success: true,
                message: 'Component deleted successfully',
            });
        } else {
            // User is not authorized to delete this component
            return res.status(403).json({
                success: false,
                message: 'Unauthorized to delete this component',
            });
        }
    } catch (error) {
        // Handle any errors during component deletion
        res.status(400).json({
            success: false,
            message: 'Unable to delete the component, please try again',
        });
    }
}

//like a component
exports.likeComponent = async (req, res) => {
    try {
        // Extract data from the request body
        const { userId, componentId } = req.body;

        // Check if userId and componentId are provided
        if (!userId || !componentId) {
            return res.status(400).json({
                success: false,
                message: 'Please send all the fields',
            });
        }

        // Find the component in the database
        const component = await Component.findOne({ _id: componentId }).exec();

        // If no such component is found
        if (!component) {
            return res.status(400).json({
                success: false,
                message: "No such component found"
            });
        }

        //update the component with the like
        component.likeCounter += 1;
        component.likedUsers.push(userId);

        await component.save();

        return res.status(200).json({
            success: true,
            message: 'Component liked successfully',
        });

    } catch (error) {
        // Handle any errors during liking the component
        res.status(400).json({
            success: false,
            message: 'Unable to like the component, please try again',
        });
    }
}

//unlike a component
exports.unlikeComponent = async (req, res) => {
    try {
        // Extract data from the request body
        const { userId, componentId } = req.body;

        // Check if userId and componentId are provided
        if (!userId || !componentId) {
            return res.status(400).json({
                success: false,
                message: 'Please send all the fields',
            });
        }

        // Find the component in the database
        const component = await Component.findOne({ _id: componentId }).exec();

        // If no such component is found
        if (!component) {
            return res.status(400).json({
                success: false,
                message: "No such component found"
            });
        }

        //update the component with the like
        component.likeCounter -= 1;
        let index = component.likedUsers.indexOf(userId);
        component.likedUsers.splice(index, 1);

        await component.save();

        return res.status(200).json({
            success: true,
            message: 'Component unliked successfully',
        });

    } catch (error) {
        // Handle any errors during liking the component
        res.status(400).json({
            success: false,
            message: 'Unable to unlike the component, please try again',
        });
    }
}

//trendingComponents controller for fetching trending components
exports.trendingComponents = async (req, res) => {
    try {
        // Fetch the top 10 components based on 'likeCounter'
        let trendingComponents = await Component.find({}).sort({ 'likeCounter': -1 }).limit(10).exec();

        // Return the trending components and a success message
        return res.status(200).json({
            trendingComponents,
            success: true,
            message: 'Trending components sent successfully'
        })
    } catch (error) {
        // Return an error response if there's an exception
        return res.status(400).json({
            success: false,
            message: "Error occurred while fetching trending components"
        })
    }
}

// Controller to fetch components based on category
exports.getCategoryComponents = async (req, res) => {
    try {
        const { categoryId } = req.body;

        // Check if the category is provided
        if (!categoryId) {
            return res.status(400).json({
                success: false,
                message: "Please send a valid category" // Error if category is missing
            });
        }

        // Fetch components based on the specified category
        let category = await categoryModel.findById({ _id: categoryId }).populate('components').exec();


        // Check if components were found
        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Invalid category or category not found" // Error if category is invalid or not found
            });
        }

        const components = category.components;

        // Return components and a success message
        return res.status(200).json({
            components,
            success: true,
            message: "Components based on category sent successfully"
        });
    } catch (error) {
        // Return an error response if there's an exception
        return res.status(400).json({
            success: false,
            message: "Error occurred while fetching components based on category"
        });
    }
};

// Controller to fetch components based on tags
exports.getTagsComponents = async (req, res) => {
    try {
        const { tags } = req.body;

        // Check if tags are provided
        if (!tags) {
            return res.status(400).json({
                success: false,
                message: "Please send tags" // Error if tags are missing
            });
        }

        // Fetch components based on the specified tags
        let components = await Component.find({ tags: { $in: tags } }).exec();

        // Check if components were found
        if (!components) {
            return res.status(404).json({
                success: false,
                message: "Invalid tags or tags not found" // Error if tags are invalid or not found
            });
        }

        // Return components and a success message
        return res.status(200).json({
            components,
            success: true,
            message: "Components based on tags sent successfully"
        });
    } catch (error) {
        // Return an error response if there's an exception
        return res.status(400).json({
            success: false,
            message: "Error occurred while fetching components based on tags"
        });
    }
};

// Controller to fetch components based on languages
exports.getLanguageComponents = async (req, res) => {
    try {
        const { languages } = req.body;

        // Check if languages are provided and is an array
        if (!languages || !Array.isArray(languages)) {
            return res.status(400).json({
                success: false,
                message: "Please provide an array of languages" // Error if languages are missing or not an array
            });
        }

        // Construct conditions for each language to check if the code is not null for that language
        const languageConditions = languages.map(language => ({
            [`code.${language}`]: { $ne: "" }
        }));

        // Fetch components based on the constructed conditions
        const components = await Component.find({
            $or: languageConditions
        });

        // Check if components were found
        if (!components) {
            return res.status(404).json({
                success: false,
                message: "Invalid languages or languages not found" // Error if languages are invalid or not found
            });
        }

        // Return components and a success message
        return res.status(200).json({
            components,
            success: true,
            message: "Components based on languages sent successfully"
        });
    } catch (error) {
        // Return an error response if there's an exception
        return res.status(400).json({
            success: false,
            message: "Error occurred while fetching components based on languages"
        });
    }
};





