

let stickyadd = document.getElementById("sticky");
stickyadd.addEventListener('click' , function(){
    console.log("sticky clicked");
    
    let sticky_content = createSticky();
    let textBox = document.createElement("textarea");
    textBox.setAttribute("class" , "sticky-box");

    textBox.setAttribute("cols" , "30");
    textBox.setAttribute("rows" , "10");


    sticky_content.appendChild(textBox);

});