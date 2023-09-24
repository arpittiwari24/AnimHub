const userModel = require("../models/user.model");

//updateProfile controller for updating the user profile
exports.updateProfile = async (req, res) => {
    try {
        // Extract data from the request body
        console.log("req.body 1", req.body);
        const { profilePicUrl, username, name, country, email, github, linkedin, insta, gradientBg, bio} = req.body;

        // Check if userId is provided
    
        // Find the user in the database
        const user = await userModel.findOne({ email: email }).exec();

        // If no such user is found
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "No such user found"
            });
        }

        console.log("userInfo");
        //update the user
        console.log(user);
        user.name = name;
        user.username = username;
        user.bio = bio;
        user.country = country;
        user.profilePicUrl = profilePicUrl;
        user.gradientBg = gradientBg;
        user.socialLinks = [github, linkedin, insta];


        await user.save();

        return res.status(200).json({
            user,
            success: true,
            message: "Profile updated successfully"
        })
    } catch (error) {
        console.log("Error happened", error);
        res.status(400).json({
            success: false,
            message: 'Unable to update the user, please try again',
        });
    }
    // console.log("req.body", req.body);
    // return res.send("Recieved")
}

//getProfileData controller for fetching profile data of an user
exports.getProfileData = async (req, res) => {
    try {
        // Extract userId from the request body
        const { userId } = req.body;
    
        // Check if userId is provided
        if (!userId) {
            // Return a response indicating an invalid userId
            return res.status(400).json({
                success: false,
                message: 'Please send a valid userId'
            })
        }
    
        // Find the user by the provided userId
        const user = await userModel.findById({ _id: userId }).exec();
    
        // Check if the user is not found
        if (!user) {
            // Return a response indicating that the user was not found
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }
    
        // Prepare the profile data from the user information
        let profileData = {
            name: user.name,
            username: user.username,
            email: user.email,
            profilePicUrl: user.profilePicUrl,
            bio: user.bio,
            country: user.country,
            gradientBg: user.gradientBg,
            socialLinks: user.socialLinks,
        }
    
        // Return the profile data and a success message
        return res.status(200).json({
            profileData,
            success: true,
            message: 'Profile data of user is sent successfully'
        })
    } catch (error) {
        // Return an error message if there's an exception
        return res.status(400).json({
            success: false,
            message: 'Profile data of the user could not be processed, try again'
        })
    }
}

//followUser controller for following a specific user
exports.followUser = async (req, res) => {
    try {
        // Extract data from the request body
        const { userId, toBeFollowedId } = req.body;

        // Check if userId and toBeFollowedId are provided
        if (!userId || !toBeFollowedId) {
            return res.status(400).json({
                success: false,
                message: 'Please send userId and toBeFollwedId',
            });
        }

        // Find both the user's in the database
        const user = await userModel.findOne({ _id: userId }).exec();
        const toBeFollweduser = await userModel.findOne({ _id: toBeFollowedId }).exec();

        // If either is not found
        if (!user || !toBeFollweduser) {
            return res.status(400).json({
                success: false,
                message: "Either of the two user's or both of them are not found"
            });
        }

        //update the user's with the Follow
        user.following.push(toBeFollowedId);
        toBeFollweduser.followers.push(userId);

        await user.save();
        await toBeFollweduser.save();


        return res.status(200).json({
            success: true,
            message: 'user followed the given user successfully',
        });

    } catch (error) {
        // Handle any errors during liking the component
        res.status(400).json({
            success: false,
            message: 'Unable to process the follow request, please try again',
        });
    }
}

//unfollowUser controller for unfollowing a specific user
exports.unFollowUser = async (req, res) => {
    try {
        // Extract data from the request body
        const { userId, toBeUnFollowedId } = req.body;

        // Check if userId and toBeFollowedId are provided
        if (!userId || !toBeUnFollowedId) {
            return res.status(400).json({
                success: false,
                message: 'Please send userId and toBeFollwedId',
            });
        }

        // Find both the user's in the database
        const user = await userModel.findOne({ _id: userId }).exec();
        const toBeUnFollweduser = await userModel.findOne({ _id: toBeUnFollowedId }).exec();

        // If either is not found
        if (!user || !toBeUnFollweduser) {
            return res.status(400).json({
                success: false,
                message: "Either of the two user's or both of them are not found"
            });
        }

        //update the user's with the unFollow
        let index1 = user.following.indexOf(toBeUnFollowedId);
        user.following.splice(index1, 1);
        let index2 = toBeUnFollweduser.followers.indexOf(userId);
        toBeUnFollweduser.followers.splice(index2, 1);

        await user.save();
        await toBeUnFollweduser.save();


        return res.status(200).json({
            success: true,
            message: 'user unfollowed the given user successfully',
        });

    } catch (error) {
        // Handle any errors during liking the component
        res.status(400).json({
            success: false,
            message: 'Unable to process the unfollow request, please try again',
        });
    }
}

//getFollowers controller for fetching follower's of an user
exports.getFollowers = async (req, res) => {
    try {
        // Extract userId from the request body
        const { userId } = req.body;

        // Check if userId is provided
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "please provide a valid userId"
            })
        }

        // Find the user by the provided userId
        const user = await userModel.findById({ _id: userId }).exec();

        // Check if the user is not found
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        // Get the followers array of the user
        const followersArray = user.followers;

        // Return followers array and success message
        return res.status(200).json({
            followersArray,
            success: true,
            message: 'All the followers sent successfully'
        })
    } catch (error) {
        // Return an error message if there's an exception
        return res.status(400).json({
            success: false,
            message: 'Unable to get the followers'
        })
    }

}

//getFollowing controller for fetching all the user's that are followed
exports.getFollowings = async (req, res) => {
    try {
        // Extract userId from the request body
        const { userId } = req.body;

        // Check if userId is provided
        if (!userId) {
            // Return a response indicating an invalid userId
            return res.status(400).json({
                success: false,
                message: "please provide a valid userId"
            })
        }

        // Find the user by the provided userId
        const user = await userModel.findById({ _id: userId }).exec();

        // Check if the user is not found
        if (!user) {
            // Return a response indicating that the user was not found
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        // Get the array of users that are being followed
        const followingArray = user.following;

        // Return the array of users being followed and a success message
        return res.status(200).json({
            followingArray,
            success: true,
            message: 'All the users that are followed, sent successfully'
        })
    } catch (error) {
        // Return an error message if there's an exception
        return res.status(400).json({
            success: false,
            message: 'Unable to get the users that are followed'
        })
    }

}



