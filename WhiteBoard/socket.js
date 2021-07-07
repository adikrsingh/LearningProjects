
socket.on("md", function(point){
    let myStyle = ctx.strokeStyle;
    let myWidth = ctx.linewidth;

    ctx.strokeStyle = point.strokeStyle;
    ctx.linewidth = point.linewidth;
    ctx.beginPath();
    ctx.moveTo(point.x,point.y);

 
    ctx.linewidth = myWidth;
    ctx.strokeStyle = myStyle;   

})
socket.on("mm", function(point){    
    let myStyle = ctx.strokeStyle;
    let myWidth = ctx.linewidth;

    ctx.strokeStyle = point.strokeStyle;
    ctx.linewidth = point.linewidth;
    ctx.lineTo(point.x,point.y);
    ctx.stroke();

    ctx.linewidth = myWidth;
    ctx.strokeStyle = myStyle;
});