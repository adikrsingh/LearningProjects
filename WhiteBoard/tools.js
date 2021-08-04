let undo = document.querySelector('#undo');
let redo = document.getElementById('redo');

let pencolors = document.querySelectorAll(".pencil-color div");

console.log(pencolors);
for(let i = 0 ; i < pencolors.length ; i++){
    pencolors[i].addEventListener("click", function(){
        if(pencolors[i].classList.contains("red")){
            //console.log("Red");
            ctx.strokeStyle = "red";
        } else if(pencolors[i].classList.contains("yellow")){
            //console.log("yellow");
            ctx.strokeStyle = "yellow";
        } else if(pencolors[i].classList.contains("blue")){
            console.log("blue");
            ctx.strokeStyle = "blue";
        } else {
            ctx.strokeStyle = "black";
        }
    })
}

pencil.addEventListener('click' , function(){
    if(!pencil.classList.contains("active-tool")){
        eraser.classList.remove("active-tool");
        eraserOptions.classList.add("hide");
        pencil.classList.add('active-tool');
        ctx.strokeStyle = "black";
        ctx.lineWidth = pencilWidth;
    } else {
        //already active
        if(pencilOptions.classList.contains("hide")){
            pencilOptions.classList.remove("hide");
        } else {
            pencilOptions.classList.add("hide");
        }
    }
})
let activeTool = pencil;
eraser.addEventListener('click' , function(){
    if(!eraser.classList.contains("active-tool")){
        pencil.classList.remove("active-tool");
        pencilOptions.classList.add("hide");
        eraser.classList.add("active-tool");
        ctx.strokeStyle = "white";
        ctx.lineWidth = eraserWidth;
    } else {
        //already active
        if(eraserOptions.classList.contains("hide")){
            eraserOptions.classList.remove("hide");
        } else {
            eraserOptions.classList.add("hide");
        }
    }
})




undo.addEventListener('click', function(){
    if(pointDB.length){
        let latestLine = pointDB.pop();
        redoPoints.push(latestLine);
        ctx.clearRect(0 , 0, canavs.width , canavs.height);
        drawPoints();
    }
})

redo.addEventListener('click', function(){
    // console.log("redo clicked");

    if(redoPoints.length){
        let line = redoPoints.pop();
        pointDB.push(line);
        for(let i = 0; i<line.length;i++){
            ctx.lineWidth = line[i].lineWidth;
            ctx.strokeStyle = line[i].strokeStyle;
            if(line[i].id == "md"){
                ctx.beginPath();
                ctx.moveTo(line[i].x , line[i].y);
            } else {
                ctx.lineTo(line[i].x , line[i].y);
                ctx.stroke();
            }
        }
    }
})

function drawPoints(){
    for(let i = 0 ; i <  pointDB.length;i++){
        let line = pointDB[i];
        for(let j = 0; j<line.length; j++){
            ctx.lineWidth = line[j].lineWidth;
            ctx.strokeStyle = line[j].strokeStyle;
            if(line[j].id == "md"){
                ctx.beginPath();
                ctx.moveTo(line[j].x , line[j].y);
            } else {
                ctx.lineTo(line[j].x , line[j].y);
                ctx.stroke();
            }
        }
    }
}