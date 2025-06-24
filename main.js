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

//Temperature switch

let temp = 20.367;
let degrees = "C";
let weatherText = `The weather is ${weatherCondition} in ${locationText} and it's ${temp.toFixed()}°${degrees} outside.`;

document.querySelector("h1#greeting").innerHTML= greetingText;
document.querySelector("p#weather").innerHTML= weatherText;
