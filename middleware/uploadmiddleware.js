const multer = require("multer");
const path = require("path");

const{ storage,upload_config} = require("../config/config")

//will check for filetype here
const fileFilter = (req,file,cb)=>{
  const ext = path.extname(file.originalname).toLowerCase();
  const mime = file.mimetype;

  const isExtensionValid = upload_config.allowedextensions.includes(ext);
  const isMimeValid = upload_config.allowedmimetypes.includes(mime);
  
  if (isExtensionValid && isMimeValid) {
    cb(null, true);  //null for no error and yes meams accept the file
  } else {
    cb(new Error("Only JPG, PNG and PDF files are allowed!"), false);
  }
}
const uploadmiddleware = multer({
    storage,
    fileFilter,
    limits:{
        fileSize: upload_config.maxFileSize,
    }
});

module.exports = uploadmiddleware;