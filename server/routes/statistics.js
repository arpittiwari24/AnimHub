const express = require("express")
const router = express.Router()

const {topUsersWithComponents,topUsersWithFollowers,topUsersWithLikes} = require("../controllers/statistics");

// ********************************************************************************************************
//                                     Statistics routes
// ********************************************************************************************************

//route for getting top user's with components
router.get("/topUsersWithComponents",topUsersWithComponents);

//route for getting top user's with followers
router.get("/topUsersWithFollowers",topUsersWithFollowers);

//router for getting top user's with most likes on their components
router.get("/topUsersWithLikes",topUsersWithLikes);

module.exports = router;