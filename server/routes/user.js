const express = require("express")
const router = express.Router()


const { login, signup,createUser } = require("../controllers/user");


// const userModel = require("../models/user.model");


// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user signup
router.post("/signup", signup)

// Route for user creation
router.post("/createUser",createUser);



// Route for user login
router.post("/login", login)

module.exports = router