const Component = require('../models/component.model');

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

        // Respond with success message
        res.status(200).json({
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
        const component = await Component.findOne({ _id: componentId });

        // If no such component is found
        if (!component) {
            return res.status(400).json({
                success: false,
                message: "No such component found"
            });
        }

        // Check if the user is authorized to delete the component
        if (String(component.userId) === userId) {
            // User is authorized to delete the component, so proceed with deletion
            await Component.deleteOne({ _id: componentId });

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
