const express = require("express")
const router = express.Router()


const {updateProfile,getProfileData,followUser,unFollowUser,getFollowers,getFollowings} = require("../controllers/user");


// const userModel = require("../models/user.model");


// ********************************************************************************************************
//                                      User routes
// ********************************************************************************************************

//route for profile updation
router.post("/updateProfile",updateProfile)

//route for profile fetching
router.post("/getProfileData",getProfileData)

//route for Following user
router.post("/followUser",followUser)

//route for unFollowing user
router.post("/unFollowUser",unFollowUser)

//route for fetching Follower's of an user
router.post("/getFollowers",getFollowers)

//route for fetching Following's of an user
router.post("/getFollowings",getFollowings)

module.exports = router