{
  // Need to determine some id functions
  let button = document.getElementById("btn");
  // let result = document.getElementById("result");
  let status = document.getElementById("stat");
  let results = document.getElementById("results");

  // Add Event Listener
  button.addEventListener("click", calculateBMI);
}

function calculateBMI() {
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);

  // Applying the If - else Statement for calculating BMI
  if (height === "" || isNaN(height))
    results.innerHTML = "Provide a valid Height!";
  else if (weight === "" || isNaN(weight))
    results.innerHTML = "Provide a valid Weight!";
  // If both input is valid, calculate the bmi
  else {
    // Giving the BMI Formular
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Defining the if-else Statement
    if (bmi <= 18.6) {
      results.innerHTML = "BMI - " + bmi;
      stat.innerHTML = "Underweight 😒";
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = "BMI - " + bmi;
      stat.innerHTML = "Normal 😍";
    } else {
      results.innerHTML = "BMI - " + bmi;
      stat.innerHTML = "Overweight 😮";
    }
  }
}
