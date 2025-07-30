// middleware/validateUpload.js
const { upload_config } = require("../config/config");

const validateUpload = (req, res, next) => {
  const files = req.files;

  if (!files || files.length === 0) {
    return res.status(400).send("No files uploaded");
  }
  

  const invalidFiles = files.filter(file => file.size < upload_config.minFileSize);

  if (invalidFiles.length > 0) {
    const names = invalidFiles.map(f => f.originalname).join(", ");
    return res.status(400).send(
      `Upload failed. These files are too small (less than ${upload_config.minFileSize / 1024}KB): ${names}`
    );
  }
  next();
};

module.exports = validateUpload;