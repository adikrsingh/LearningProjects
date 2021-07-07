const express = require("express");
const cors = require('cors')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.use(cors());
app.get("/",function(req,res){
    res.send("<h1>Welcome to Home page</h1>")
})

// app.get("/profile",function(req,res){
//     res.send("<h1>Welcome to profile page</h1>")
// })


// app.listen(3000, function(){
//     console.log("server up and running");
// })

server.listen(3000, () => {
    console.log('listening on *:3000');
  });



io.on('connection', (socket) => {
  console.log(`${socket.id} a user connected`);

  socket.on("mousedown",function(point){
    socket.broadcast.emit("md",point);
  })
  socket.on("mousemove",function(point){
    socket.broadcast.emit("mm",point);
  })
});

