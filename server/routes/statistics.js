const express = require("express")
const router = express.Router()

const {
    topUsersWithComponents,
    topUsersWithFollowers,
    topUsersWithLikes,
    totalUsers,
    totalComponents } = require("../controllers/statistics");

// ********************************************************************************************************
//                                     Statistics routes
// ********************************************************************************************************

//route for getting top user's with components
router.get("/topUsersWithComponents", topUsersWithComponents);

//route for getting top user's with followers
router.get("/topUsersWithFollowers", topUsersWithFollowers);

//router for getting top user's with most likes on their components
router.get("/topUsersWithLikes", topUsersWithLikes);

router.get("/totalUsers", totalUsers)

router.get("/totalComponents",totalComponents)

module.exports = router;