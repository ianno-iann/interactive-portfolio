let display = document.getElementById("display");
let history = [];
const maxHistory = 10;

// Input functions
function append(value) { display.value += value; }
function clearAll() { display.value = ""; }
function backspace() { display.value = display.value.slice(0, -1); }

// Calculation
function calculate() {
  try {
    let expr = display.value.replace(/√/g, "Math.sqrt");
    const result = eval(expr);
    addHistory(display.value, result);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

// History management (internal)
function addHistory(expr, result) {
  history.unshift(`${expr} = ${result}`);
  if (history.length > maxHistory) history.pop();
}

// Semi-scientific functions
function sqrt() { display.value = Math.sqrt(parseFloat(display.value)) || ""; }
function power2() { display.value = Math.pow(parseFloat(display.value), 2) || ""; }
function powerY() { display.value += "**"; }
function factorial() {
  let n = parseFloat(display.value);
  if (n < 0) { display.value = "Error"; return; }
  let res = 1;
  for (let i = 1; i <= n; i++) res *= i;
  display.value = res;
}
function log() { display.value = Math.log10(parseFloat(display.value)) || ""; }
function ln() { display.value = Math.log(parseFloat(display.value)) || ""; }

// Keyboard support
document.addEventListener("keydown", (e) => {
  if ((e.key >= '0' && e.key <= '9') || e.key === "." || e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    backspace();
  } else if (e.key === "Escape") {
    clearAll();
  }
});
