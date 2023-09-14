const express = require("express")
const router = express.Router()


const {login,signup} = require("../controllers/user");
const userModel = require("../models/user.model");


// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/signup", async (req, res) => {

    console.log(req.body);
    const user = new userModel(req.body);
    const userExists = await userModel.findOne({email: req.body.email}).exec();
    console.log("User Exists", userExists);
    if (!userExists){
        user.save()
        res.json(req.body);
    }
    else{
        return res.json({
            success: false,
            error: "User already exists",
            message: "User already exists",
        })
    }
})

// Route for user signup
router.post("/signup", signup)

module.exports = router