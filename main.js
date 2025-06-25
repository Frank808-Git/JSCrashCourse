//Comments look like this
//; semicolons are not necessary


//Globals
const weatherAPIKey = "35b49c42eff13c5acf3121e08aa77167";
const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric`

const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Robot hand"
    },

    {
        src: "./assets/gallery/image2.jpg",
        alt: "Phone"
    },

    {
        src: "./assets/gallery/image3.jpg",
        alt: "Moon"
    }
];

const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odyssey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
];

//Open and close the menu

function menuHandler()
{
    document.querySelector("#open-nav-menu").addEventListener("click", function() { //This is just a lambda
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });

    document.querySelector("#close-nav-menu").addEventListener("click", function() {
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    })
}

//Greetings

function showGreeting()
{
    let currentHour = new Date().getHours();
    let greetingText;

    if (currentHour < 12 && currentHour > 5)
    {
        greetingText = "Good Morning!";
    }
    else if (currentHour >= 12 && currentHour < 19)
    {
        greetingText = "Good Afternoon!";
    }
    else if (currentHour >= 19 && currentHour < 22)
    {
        greetingText = "Good Evening!";
    }
    else
    {
        greetingText = "Good Night!";
    }
    document.querySelector("h1#greeting").innerHTML= greetingText;

    setInterval(showGreeting, 1800000);
};

//Weather greeting
function weatherHandler(weather, location, temp)
{
    let cText = `The weather is ${weather} in ${location} and it's ${temp.toFixed()}°C outside.`;
    let fText = `The weather is ${weather} in ${location} and it's ${convertToF(temp).toFixed()}°F outside.`;

    document.querySelector("p#weather").innerHTML= cText;

    document.querySelector(".weather-group").addEventListener("click", function(e) {
        if (e.target.id == "fahr")
        {
            document.querySelector("p#weather").innerHTML= fText;
        }
        else if (e.target.id == "celsius")
        {
            document.querySelector("p#weather").innerHTML = cText;
        }
    });
}

//Temperature switch
function convertToF(num)
{
    return (num * 1.8) + 32;
}

//Date and time
//# is for finding ids, . is for finding classes, X[Y=Z] is a more general way of finding elements

function setTime()
{
    let time = new Date();

    document.querySelector("span[data-time=hours]").textContent= (time.getHours().toString().padStart(2, '0'));
    document.querySelector("span[data-time=minutes]").textContent= (time.getMinutes().toString().padStart(2, '0'));
    document.querySelector("span[data-time=seconds]").textContent= (time.getSeconds().toString().padStart(2, '0'));

    setInterval(setTime, 1000);
}

//Image Gallery and Arrays
function galleryHandler()
{
    let mainImage = document.querySelector("#gallery > img");
    let thumbnails = document.querySelector("#gallery .thumbnails");

    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;

    //Gallery selector
    //Loops through each image in image gallery and makes a thumbnail
    //Then appends the thumbnail to the thumbnails class
    galleryImages.forEach(function(img, idx){
        let thumb = document.createElement("img");
        thumb.src = img.src;
        thumb.alt = img.alt;
        thumb.dataset.arrayIndex = idx;
        thumb.dataset.selected = idx === 0 ? true : false;

        thumb.addEventListener("click", function(e){
            let selectedIdx = e.target.dataset.arrayIndex;
            let selectedImage = galleryImages[selectedIdx];
            mainImage.src = galleryImages[selectedIdx].src;
            mainImage.alt = galleryImages[selectedIdx].alt;
            
            thumbnails.querySelectorAll("img").forEach(function(img, id){
                img.dataset.selected = false;
            });

            e.target.dataset.selected = true;
        });

        thumbnails.appendChild(thumb);
    });
}

function productHandler()
{
    let totalProducts = products.length;
    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = totalProducts;

    let paidProducts = products.filter(prod => prod.price > 0);
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;

    let freeProducts = products.filter(prod => prod.price <= 0 || !prod.price);
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;

    productPopulate(products);

    let productFilter = document.querySelector(".products-filter");
    productFilter.addEventListener("click", function(e){
        if (e.target.id === "all")
        {
            productPopulate(products);
        }
        else if (e.target.id === "free")
        {
            productPopulate(freeProducts);
        }
        else if (e.target.id === "paid")
        {
            productPopulate(paidProducts);
        }
    });
}

function productPopulate(productArray)
{
    let productsSection = document.querySelector(".products-area");
    productsSection.textContent = "";

    productArray.forEach(function(product, idx){
        let prod = document.createElement("div");
        prod.classList.add("product-item");

        //Product Image
        let prodImg = document.createElement("img");
        prodImg.src = product.image;
        prodImg.alt = "Image for " + product.title;

        //Product Details
        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        //Product Title
        let prodTitle = document.createElement("h3");
        prodTitle.classList.add("product-title");
        prodTitle.textContent = product.title;
        productDetails.append(prodTitle);

        //Author
        let prodAuthor = document.createElement("p");
        prodAuthor.classList.add("product-author");
        prodAuthor.textContent = product.author;
        productDetails.append(prodAuthor);

        //Price Label
        let priceLabel = document.createElement("p");
        priceLabel.classList.add("price-title");
        priceLabel.textContent = "Price";
        productDetails.append(priceLabel);

        //Price
        let prodPrice = document.createElement("p");
        prodPrice.classList.add("product-price");
        prodPrice.textContent = product.price > 0 ? "$" + product.price.toFixed(2) : "Free";
        productDetails.append(prodPrice);

        prod.append(prodImg);
        prod.append(productDetails);
        productsSection.append(prod);
    });
}

function footerHandler()
{
    let currentYear = new Date().getFullYear();
    document.querySelector("footer").textContent = `© ${currentYear} - All rights reserved`;
}

//Using APIs to Fetch Real Time Data
function fetchData()
{
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let url = weatherAPIURL
            .replace("{lat}", lat)
            .replace("{lon}", long)
            .replace("{API key}", weatherAPIKey);


        fetch(url)
            .then(response => response.json())
            .then(data => {
                const weather = data.weather[0].description;
                const location = data.name;
                const temp = data.main.temp;
                weatherHandler(weather, location, temp)
            });
    });
}

//JSON - JavaScript Object Notation

//Main section
menuHandler();
showGreeting();
fetchData();
setTime()
galleryHandler();
productHandler();
footerHandler();
