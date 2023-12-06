function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function appendCharacter(char) {
    document.getElementById('display').value += char;
  }
  
  function calculateResult() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
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
  