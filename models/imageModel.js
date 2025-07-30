const mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
    name:{
        type : String
    },
    path: {
        type : String
    },
    type:{
        type : String
    },
    size:{
        type: Number
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Image",imageSchema);