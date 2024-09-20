// Run domLoaded when the content is fully loaded
window.addEventListener("DOMContentLoaded", domLoaded);

const btn = document.getElementById("convertButton")
btn.addEventListener.apply("click",ButtonClickEventHandler)

function domLoaded() 
{
    // Get elements
    const convertButton = document.getElementById("convertButton");
    const fInput = document.getElementById("F_in");
    const cInput = document.getElementById("C_in");
    const message = document.getElementById("message");
    const weatherIcon = document.getElementById("weatherIcon");

    // Event listeners
    convertButton.addEventListener("click", function() 
    {
        // Get the values from the input fields
        const fValue = parseFloat(fInput.value);
        const cValue = parseFloat(cInput.value);

        // Clear message
        message.textContent = "";

        // Check if both fields are empty
        if (isNaN(fValue) && isNaN(cValue)) {
            message.textContent = "Enter a temperature to convert";
            weatherIcon.src = "images/C-F.png";
            return;
        }

        // Perform the conversion
        if (!isNaN(fValue)) {
            const convertedC = convertFtoC(fValue);
            cInput.value = convertedC.toFixed(2);
            updateWeatherIcon(fValue);
        } else if (!isNaN(cValue)) {
            const convertedF = convertCtoF(cValue);
            fInput.value = convertedF.toFixed(2);
            updateWeatherIcon(convertedF);
        }
    });

// Function to convert Fahrenheit to Celsius
function convertFtoC(F) {
    return (F - 32) * 5 / 9;
}

// Function to convert Celsius to Fahrenheit
function convertCtoF(C) {
    return (C * 9 / 5) + 32;
}

// This function runs when the DOM content is loaded


    // Clear the Fahrenheit input when typing in Celsius and vice versa
    cInput.addEventListener("input", function() {
        fInput.value = "";
    });

    fInput.addEventListener("input", function() {
        cInput.value = "";
    });

    // Update the weather image based on the temperature
    function updateWeatherIcon(fTemp) {
        if (fTemp <= 32 && fTemp > -200) {
            weatherIcon.src = "images/cold.png";
        } else if (fTemp >= 90 && fTemp < 200) {
            weatherIcon.src = "images/hot.png";
        } else if (fTemp > 32 && fTemp < 90) {
            weatherIcon.src = "images/cool.png";
        } else if (fTemp >= 200 || fTemp <= -200) {
            weatherIcon.src = "images/dead.png";
        } else {
            weatherIcon.src = "images/C-F.png";
        }
    }
}
