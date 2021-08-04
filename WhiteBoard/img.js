let impageUpload = document.getElementById('photo-Upload');
let upload = document.getElementById('upload');
let download = document.getElementById('download');

upload.addEventListener("click",function(){
    impageUpload.click();
})

impageUpload.addEventListener("change",function(){
   let filesObject = impageUpload.files[0];  //Ek object milega
   let filesPath = URL.createObjectURL(filesObject); // path me change karega object ko

   let img = document.createElement('img');
   img.classList.add("img");
   img.setAttribute("src" , filesPath);    //img banakar src me path set kiya

   let sticky_content = createSticky();
   sticky_content.appendChild(img);   //body me append kar diye
      
})

download.addEventListener("click", function(){
    let filesPath = canavs.toDataURL("image/png");

    let aTag = document.createElement('a');
    aTag.setAttribute("download", "canavas.png");  // attribute hai jo download pr help karti hai
    aTag.setAttribute("href",filesPath);
    aTag.click();
    aTag.remove();
})
