const convertToCelsius = function(temp) {
  const formulaCelsius = (temp - 32) * 5/9
  const roundedCelsius  = (Math.round(formulaCelsius * 10) / 10);

  return roundedCelsius;
  
};

const convertToFahrenheit = function(temp) {
  const formulaFahrenheit = (temp * 9/5 + 32)
  const roundedFahrenheit  = (Math.round(formulaFahrenheit * 10) / 10);

  return roundedFahrenheit;
};

// console.log(convertToCelsius((-100)));
// console.log(convertToFahrenheit(73.2));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
