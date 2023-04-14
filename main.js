// Get inputs
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

// Get outputs
const dayOutput = document.getElementById("dd");
const monthOutput = document.getElementById("mm");
const yearOutput = document.getElementById("yy");

// Get form
const form = document.querySelector("form");

// Add event listener to form
form.addEventListener('submit', handleSubmit);

// Get current date
const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

// Define months array
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Validate inputs
function validate() {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "Red";
            parent.querySelector("small").innerText = "This Field is Required.";
            validator = false;
        }
        else if(monthInput.value > 12) {
            monthInput.style.borderColor = "Red";
            monthInput.parentElement.querySelector("small").innerText = "Must be a valid month.";
            validator = false;
        }
        else if (dayInput.value > 31) {
            dayInput.style.borderColor = "Red";
            dayInput.parentElement.querySelector("small").innerText = "Must be a valid day.";
            validator = false;
        }
        else {
            i.style.borderColor = "black";
            parent.querySelector("small").innerText = "";
            validator = true;
        }
    })
    return validator;
}

// Handle form submission
function handleSubmit(e) {
    e.preventDefault()
    if (validate()) {
        // Adjust day and month if necessary
        if (dayInput.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (monthInput.value > month) {
            month = month + 12;
            year = year - 1;
        }

        // Calculate age
        const d = day - dayInput.value;
        const m = month - monthInput.value;
        const y = year - yearInput.value;

        // Display age
        dayOutput.innerHTML = d;
        monthOutput.innerHTML = m;
        yearOutput.innerHTML = y;
    }
}