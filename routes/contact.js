var express    = require("express"),  
    router     = express.Router(),
    middleware = require("../middleware/index");
    
router.get("/", function(req, res) {
    res.render("contact/index");
});

router.post("/", middleware.sendMail, function(req, res){
    res.redirect("back");
});

module.exports = router;