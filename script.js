let heightElement = document.querySelector(".js-height");
let weightElement = document.querySelector(".js-weight");
let formElement = document.querySelector(".js-form");
let bmiElement = document.querySelector(".js-bmi");
let resultElement = document.querySelector(".result");
let buttonElement = document.querySelector("button");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let height = heightElement.value;
    let weight = weightElement.value; 

    let bmi = weight / ((height / 100) ** 2);

    bmiElement.innerText =  bmi.toFixed(2);
    resultElement.classList.add("seen");

    console.log(bmi);
});

