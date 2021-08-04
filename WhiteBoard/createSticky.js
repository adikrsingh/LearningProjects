function createSticky(){

    let sticky = document.createElement("div");
    sticky.classList.add("sticky");
    
    let sticky_header = document.createElement("div");
    sticky_header.classList.add("sticky-header");

    let minimize = document.createElement("div");
    minimize.classList.add("minimize");

    let close = document.createElement("div");
    close.classList.add("close");

    let sticky_content = document.createElement("div");
    sticky_content.classList.add("sticky-content");

    sticky_header.appendChild(minimize);
    sticky_header.appendChild(close);
    sticky.appendChild(sticky_header);
    sticky.appendChild(sticky_content);
    document.body.appendChild(sticky);


    let initialX;
    let initialY;
    let isStickyHold = false;

    sticky_header.addEventListener('mousedown', function(e){
        isStickyHold = true;
        initialX = e.clientX;
        initialY = e.clientY;
    })

    sticky_header.addEventListener('mousemove', function(e){
        if(isStickyHold){
            let finalX = e.clientX;
            let finalY = e.clientY;
            let dx = finalX - initialX;
            let dy = finalY - initialY;

            let {top , left} = sticky.getBoundingClientRect();

            sticky.style.top = top + dy + "px";
            sticky.style.left = left + dx + "px"

            initialX = finalX;
            initialY = finalY;
        }
    })

    sticky_header.addEventListener('mouseup' , function(e){
        isStickyHold = false;
    })

   



    minimize.addEventListener('click' , function(){
        sticky_content.style.display = sticky_content.style.display == "none" ? "flex" : "none";
    })

    close.addEventListener('click' , function(){
        sticky.remove();
    })

    return sticky_content;
}