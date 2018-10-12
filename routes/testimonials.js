var express     = require("express"),  
    router      = express.Router(),
    Testimonial = require("../models/testimonial");
    
router.get("/", function(req, res) {
    Testimonial.find({}, function(err, allTestimonials){
        if(err) {
            req.flash("error", "Whoops! Something went wrong with rendering our testimonials. Please try again or contact us at our work number.");
            res.redirect("back");
        }  else {
            res.render("testimonials/index", {testimonials: allTestimonials});
        }
    });
});

module.exports = router;