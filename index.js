import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
app.use(express.json());
let obj = "";
app.post("/", (req, res) => {
  obj = req.body.message.content.text;
  res.send({ name: obj });
});
app.get("/", (req, res) => {
  res.send({ name: "obj" });

  console.log(obj);
});

app.listen(4001, () => console.log("listenings on port 4001"));
