

let send = document.getElementById("send");
let chat = document.getElementById("chat-input");
let chatBox = document.getElementById("chat-box");
let chatContent = document.getElementById("chat-content");
let chatInputDiv = document.getElementById("chat-input-div");

let userName = document.getElementById("name");
let joinChat = document.getElementById("join-chat");

let user;

joinChat.addEventListener('click', function(){
    let name = userName.value;
    user = name;
    if(name){
        socket.emit("join-chat", user);
        chatContent.classList.remove("hide");
        chatInputDiv.classList.add("hide");
    }
})


send.addEventListener("click" , function(){
    console.log("Send clicked");
    let chatMessage = chat.value;
    if(chatMessage){

        socket.emit("chat-send", {user , chatMessage});

        addChat("right", {user , chatMessage});

        // let chatDiv = document.createElement("div");
        // chatDiv.classList.add("chat");
        // chatDiv.classList.add("right");

        // let chatName = document.createElement("div");
        // chatName.classList.add("chat-name");
        // chatName.innerHTML = user;

        // let chatText = document.createElement("div");
        // chatText.classList.add("chat-text");
        // chatText.innerHTML = chatMessage;

        // chatDiv.append(chatName);
        // chatDiv.append(chatText);

        // chatBox.append(chatDiv);

        chatBox.scrollTop = chatBox.scrollHeight;

        chat.value = '';
    }
});