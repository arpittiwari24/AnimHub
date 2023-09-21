const express = require("express")
const router = express.Router()


const { createCategory, updateCategory, getAllCategories } = require("../controllers/category");


// const userModel = require("../models/user.model");


// ********************************************************************************************************
//                                    Category routes
// ********************************************************************************************************

// Route for user signup
router.post("/createCategory", createCategory)

// Route for user login
router.post("/updateCategory", updateCategory)

router.get("/getAllCategories", getAllCategories)


module.exports = router