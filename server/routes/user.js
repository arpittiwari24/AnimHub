const express = require("express")
const router = express.Router()


const {login,signup} = require("../controllers/user");


// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

module.exports = router