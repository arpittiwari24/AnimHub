const categoryModel = require('../models/category.model')
const userModel = require('../models/user.model')
const tagModel = require('../models/tag.model')

exports.createTag = async (req,res) => {
    try {
        const { tag, userId } = req.body;

        // Check if userId and componentId are provided
        if (!userId || !tag) {
            return res.status(400).json({
                success: false,
                message: 'Please send all the fields',
            });
        }

        // Find the component in the database
        const user = await userModel.findOne({ _id: userId }).exec();

        // If no such component is found
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "user not found"
            });
        }

        const newTag = await tagModel.create({
            name: tag,
        });

        return res.status(200).json({
            success: true,
            message: "new category created successfully",
            newTag
        })
    } catch (error) {
       return res.status(400).json({
        success:false,
        message:"unable to create the tag"
       }) 
    }
}

exports.updateTag = async (req, res) => {
    try {
        const { tagId, tag, userId } = req.body;

        // Check if userId and componentId are provided
        if (!userId || !tag || !tagId) {
            return res.status(400).json({
                success: false,
                message: 'Please send all the fields',
            });
        }

        // Find the user in the database
        const user = await userModel.findOne({ _id: userId }).exec();

        // If no such user is found
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "user is not admin"
            });
        }

        const newTag = await tagModel.findByIdAndUpdate({ _id: tagId }, {
            $set: { name: tag }
        }, { new: true }).exec();

        return res.status(200).json({
            success: true,
            message: " category updated successfully",
            newTag
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "unable to update the Tag"
        })
    }
}

exports.getAllTags = async(req,res) => {
    try {
        const Tags = await tagModel.find({}).exec();
        
        return res.status(200).json({
            Tags,
            success: true,
            message:"sent all the Tags"
        })
    } catch (error) {
        return res.status(400).json({
            success :false ,
            message :"Unable to get the Tags"
        })
    }
}