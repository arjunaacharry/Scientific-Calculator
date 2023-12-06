let isResultCalculated = false;

function clearDisplay() {
  document.getElementById('display').value = '';
  isResultCalculated = false;
}

function appendCharacter(char) {
  const display = document.getElementById('display');
  if (isResultCalculated) {
    clearDisplay();
  }
  if (display.value === 'Error' || display.value === 'Infinity') {
    clearDisplay();
  }
  display.value += char;
}

function calculateResult() {
  try {
    const display = document.getElementById('display');
    display.value = eval(display.value);
    isResultCalculated = true;
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateSquareRoot() {
  const currentValue = parseFloat(document.getElementById('display').value);
  if (!isNaN(currentValue)) {
    document.getElementById('display').value = Math.sqrt(currentValue);
    isResultCalculated = true;
  }
}

function calculatePower() {
  const currentValue = parseFloat(document.getElementById('display').value);
  if (!isNaN(currentValue)) {
    document.getElementById('display').value = Math.pow(currentValue, 2);
    isResultCalculated = true;
  }
}
