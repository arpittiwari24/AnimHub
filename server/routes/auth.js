const express = require("express")
const router = express.Router()


const { login, signup} = require("../controllers/auth");


// const userModel = require("../models/user.model");


// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user signup
router.post("/signup", signup)

// Route for user login
router.post("/login", login)


module.exports = router