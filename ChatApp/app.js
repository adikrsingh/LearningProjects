const express = require("express");
const app = express();

// socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);



// client ko public folder ka access
app.use( express.static("public"));

let users = [];

app.get('/', (req, res) => {
    res.redirect("/index.html");
});

io.on('connection', function(socket){


    console.log(`${socket.id} connected`);
    socket.on("join-chat", function(name){
        socket.broadcast.emit("user-joined",name);
        users.push({id:socket.id , name});
    });
    
    socket.on("chat-send"  ,function(userObj){
        socket.broadcast.emit("receive-chat" , userObj);
    })

    socket.on("disconnect" , function(){
        let user = users.filter(function(userObj){
            return userObj.id == socket.id;
        })
        
        if(user){
            socket.broadcast.emit("leave" ,user[0].name);
        }
        

        users = users.filter(function(userObj){
            return userObj.id != socket.id;
        })
    })

});

http.listen(3000, () => {
    console.log('listining on port 3000');
})
