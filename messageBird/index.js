require("dotenv").config();
const messagebird = MB(process.env.MBKEY);

messagebird.messages.list(function (err, response) {
  if (err) {
    return console.log(err);
  }
  console.log(response);
});
