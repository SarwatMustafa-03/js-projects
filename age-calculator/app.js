
const birthYearInput = document.getElementById("birthYear");
const calculateBtn = document.getElementById("calculate");

const calAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
};

calculateBtn.addEventListener("click", () => {
    const birthYear = parseInt(birthYearInput.value);

    if (!birthYear) {
        alert("Please enter your birth year.");
        return;
    }

    const age = calAge(birthYear);
    alert(`Your age is ${age} years.`);
});