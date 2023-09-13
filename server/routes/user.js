const express = require("express")
const router = express.Router()


const {login,signup,createUser} = require("../controllers/user");




// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

// Route for user creation
router.post("/createUser",createUser);

// ********************************************************************************************************
//                                      Component routes
// ********************************************************************************************************

router.post("/createComponent")



module.exports = router