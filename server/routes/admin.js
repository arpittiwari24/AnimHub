const express = require("express")
const router = express.Router()

const {verifyComponent} = require("../controllers/admin");

// ********************************************************************************************************
//                                     Admin routes
// ********************************************************************************************************

router.post("/verifyComponent",verifyComponent);


module.exports = router;