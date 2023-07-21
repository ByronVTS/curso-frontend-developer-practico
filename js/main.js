const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleMenuDesktop);
burguerMenu.addEventListener("click", toggleMenuMobile);
menuCarritoIcon.addEventListener("click", toggleAside);

function toggleMenuDesktop(){
     // Preguntamos si ese selector  no tiene dicha clase activa
     const isMobileMenuClosed = mobileMenu.classList.contains("inactive")

     if(!isMobileMenuClosed){
         mobileMenu.classList.add("inactive")
     }
     
      aside.classList.toggle("inactive")
     // console.log("toogle aside");x
    desktopMenu.classList.toggle("inactive")
}
function toggleMenuMobile(){
    const isAsideClosed = aside.classList.contains("inactive")

    if(!isAsideClosed){
        aside.classList.toggle("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}
function toggleAside(){
    // Preguntamos si ese selector  no tiene dicha clase activa
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }
    
     aside.classList.toggle("inactive")
    // console.log("toogle aside");
}

