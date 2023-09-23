const contactFormModel = require('../models/contactForm.model')
const userModel = require('../models/user.model')

exports.createContactForm = async (req, res) => {
    try {
        const {
            userId,
            name,
            email,
            mobile,
            message,
            topic
        } = req.body;

        if (!userId || !name || !email || !message || !topic) {
            return res.status(400).json({
                success: false,
                message: 'Please send all the required fields'
            })
        }

        const user = await userModel.findById({ _id: userId }).exec();

        if(!user){
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        const Form = await contactFormModel.create({
            userId,
            name,
            email,
            mobile,
            message,
            topic
        });

        return res.status(200).json({
            Form,
            success : true ,
            message : "Form created successfully"
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "unable to create contact form"
        })
    }
}




