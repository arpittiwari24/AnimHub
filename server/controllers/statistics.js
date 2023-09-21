const userModel = require('../models/user.model')
const Component = require('../models/component.model')

//topUsersWithComponents controller for fetching top 10 user's with most components
exports.topUsersWithComponents = async (req, res) => {
    try {
        // Find the top 10 users with the largest 'components' array
        let topUsers = await userModel.find({}).sort({'components':-1}).limit(10).exec();
    
        // Return the top users and a success message
        return res.status(200).json({
            topUsers,
            success: true,
            message: 'Top users with most components sent successfully'
        })
    } catch (error) {
        // Return an error response if there's an exception
        return res.status(400).json({
            error: error,
            success: false,
            message: "Unable to find top users with most components, try again"
        })
    }
    
}

//topUsersWithFollowers controller for fetching user's with most followers
exports.topUsersWithFollowers = async (req, res) => {
    try {
        // Find the top 10 users with the largest 'followers' array
        let topUsers = await userModel.find({}).sort({'followers':-1}).limit(10).exec();
    
        // Return the top users and a success message
        return res.status(200).json({
            topUsers,
            success: true,
            message: 'Top users with most followers sent successfully'
        })
    } catch (error) {
        // Return an error response if there's an exception
        return res.status(400).json({
            error: error,
            success: false,
            message: "Unable to find top users with most followers, try again"
        })
    }
    
}

//topUsersWithFollowers controller for fetching user's with most likes
exports.topUsersWithLikes = async (req,res) => {
    try {
        const topUsers = await Component.aggregate([
            {
                $group: {
                    _id: '$userId',
                    totalLikes: { $sum: '$likeCounter' }
                }
            },
            {
                $sort: { totalLikes: -1 }
            },
            {
                $limit: 10
            },
            {
                $lookup: {
                    from: 'users', // The name of the users collection
                    localField: '_id',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {
                $unwind: '$user'
            },
            {
                $project: {
                    _id: '$user._id',
                    name: '$user.name',
                    totalLikes: 1
                }
            }
        ]);

        return res.status(200).json({
            topUsers,
            success: true,
            message: "Top users with most likes sent successfully"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Unable to find top users with most likes"
        })
    }
}

exports.totalUsers = async (req,res) => {
    try {
        const totalUsers = await userModel.countDocuments();

        return res.status(200).json({
            totalUsers:totalUsers.toString(),
            success: true,
            message: "Total users on the website sent successfully"
        })
    } catch (error) {
       return res.status(400).json({
        success:false,
        message: "Unable to find total users"
       }) 
    }
}

exports.totalComponents = async (req,res) => {
    try {
        const totalComponents= await Component.countDocuments();

        return res.status(200).json({
            totalComponents:totalComponents.toString(),
            success: true,
            message: "Total Components on the website sent successfully"
        })
    } catch (error) {
       return res.status(400).json({
        success:false,
        message: "Unable to find total Components"
       }) 
    }
}

