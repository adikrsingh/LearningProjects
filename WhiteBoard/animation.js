let show = document.getElementById('show');
let cross = document.getElementById('cross');
toolButton.addEventListener('click',function(){

    //console.log("hamburger");
    if(toolBox.classList.contains("hide")){
        toolBox.classList.remove("hide");
        show.classList.add("hide");
        cross.classList.remove("hide");
    } else {
        toolBox.classList.add("hide");
      
        cross.classList.add("hide");    
        show.classList.remove("hide")
    }

    //     console.log("tool box clicked");
    //     //console.log("Before:  "+toolBox.style.display);
    //     if(toolBox.style.display === "flex"){
    //         toolBox.style.display = "none";
    //     } else {
    //         toolBox.style.display = "flex"
    //     }
    //  //   toolBox.style.display =  toolBox.style.display = "flex" ? "none" : "flex";
    //     console.log(toolBox.style.display);
})