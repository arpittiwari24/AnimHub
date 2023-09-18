const Component = require('../models/component.model');
const userModel = require('../models/user.model');

// Create a new component
exports.createComponent = async (req, res) => {
    try {
        // Extract data from the request body
        const { userId, html, css, js, react, tags } = req.body;

        // Check if userId is provided
        if (!userId) {
            return res.status(403).send({
                success: false,
                message: "userId is required",
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
            tags,
        });

        //push the component in the component array of the user
        await userModel.findByIdAndUpdate({ _id: userId }, {
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
            success: false,
            message: 'Unable to create the component, please try again',
        });
    }
};

//Get all components
exports.getAllComponents = async (req,res) => {
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
        const { userId, componentId, html, css, js, react, tags } = req.body;

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

        const user = await userModel.findById({_id:userId}).exec();

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
            component.tags = tags;

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

        const user = await userModel.findById({_id:userId}).exec();

        // Check if the user is authorized to delete the component
        if (String(component.userId) === userId || user.isAdmin === true) {
            // User is authorized to delete the component, so proceed with deletion
            await Component.deleteOne({ _id: componentId }).exec();

            //pop the componentId in the component array of the user
            await userModel.findByIdAndUpdate({ _id: userId }, {
                $pull:{components:componentId}
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
exports.likeComponent = async (req,res) => {
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
        component.likeCounter+=1;
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
exports.unlikeComponent = async (req,res) => {
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
        component.likeCounter-=1;
        let index = component.likedUsers.indexOf(userId);
        component.likedUsers.splice(index,1);

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

