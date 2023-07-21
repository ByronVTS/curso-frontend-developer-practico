const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleMenuDesktop);
burguerMenu.addEventListener("click", toggleMenuMobile);
menuCarritoIcon.addEventListener("click", toggleAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

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

    closeProductDetailAside()
    
    mobileMenu.classList.toggle("inactive")
}
function toggleAside(){
    // Preguntamos si ese selector  no tiene dicha clase activa
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }
    
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive")

    if(!isProductDetailClosed){
       productDetailContainer.classList.add("inactive")
    }
    shoppingCartContainer.classList.toggle("inactive")
    // console.log("toogle aside");
}

function openProductInfo(){
    shoppingCartContainer.classList.add("inactive")
    productDetailContainer.classList.remove("inactive")
}
function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive")
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
        productImg.addEventListener("click", openProductInfo)
    
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
