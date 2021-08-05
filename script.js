function show()
{   const downarrow=document.querySelector(".down-arrow.product");
    downarrow.classList.toggle("add");
    const uparrow=document.querySelector(".up-arrow.product");
    uparrow.classList.toggle("add");

    const dropdown=document.querySelector(".sub-nav-bar.product");
    dropdown.classList.toggle("active");
    // small nav bar functions
    const smallDown=document.querySelector(".small-nav-bar .sub-nav-bar.product");
    smallDown.classList.toggle("down");

    const smallClickDown=document.querySelector(".small-nav-bar img.off.product");
    smallClickDown.classList.toggle("rotate");
    const smallClickUp=document.querySelector(".small-nav-bar img.on.product");
    smallClickUp.classList.toggle("rotate");
}
function show1()
{
    const downarrow1=document.querySelector(".down-arrow.company");
    downarrow1.classList.toggle("add");
    const uparrow1=document.querySelector(".up-arrow.company");
    uparrow1.classList.toggle("add");

    const dropdown1=document.querySelector(".sub-nav-bar.company");
    dropdown1.classList.toggle("active");
    // small nav bar functions
    const smallDown1=document.querySelector(".small-nav-bar .sub-nav-bar.company");
    smallDown1.classList.toggle("down");

    const smallClickDown1=document.querySelector(".small-nav-bar img.off.company");
    smallClickDown1.classList.toggle("rotate");
    const smallClickUp1=document.querySelector(".small-nav-bar img.on.company");
    smallClickUp1.classList.toggle("rotate");
}
function show2()
{   
    const downarrow2=document.querySelector(".down-arrow.connect");
    downarrow2.classList.toggle("add");
    const uparrow2=document.querySelector(".up-arrow.connect");
    uparrow2.classList.toggle("add");

    const dropdown2=document.querySelector(".sub-nav-bar.connect");
    dropdown2.classList.toggle("active");
    // small nav bar functions
    const smallDown2=document.querySelector(".small-nav-bar .sub-nav-bar.connect");
    smallDown2.classList.toggle("down");

    const smallClickDown2=document.querySelector(".small-nav-bar img.off.connect");
    smallClickDown2.classList.toggle("rotate");
    const smallClickUp2=document.querySelector(".small-nav-bar img.on.connect");
    smallClickUp2.classList.toggle("rotate");
}

function view(){
    console.log("yeeess");
    const navbar = document.querySelector(".small-nav-bar .begin-nav-bar");
    const  menuButton = document.querySelector(".open");
    const closeButton = document.querySelector(".close");
    navbar.classList.toggle("toggle");
    menuButton.classList.toggle("toggle");
    closeButton.classList.toggle("toggle");
}