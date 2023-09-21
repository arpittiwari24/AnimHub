const express = require("express")
const router = express.Router()


const { createTag, updateTag, getAllTags } = require("../controllers/tag");


// const userModel = require("../models/user.model");


// ********************************************************************************************************
//                                    Tag routes
// ********************************************************************************************************

// Route for user signup
router.post("/createTag", createTag)

// Route for user login
router.post("/updateTag", updateTag)

router.get("/getAllTags", getAllTags)


module.exports = router