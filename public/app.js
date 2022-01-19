var MenuItems = document.getElementById("MenuItems");
var togglerImg = document.getElementById("togglerimg");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
        togglerImg.src = "Images/cross.png"
    }
    else {
        MenuItems.style.maxHeight = "0px";
        togglerImg.src = "Images/menu.png"
    }
}
var fbi = document.getElementById("fbi");
var insi = document.getElementById("insi");
var whi = document.getElementById("whi");
var giti = document.getElementById("giti")
function zoominfb(){
    
    /* fbi.setAttribute("data-aos" , "flip-up"); */
    fbi.classList.add( "animate__animated" , "animate__shakeX");
}
    
function zoomoutfb(){
    fbi.classList.remove("animate__animated" , "animate__shakeX");
   
   
}
function zoominins(){
    insi.classList.add( "animate__animated" , "animate__shakeX");
}
function zoomoutins(){
    insi.classList.remove("animate__animated" , "animate__shakeX");
}
function zoominwh(){
    whi.classList.add( "animate__animated" , "animate__shakeX");

    
}
function zoomoutwh(){
    whi.classList.remove("animate__animated" , "animate__shakeX");
}
function zoomingit(){
    giti.classList.add( "animate__animated" , "animate__shakeX");
}
function zoomoutgit(){
    giti.classList.remove("animate__animated" , "animate__shakeX");
}
