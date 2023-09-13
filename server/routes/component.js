const express = require("express")
const router = express.Router()

const {createComponent,deleteComponent} = require("../controllers/components");

// ********************************************************************************************************
//                                      Component routes
// ********************************************************************************************************

router.post('/createComponent',createComponent)

router.post('/deleteComponent',deleteComponent)


module.exports = router