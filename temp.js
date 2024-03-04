const calculateTemp = () => {
  const inputTemp = document.getElementById('temp').value;

  const tempSelected = document.getElementById('temp_diff');
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

  // Celsius to Fahrenheit
  const celToFah = (cel) => {
      let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
      return fahrenheit;
  }
  const celToKel = (cel) => {
    let kelvin = (cel + 273.15).toFixed(1);
    return kelvin;
}

  const fahToCel = (fah) => {
      let celsius = ((fah - 32) * 5 / 9).toFixed(1);
      return celsius;
  }

  const fahToKel = (fah) => {
    let kelvin = ((fah + 459.67)*5/9).toFixed(1);
    return kelvin;
}
const kelToCel = (kel) => {
  let celsius = (kel - 273.15).toFixed(1);
  return celsius;
}
const kelToFah = (kel) => {
  let fahrenheit = (kel * 9/5- 459.67).toFixed(1);
  return fahrenheit;
}

if (valueTemp == 'cel') {
  document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
}
else if (valueTemp == 'cel') {
    document.getElementById("result").innerHTML = celToKel(inputTemp) + "&#176; kelvin";
} else

 if (valueTemp == 'fah') {
  document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; celsius";
}
  else if (valueTemp == 'fah'){
      document.getElementById("result").innerHTML = fahToKel(inputTemp) + "&#176; kelvin";
  }else
  if (valueTemp == 'kel'){
    document.getElementById("result").innerHTML = kelToCel(inputTemp) + "&#176; celsius";
  } else 
  if (valueTemp == 'kel') {
      document.getElementById("result").innerHTML = kelToFah(inputTemp) + "&#176; Fahrenheit";
  }
}
