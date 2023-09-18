const userModel = require('../models/user.model')
const Component = require('../models/component.model')
const mailsender = require('../utils/mailSender')
const verificationMail = require('../constants/componentVerification')

exports.verifyComponent = async (req, res) => {
    try {
        const { componentId, userId } = req.body;

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

        // Find the component in the database
        const user = await userModel.findOne({ _id: userId }).exec();

        // If no such component is found
        if (!user || user.isAdmin == false) {
            return res.status(400).json({
                success: false,
                message: "No such component found or user is not admin"
            });
        }

        //change the state of the component and save it
        component.verified = true;
        await component.save();

        //find the email of the craetor of the component
        let userMail = await userModel.findById({_id:component.userId}).then((doc)=>{
            return doc.email;
        }).exec();

        let verificationMailTemplate = verificationMail();
        //send the creator , a successful verification email
        let mailResponse = await mailsender(userMail,"Successfull verification of component",verificationMailTemplate);

        // Respond with success message
        return res.status(200).json({
            success: true,
            message: 'Component verified successfully',
        });
    } catch (error) {
        // Handle any errors during component verification
       return res.status(400).json({
            success: false,
            message: 'Unable to verify the component, please try again',
        });
    }
}