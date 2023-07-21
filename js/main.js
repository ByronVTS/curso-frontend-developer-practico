const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleMenuDesktop);
burguerMenu.addEventListener("click", toggleMenuMobile);
menuCarritoIcon.addEventListener("click", toggleAside);

function toggleMenuDesktop(){
     // Preguntamos si ese selector  no tiene dicha clase activa
     const isMobileMenuClosed = mobileMenu.classList.contains("inactive")

     if(!isMobileMenuClosed){
         mobileMenu.classList.add("inactive")
     }
     
     shoppingCartContainer.classList.toggle("inactive")
     // console.log("toogle aside");x
    desktopMenu.classList.toggle("inactive")
}
function toggleMenuMobile(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")

    if(!isAsideClosed){
        shoppingCartContainer.classList.toggle("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}
function toggleAside(){
    // Preguntamos si ese selector  no tiene dicha clase activa
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }
    
    shoppingCartContainer.classList.toggle("inactive")
    // console.log("toogle aside");
}

const productList = []
productList.push({
    name: "Pochita 1",
    price: "1 millon",
    image: "../img/Pochita.PNG.webp"
})
productList.push({
    name: "Pochita",
    price: "1 millon",
    image: "../img/Pochita.PNG.webp"
})
productList.push({
    name: "Pochita",
    price: "1 millon",
    image: "../img/Pochita.PNG.webp"
})
productList.push({
    name: "Pochita",
    price: "1 millon",
    image: "../img/Pochita.PNG.webp"
})
productList.push({
    name: "Pochita",
    price: "1 millon",
    image: "../img/Pochita.PNG.webp"
})

function renderProducts (arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div")
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" +product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement("figure")
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "../icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)
