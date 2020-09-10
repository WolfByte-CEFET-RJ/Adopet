const express = require("express");
const app = express();
const dateTime = require("simple-datetime-formater");
const bodyParser = require("body-parser");
const chatRouter = require("./route/chatroute");
const loginRouter = require("./route/loginRoute");

const http = require("http").Server(app);

const io = require("socket.io");

const port = 5000;

app.use(bodyParser.json());

app.use("/chats", chatRouter);
app.use("/login", loginRouter);

app.use(express.static(__dirname + "/public"));

socket = io(http);

//db trocar para mysql
const connection = require("./models/connection");

socket.on("connection", socket => {
  console.log("user connected");

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });

  //escrevendo
  socket.on("typing", data => {
    socket.broadcast.emit("notifyTyping", {
      user: data.user,
      message: data.message
    });
  });

  //parou de escrever
  socket.on("stopTyping", () => {
    socket.broadcast.emit("notifyStopTyping");
  });

  socket.on("chat message", async function(msg) {
    console.log("message: " + msg);

    socket.broadcast.emit("received", { message: msg });
    //salvar o chat na database
    try {
      await connection('chat').insert({
        message: msg,
        sender: "Anonymous" 
      })   // trocar o anonimo posteriormente pro username da pessoa do app
    } catch ( error ) {
        console.log(error)
    }
  });
});

http.listen(port, () => {
  console.log("Running on Port: " + port);
});
