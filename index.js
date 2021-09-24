const express = require("express");
const app = express();
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

async function sendMessage() {
  try {
    const t = await client.messages.create({
      from: "whatsapp:+14155238886",
      to: "whatsapp:+916203861756",
      body: `Inaugration!`,
    });
    console.log(t);
  } catch (error) {
    console.log(error);
  }
}
app.use(express.static("public"));
app.post("/msg", async (req, res) => {
  try {
    await sendMessage();
    res.send({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
    });
  }
});
const port = process.env.PORT || 9000;
app.listen(port, function (err) {
  if (!err) {
    console.log("server is running at ", port);
  }
});
