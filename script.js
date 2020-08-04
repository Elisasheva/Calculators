const heightElement = document.querySelector(".js-height");
const weightElement = document.querySelector(".js-weight");
const formElement = document.querySelector(".js-form");
const bmiElement = document.querySelector(".js-bmi");
const resultElement = document.querySelector(".result");
const descriptionElement = document.querySelector(".result_description")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const height = heightElement.value;
    const weight = weightElement.value;

    const bmi = weight / ((height / 100) ** 2);

    bmiElement.innerText = bmi.toFixed(2);
    resultElement.classList.add("seen");

    if (bmi < 16) {
        descriptionElement.innerText = "Wygłodzenie. Masa ciała jest zbyt niska. Skontaktuj się ze swoim lekarzem, który przeprowadzi wywiad medyczny i być może zleci wykonanie badań diagnostycznych i/lub modyfikację diety.";
    }
    else if (bmi > 16 && bmi <= 18.49) {
        descriptionElement.innerText = "Niedowaga. Masa ciała jest zbyt niska. Rozważ konsultację lekarską i wzbogać dietę o zdrowe tłuszcze roślinne, białko oraz węglowodany złożone.";
    }
    else if (bmi >= 18.5 && bmi <= 24.99) {
        descriptionElement.innerText = "Masa ciała jest prawidłowa. Dbaj o bogatą w warzywa i owoce dietę oraz codzienną dawkę sportu, aby utrzymać dobrą formę.";
    }
    else if (bmi >= 25 && bmi <= 29.99) {
        descriptionElement.innerText = "Nadwaga. Masa ciała jest zbyt wysoka. Rozważ konsultację lekarską i modyfikację stylu życia.";
    }
    else if (bmi >= 30 && bmi <= 34.99) {
        descriptionElement.innerText = "Otyłość I stopnia. Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość I stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Wdrażając zmiany, unikniesz powikłań otyłości i zachowasz zdrowie na dłużej.";
    }
    else if (bmi >= 35 && bmi <= 39.99) {
        descriptionElement.innerText = "Otyłość II stopnia (duża). Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość II stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Wdrażając zmiany, unikniesz powikłań otyłości i zachowasz zdrowie na dłużej.";
    }
    else if (bmi >= 40) {
        descriptionElement.innerText = "Otyłość III stopnia (chorobliwa). Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość III stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Być może konieczne będzie wprowadzenie leczenia farmakologicznego. Wdrażając zmiany i przestrzegając zaleceń lekarza, unikniesz powikłań otyłości i zachowasz zdrowie na dłużej.";
    }
});

const formElement2 = document.querySelector(".js-form2");
const heightElement2 = document.querySelector(".js-height2");
const weightElement2 = document.querySelector(".js-weight2");
const ageElement = document.querySelector(".js-age");
const womanElement = document.querySelector(".js-gender-woman");
const manElement = document.querySelector(".js-gender-man");
const cpmElement = document.querySelector(".js-cpm");
const resultElement2 = document.querySelector(".result2");
const noActivity = document.querySelector(".no-activity");
const mildActivity = document.querySelector(".mild-activity");
const averageActivity = document.querySelector(".average-activity");
const highActivity = document.querySelector(".high-activity");
const veryhighActivity = document.querySelector(".very-high-activity");

formElement2.addEventListener("submit", (event) => {
    event.preventDefault();

    const height = heightElement2.value;
    const weight = weightElement2.value;
    const age = ageElement.value;

    const cpmMan = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    const cpmWoman = (10 * weight) + (6.25 * height) - (5 * age) - 161;

    if (womanElement.checked && noActivity.selected) {
        cpmElement.innerText = Math.round((cpmWoman) * 1.2);
    }
    else if (womanElement.checked && mildActivity.selected) {
        cpmElement.innerText = Math.round((cpmWoman) * 1.4);
    }
    else if (womanElement.checked && averageActivity.selected) {
        cpmElement.innerText = Math.round((cpmWoman) * 1.6);
    }
    else if (womanElement.checked && highActivity.selected) {
        cpmElement.innerText = Math.round((cpmWoman) * 1.8);
    }
    else if (womanElement.checked && veryhighActivity.selected) {
        cpmElement.innerText = Math.round((cpmWoman) * 2);
    }
    else if (manElement.checked && noActivity.selected) {
        cpmElement.innerText = Math.round((cpmMan) * 1.2);
    }
    else if (manElement.checked && mildActivity.selected) {
        cpmElement.innerText = Math.round((cpmMan) * 1.4);
    }
    else if (manElement.checked && averageActivity.selected) {
        cpmElement.innerText = Math.round((cpmMan) * 1.6);
    }
    else if (manElement.checked && highActivity.selected) {
        cpmElement.innerText = Math.round((cpmMan) * 1.8);
    }
    else if (manElement.checked && veryhighActivity.selected) {
        cpmElement.innerText = Math.round((cpmMan) * 2);
    }

    resultElement2.classList.add("seen");

})
