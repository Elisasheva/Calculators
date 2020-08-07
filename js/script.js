{
    const formElement = document.querySelector(".bmi_form");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const heightElement = document.querySelector(".bmi_height");
        const weightElement = document.querySelector(".bmi_weight");
        const bmiElement = document.querySelector(".bmi_result");
        const resultElement = document.querySelector(".bmi_result_circle");
        const descriptionElement = document.querySelector(".bmi_result_description");
        const height = heightElement.value;
        const weight = weightElement.value;

        const bmi = weight / ((height / 100) ** 2);

        bmiElement.innerText = bmi.toFixed(2);

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

        resultElement.classList.add("seen");
        
    });
}

{
    const formElement2 = document.querySelector(".cpm_form");

    formElement2.addEventListener("submit", (event) => {
        event.preventDefault();

        const heightElement2 = document.querySelector(".cpm_height");
        const weightElement2 = document.querySelector(".cpm_weight");
        const ageElement = document.querySelector(".cpm_age");

        const womanElement = document.querySelector(".cpm_gender_woman");
        const manElement = document.querySelector(".cpm_gender_man");

        const activityElement = document.querySelector(".js-activity");

        const cpmElement = document.querySelector(".cpm_result");
        const resultElement2 = document.querySelector(".cpm_result_circle");
      
        
        const height = heightElement2.value;
        const weight = weightElement2.value;
        const age = ageElement.value;

        const cpmMan = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        const cpmWoman = (10 * weight) + (6.25 * height) - (5 * age) - 161;

        if (womanElement.checked) {
            cpmElement.innerText = Math.round((cpmWoman) * activityElement.value)
        }
        else {
            cpmElement.innerText = Math.round((cpmMan) * activityElement.value)
        }


        resultElement2.classList.add("seen");

    })
}


        // DWA INNE SPOSOBY:


        // switch ((womanElement || manElement) && activityElement.value) {
        //     case womanElement.checked && "no-activity":
        //          cpmElement.innerText = Math.round((cpmWoman) * 1.2);
        //          break;
        //     case womanElement.checked && "mild-activity":
        //          cpmElement.innerText = Math.round((cpmWoman) * 1.4);
        //          break;
        //     case womanElement.checked && "average-activity":
        //          cpmElement.innerText = Math.round((cpmWoman) * 1.6);
        //          break;
        //     case womanElement.checked && "high-activity":
        //          cpmElement.innerText = Math.round((cpmWoman) * 1.8);
        //          break;
        //     case womanElement.checked && "very-high-activity":
        //          cpmElement.innerText = Math.round((cpmWoman) * 2);
        //          break;
        //     case manElement.checked && "no-activity":
        //          cpmElement.innerText = Math.round((cpmMan) * 1.2);
        //          break;
        //     case manElement.checked && "mild-activity":
        //          cpmElement.innerText = Math.round((cpmMan) * 1.4);
        //          break;
        //     case manElement.checked && "average-activity":
        //          cpmElement.innerText = Math.round((cpmMan) * 1.6);
        //          break;
        //     case manElement.checked && "high-activity":
        //          cpmElement.innerText = Math.round((cpmMan) * 1.8);
        //          break;
        //     case manElement.checked && "very-high-activity":
        //          cpmElement.innerText = Math.round((cpmMan) * 2);
        //          break;   
        // }

      
        
        // if (womanElement.checked && noActivity.selected) {
        //     cpmElement.innerText = Math.round((cpmWoman) * 1.2);
        // }
        // else if (womanElement.checked && mildActivity.selected) {
        //     cpmElement.innerText = Math.round((cpmWoman) * 1.4);
        // }
        // else if (womanElement.checked && averageActivity.selected) {
        //     cpmElement.innerText = Math.round((cpmWoman) * 1.6);
        // }
        // else if (womanElement.checked && highActivity.selected) {
        //     cpmElement.innerText = Math.round((cpmWoman) * 1.8);
        // }
        // else if (womanElement.checked && veryhighActivity.selected) {
        //     cpmElement.innerText = Math.round((cpmWoman) * 2);
        // }
        // else if (manElement.checked && noActivity.selected) {
        //     cpmElement.innerText = Math.round((cpmMan) * 1.2);
        // }
        // else if (manElement.checked && mildActivity.selected) {
        //     cpmElement.innerText = Math.round((cpmMan) * 1.4);
        // }
        // else if (manElement.checked && averageActivity.selected) {
        //     cpmElement.innerText = Math.round((cpmMan) * 1.6);
        // }
        // else if (manElement.checked && highActivity.selected) {
        //     cpmElement.innerText = Math.round((cpmMan) * 1.8);
        // }
        // else if (manElement.checked && veryhighActivity.selected) {
        //     cpmElement.innerText = Math.round((cpmMan) * 2);
        // }

        

