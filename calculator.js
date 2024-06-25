function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    try {
      let expression = document.getElementById('display').value;
      if (expression) {
        let result = eval(expression);
        if (typeof result === 'undefined') {
          handleCalculationError();
        } else {
          document.getElementById('display').value = result;
        }
      } else {
        handleCalculationError();
      }
    } catch (e) {
      handleCalculationError();
    }
  }
  
  function handleCalculationError() {
    document.getElementById('display').value = 'Error';
  }
  