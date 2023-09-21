const express = require("express")
const router = express.Router()

const {
    getAllComponents,
    createComponent,
    updateComponent,
    deleteComponent,
    likeComponent,
    unlikeComponent,
    trendingComponents,
    getCategoryComponents,
    getTagsComponents,
    getLanguageComponents
} = require("../controllers/components");

// ********************************************************************************************************
//                                      Component routes
// ********************************************************************************************************

//Route for getting all the components
router.get('/getAllComponents', getAllComponents);

// Route for component creation
router.post('/createComponent', createComponent)

// Route for component updation
router.post('/updateComponent', updateComponent)

// Route for component deletion
router.post('/deleteComponent', deleteComponent)

// Route for liking the component
router.post('/likeComponent', likeComponent)

// Route for Unliking the component
router.post('/unlikeComponent', unlikeComponent)

//Route for fetching rending components
router.get('/trendingComponents', trendingComponents)

router.post('/getCategoryComponents',getCategoryComponents)

router.post('/getTagsComponents',getTagsComponents)

router.post('/getLanguageComponents',getLanguageComponents)

module.exports = router