const nodemailer = require("nodemailer");
let user = {
        username: "tanishapavecha@gmail.com",
        pass: "jybb blau bimn fzlw",
}
const sendMail = async (req, res, next) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: user.username,
        pass: user.pass,
      },
    });
    let info = await transporter.sendMail({
      from: '"Tanisha Pavecha" <tanishapavecha@gmail.com>',
      to: "tanishapavecha.techify@gmail.com",
      subject: "Hello ",
      text: `Hello! Files attached below: ${req.files
        .map((f) => f.originalname)
        .join(", ")}`,
      //   html: `<b>hello! file attached below ${req.file.originalname}<b>`,
      attachments: req.files.map((file) => ({
        filename: file.originalname,
        path: file.path,
      })),
    });

    console.log("Message sent:", info.messageId);
    res.status(200).send(" Files uploaded and email sent successfully!");
    next();
  } catch (error) {
    console.error("Error sending email", error);
    res.status(500).send("Error sending email");
  }
};
module.exports = { sendMail };
