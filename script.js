function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function appendCharacter(char) {
    const display = document.getElementById('display');
    if (display.value === 'Error' || display.value === 'Infinity') {
      clearDisplay();
    }
    display.value += char;
  }
  
  function calculateResult() {
    try {
      const display = document.getElementById('display');
      display.value = eval(display.value);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  
  function calculateSquareRoot() {
    const currentValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(currentValue)) {
      document.getElementById('display').value = Math.sqrt(currentValue);
    }
  }
  
  function calculatePower() {
    const currentValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(currentValue)) {
      document.getElementById('display').value = Math.pow(currentValue, 2);
    }
  }
  