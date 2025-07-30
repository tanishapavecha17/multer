const saveimgToDb = require("../services/imageUpload");

const imageUploadcontroller = async (req, res, next) => {
  try {
    for (const file of req.files) {
      await saveimgToDb(file);
    }
    next();
  } catch (error) {
    console.error("Upload error", error);
    res.status(500).send("Something went wrong during file upload");
  }
};

module.exports = { imageUploadcontroller, };
