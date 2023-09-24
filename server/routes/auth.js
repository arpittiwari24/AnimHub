const express = require("express")
const router = express.Router()


const {signup} = require("../controllers/auth");
const { createTestAccount } = require("nodemailer");


// const userModel = require("../models/user.model");


// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user signup
router.post("/signup", signup)



module.exports = router