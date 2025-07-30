const multer = require("multer");
const upload_config = {
    allowedextensions :  [".jpg", ".png", ".pdf"],
    allowedmimetypes: ["image/jpeg", "image/png", "application/pdf"],
    maxFileSize: 1 * 1024 * 1024,
    minFileSize: 100 * 1024 ,
    uploadPath : "./uploads",
};

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        return cb(null,"./uploads")
    },
    filename: function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`);
    },
});
module.exports = {
    storage,
    upload_config
};