var express    = require("express"),  
    router     = express.Router(),
    Gallery    = require("../models/gallery");
    
router.get("/", function(req, res) {
    Gallery.find({}, function(err, allGalleries){
        if(err){
            req.flash("error", "Whoops! Something went wrong with rendering the gallery. Please try again or contact us directly.");
            res.redirect("back");
        } else {
            res.render("gallery/index", {galleries: allGalleries});
        }
    });
});

router.get("/:id", function(req, res) {
    Gallery.findById(req.params.id, function(err, foundGallery){
        if(err) {
            req.flash("error", "Whoops! There was an issue finding this gallery. Please try again or contact us directly.");
            res.redirect("back");
        } else {
            res.render("gallery/show", {gallery: foundGallery});
        }
    });
});

module.exports = router;