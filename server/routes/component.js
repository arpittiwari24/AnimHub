const express = require("express")
const router = express.Router()

const {createComponent,deleteComponent} = require("../controllers/components");

// ********************************************************************************************************
//                                      Component routes
// ********************************************************************************************************

// Route for component creation
router.post('/createComponent',createComponent)

// Route for component deletion
router.post('/deleteComponent',deleteComponent)


module.exports = router