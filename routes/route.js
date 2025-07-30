const express = require("express");
const upload = require("../middleware/uploadmiddleware");
const { sendMail } = require("../controllers/sendMail");
const {  imageUploadcontroller } = require("../controllers/imageUploadController");
const validateUpload = require("../validations/validateupload");
const router = express.Router();
router.get("/",(req,res)=>{
    return res.render("page");
});
router.post("/upload",upload.array("profileImage",5),validateUpload,imageUploadcontroller ,sendMail);

module.exports = router;