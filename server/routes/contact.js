const express = require("express")
const router = express.Router()


const {createContactForm} = require("../controllers/contact");



// ********************************************************************************************************
//                                      Contact routes
// ********************************************************************************************************

// Route for user signup
router.post("/createContactForm", createContactForm)



module.exports = router