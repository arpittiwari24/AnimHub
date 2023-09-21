const userModel = require("../models/user.model");

// Signup Controller for Registering USers
exports.signup = async (req, res) => {
    try {
        const {email,name} = req.body;

        if(!email || !name){
            return res.status(400).json({
                success: false,
                message: "Please provide email and name"
            })
        }

        const userExists = await userModel.findOne({ email: email }).exec();

        if (userExists) {
           return res.status(400).json({
                success:false,
                message:"user already exists"
            });
        }

        const newUser = await userModel.create({
            email,
            name
        })

        return res.status(200).json({
            newUser,
            success:true,
            message:"user signed up successfully"
        });
        
    }
    catch (error) {
        return res.status(500).json({
            error:error.message,
            success: false,
            message: "User cannot be registered. Please try again.",
        });
    }
};