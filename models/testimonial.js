var mongoose = require("mongoose");

var testimonialSchema = new mongoose.Schema({
    headline: String,
    body: String,
    reviewName: String
});

module.exports = mongoose.model("Testimonial", testimonialSchema);