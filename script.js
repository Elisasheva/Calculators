let heightElement = document.querySelector(".js-height");
let formElement = document.querySelector(".js-form");

heightElement.addEventListener("input", () => {
    console.log(`Aktualny wzrost: ${heightElement.value}`);
});

formElement.addEventListener("reset", () => {
    console.log('formularz zostal zresetowany');
});

formElement.addEventListener("submit", () => {
    event.preventDefault();
    console.log('formularz zostal wyslany');
});