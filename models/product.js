const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    HEIName: {
        type: String,
        required: [true, 'Please provide name of the HEI']
    },
    TrackId: {
        type: String
    },
    AisheId: {
        type: String
    },
    AffiliatingUniversity: {
        type: String
    },
    Address: {
        type: String
    },
    CurrentCycleNumber: {
        type: String
    },
    CurrentCGPA	: {
        type: String
    },
    CurrentGrade: {
        type: String
    },
    DateOfDeclaration: {
        type: String
    },
    SCNumber: {
        type: String
    }
});

module.exports = mongoose.model('Product', ProductSchema);