var mongoose = require("mongoose");

var gallerySchema = new mongoose.Schema({
    galleryType: String,
    galleryNum: Number,
    numItems: Number
});

module.exports = mongoose.model("Gallery", gallerySchema);