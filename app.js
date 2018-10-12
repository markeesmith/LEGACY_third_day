#!/usr/bin/env nodejs
                  require("dotenv").config();
var http =        require("http"),
    express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    flash       = require("connect-flash"),
    mongoose    = require("mongoose"),
    Gallery     = require("./models/gallery"),
    Testimonial = require("./models/testimonial");

mongoose.connect(process.env.DATABASE);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(require("express-session")({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(function(req, res, next){
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

var indexRoutes       = require("./routes/index"),
    contactRoutes     = require("./routes/contact"),
    aboutRoutes       = require("./routes/about"),
    galleryRoutes     = require("./routes/gallery"),
    testimonialRoutes = require("./routes/testimonials");
    
app.use("/", indexRoutes);
app.use("/about", aboutRoutes);
app.use("/gallery", galleryRoutes);
app.use("/contact", contactRoutes);
app.use("/testimonials", testimonialRoutes);

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The Third Day Test Site has Started!");
});