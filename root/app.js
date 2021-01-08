function tempConvert() {
  let scaleCalc = document.querySelector("#selectScale").value; //Takes the value of scale selector
  let inputNum = parseFloat(document.querySelector("#inputValue").value); //Takes the value of user input

  switch (scaleCalc) {
    case "Fahrenheit": //Takes the value of fahrenheit and converts to other scales
      document.querySelector("#getFahrenheit").innerHTML = inputNum + " F";

      document.querySelector("#getCelsius").innerHTML =
        (inputNum - 32) * (5 / 9) + " C";

      document.querySelector("#getKelvin").innerHTML =
        (inputNum - 32) * (5 / 9) + 273.15 + " K";

      document.querySelector("#getRankine").innerHTML =
        inputNum + 459.67 + " R";
      break;

    case "Celsius":
      document.querySelector("#getCelsius").innerHTML = inputNum + " C";

      document.querySelector("#getFahrenheit").innerHTML =
        inputNum * (9 / 5) + 32 + " F";

      document.querySelector("#getKelvin").innerHTML = inputNum + 273.15 + " K";

      document.querySelector("#getRankine").innerHTML =
        inputNum + 9 / 5 + 491.67 + " R";
      break;

    case "Kelvin":
      document.querySelector("#getCelsius").innerHTML =
        inputNum - 273.15 + " C";

      document.querySelector("#getFahrenheit").innerHTML =
        (inputNum - 273.15) * (9 / 5) + 32 + " F";

      document.querySelector("#getKelvin").innerHTML = inputNum + " K";

      document.querySelector("#getRankine").innerHTML = inputNum * 1.8 + " R";
      break;

    case "Rankine":
      document.querySelector("#getCelsius").innerHTML =
        ((inputNum - 491.67) * 5) / 9 + " C";

      document.querySelector("#getFahrenheit").innerHTML =
        inputNum - 459.67 + " F";

      document.querySelector("#getKelvin").innerHTML =
        inputNum * (5 / 9) + " K";

      document.querySelector("#getRankine").innerHTML = inputNum + " R";
      break;

    default:
      console.log("Select a scale and enter a value");
  }
}
