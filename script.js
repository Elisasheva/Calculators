let heightElement = document.querySelector(".js-height");
let weightElement = document.querySelector(".js-weight");
let formElement = document.querySelector(".js-form");
let bmiElement = document.querySelector(".js-bmi");
let resultElement = document.querySelector(".result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let height = heightElement.value;
    let weight = weightElement.value; 

    let bmi = weight / ((height / 100) ** 2);

    bmiElement.innerText =  bmi.toFixed(2);
    resultElement.classList.add("seen");

    console.log(bmi);
});

let formElement2 = document.querySelector(".js-form2");
let heightElement2 = document.querySelector(".js-height2");
let weightElement2 = document.querySelector(".js-weight2");
let ageElement = document.querySelector(".js-age");
let womanElement = document.querySelector(".js-gender-woman");
let manElement = document.querySelector(".js-gender-man");
let cpmElement = document.querySelector(".js-cpm");
let resultElement2 = document.querySelector(".result2");

formElement2.addEventListener("submit", (event) => {
    event.preventDefault();

    let height = heightElement2.value;
    let weight = weightElement2.value;
    let age = ageElement.value;

    let cpmMan = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    let cpmWoman = (10 * weight) + (6.25 * height) - (5 * age) - 161;

    if(manElement.checked) {
        cpmElement.innerText =  cpmMan;
    }
    else if(womanElement.checked) {
        cpmElement.innerText = cpmWoman;
    }
    

    
    resultElement2.classList.add("seen");

})
