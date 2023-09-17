const express = require("express")
const router = express.Router()

const {createComponent,updateComponent,deleteComponent,likeComponent,unlikeComponent} = require("../controllers/components");

// ********************************************************************************************************
//                                      Component routes
// ********************************************************************************************************

// Route for component creation
router.post('/createComponent',createComponent)

// Route for component updation
router.post('/updateComponent',updateComponent)

// Route for component deletion
router.post('/deleteComponent',deleteComponent)

// Route for liking the component
router.post('/likeComponent',likeComponent)

// Route for Unliking the component
router.post('/unlikeComponent',unlikeComponent)



module.exports = router