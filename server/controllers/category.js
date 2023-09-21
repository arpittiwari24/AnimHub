const categoryModel = require('../models/category.model')
const userModel = require('../models/user.model')

exports.createCategory = async (req, res) => {
    try {
        const { category, userId } = req.body;

        // Check if userId and componentId are provided
        if (!userId || !category) {
            return res.status(400).json({
                success: false,
                message: 'Please send all the fields',
            });
        }

        // Find the component in the database
        const user = await userModel.findOne({ _id: userId }).exec();

        // If no such component is found
        if (!user || user.isAdmin == false) {
            return res.status(400).json({
                success: false,
                message: "user is not admin"
            });
        }

        const newCategory = await categoryModel.create({
            name: category,
        });

        return res.status(200).json({
            success: true,
            message: "new category created successfully",
            newCategory
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "unable to create the category"
        })
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const { categoryId, category, userId } = req.body;

        // Check if userId and componentId are provided
        if (!userId || !category || !categoryId) {
            return res.status(400).json({
                success: false,
                message: 'Please send all the fields',
            });
        }

        // Find the component in the database
        const user = await userModel.findOne({ _id: userId }).exec();

        // If no such component is found
        if (!user || user.isAdmin == false) {
            return res.status(400).json({
                success: false,
                message: "user is not admin"
            });
        }

        const newCategory = await categoryModel.findByIdAndUpdate({ _id: categoryId }, {
            $set: { name: category }
        }, { new: true }).exec();

        return res.status(200).json({
            success: true,
            message: " category updated successfully",
            newCategory
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "unable to update the category"
        })
    }
}

exports.getAllCategories = async(req,res) => {
    try {
        const categories = await categoryModel.find({}).exec();
        
        return res.status(200).json({
            categories,
            success: true,
            message:"sent all the categories"
        })
    } catch (error) {
        return res.status(400).json({
            success :false ,
            message :"Unable to get the categories"
        })
    }
}

