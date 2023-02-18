let display = document.getElementById("value");
const decrement = document.querySelector("[data-action=decrement]");
const increment = document.querySelector("[data-action=increment]");

let counterValue = 0;

function updateDisplay() {
  display.innerHTML = counterValue;
}

decrement.addEventListener("click", () => {
  counterValue--;
  updateDisplay();
});

increment.addEventListener("click", () => {
  counterValue++;
  updateDisplay();
});
