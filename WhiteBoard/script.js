const canavs = document.getElementById('canavas');
const ctx = canavs.getContext('2d');
let pencil = document.getElementById('pencil');
let eraser = document.getElementById('eraser');
let pencilOptions = document.getElementById('pencil-option');
let eraserOptions = document.getElementById('eraser-options');
let pencilSize = document.getElementById('pencil-size');
let eraserSize = document.getElementById('eraser-size');
let toolButton = document.getElementById("tool-button");
let toolBox = document.getElementById('toolBox');

let pencilWidth = 1;
let eraserWidth = 1;

pencilSize.addEventListener('change', function(e){ 
    let size = e.target.value;
    pencilWidth = size;
    ctx.lineWidth = pencilWidth;
})

eraserSize.addEventListener('change', function(e){
    let size = e.target.value;
    eraserWidth = size;
    ctx.lineWidth = eraserWidth;
})






let {top : topOffSet} = canavs.getBoundingClientRect();

canavs.height = window.innerHeight - topOffSet;
canavs.width = window.innerWidth;

window.addEventListener("resize", function(){
    canavs.height = window.innerHeight - topOffSet;
    canavs.width = window.innerWidth;
    drawPoints();  // present in tools.js, Jaise pehle tha, same to same fir se draw karne ke liye hota hai
});

let ispenDown = false;
let pointDB = [];
let line = [];
let redoPoints = [];



canavs.addEventListener("mousedown", function(e){
   

    if(redoPoints.length){
        redoPoints = [];
    }
    ispenDown = true;
    let x = e.clientX;
    let y = e.clientY - topOffSet;
    ctx.beginPath();
    ctx.moveTo(x , y);
    let point = {
        id: "md",
        x : x,
        y : y,
        strokeStyle : ctx.strokeStyle,
        lineWidth: ctx.lineWidth
    }
    socket.emit("mousedown", point);
    line.push(point);
})

canavs.addEventListener("mousemove", function(e){
    if(ispenDown){
        let x = e.clientX;
        let y = e.clientY - topOffSet;
        ctx.lineTo(x,y);
        ctx.stroke();
        let point = {
            id: "mv",
            x : x,
            y : y,
            strokeStyle : ctx.strokeStyle,
            lineWidth: ctx.lineWidth
        }
        socket.emit("mousemove",point);
        line.push(point);
    }
})

canavs.addEventListener("mouseup" , function(e){
    ispenDown = false;
    pointDB.push(line);
    console.log(pointDB);
    line = [];
})