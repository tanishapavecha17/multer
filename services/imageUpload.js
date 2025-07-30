const Image = require("../models/imageModel");

const saveimgToDb = async (file)=>{
    const fileData = {
        name: file.filename,
        path: file.path,
        type: file.mimetype,
        size: file.size
    };
    const savedImage =  await Image.create(fileData);
    console.log(savedImage);
    
    return savedImage;  
};

module.exports = saveimgToDb;