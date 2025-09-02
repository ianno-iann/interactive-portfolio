const display = document.getElementById('display');
let currentInput = '';
let resetNext = false;

document.querySelectorAll('.btn[data-val]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (resetNext) {
      currentInput = '';
      resetNext = false;
    }
    currentInput += btn.getAttribute('data-val');
    display.value = currentInput;
  });
});

document.getElementById('clear').addEventListener('click', () => {
  currentInput = '';
  display.value = '';
});

document.getElementById('equals').addEventListener('click', () => {
  try {
    let result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
    resetNext = true;
  } catch {
    display.value = 'Error';
    currentInput = '';
    resetNext = true;
  }
});