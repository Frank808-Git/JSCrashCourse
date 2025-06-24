//Comments look like this
//; semicolons are not necessary

//Open and close the menu
document.querySelector("#open-nav-menu").addEventListener("click", function() { //This is just a lambda
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
})



//Greetings

const greetingText = "Good Morning!";
const weatherCondition = "sunny";
const locationText = "Vancouver";

let temp = 20.367;

let cText = `The weather is ${weatherCondition} in ${locationText} and it's ${temp.toFixed()}°C outside.`;
let fText = `The weather is ${weatherCondition} in ${locationText} and it's ${convertToF(temp).toFixed()}°F outside.`;

document.querySelector("h1#greeting").innerHTML= greetingText;
document.querySelector("p#weather").innerHTML= cText;

//Temperature switch
function convertToF(num)
{
    return (num * 1.8) + 32;
}

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


//Date and time
//# is for finding ids, . is for finding classes, X[Y=Z] is a more general way of finding elements

function setTime()
{
    let time = new Date();

    document.querySelector("span[data-time=hours]").textContent= (time.getHours().toString().padStart(2, '0'));
    document.querySelector("span[data-time=minutes]").textContent= (time.getMinutes().toString().padStart(2, '0'));
    document.querySelector("span[data-time=seconds]").textContent= (time.getSeconds().toString().padStart(2, '0'));
}

setTime()
setInterval(setTime, 1000);

//Image Gallery

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
]

let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");

mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;

//Loops through each image in image gallery and makes a thumbnail
//Then appends the thumbnail to the thumbnails class
galleryImages.forEach(function(img, idx){
    let thumb = document.createElement("img");
    thumb.src = img.src;
    thumb.alt = img.alt;
    thumb.dataset.arrayIndex = idx;
    thumb.dataset.selected = false;
    thumbnails.appendChild(thumb);
});


