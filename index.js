import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";
import fs from "fs";
import path from "path";
import axios from "axios";

const app = express();
app.use(express.json());
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.get("/", (req, res) => {
  res.send({ hello: "hi" });
});

io.on("connection", (socket) => {
  console.log("first");
});

try {
  app.post("/", (req, res) => {
    let message = req.body.message;
    let messageText = req.body.message.content.text;

    // if (message.direction == "received") {
    io.emit("receivedMessage", message);
    console.log(messageText, "res");
    // }
    // socket.emit("receivedMessage", message);

    res.send({ have: "body" });
  });
} catch (error) {
  console.log(error);
}

try {
  app.get("/download", (req, res) => {
    // let message = req.body.message;
    const url =
      "https://firebasestorage.googleapis.com/v0/b/whatsapp-dfa36.appspot.com/o/Documentation%20Portal%20Link%20(3).pdf?alt=media&token=8fd87076-f06c-471d-9962-07a0afe40ae9";

    const filePath = path.resolve(__dirname, "file", "download.png");
    const fileStream = fs.createWriteStream(filePath);
    res.download();
    res.send({ hi: "femi" });
  });
} catch (error) {
  console.log(error, "error");
}

httpServer.listen(3000);
