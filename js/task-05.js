const output = document.getElementById("name-output");
const input = document.getElementById("name-input");

input.addEventListener("change", () => {
  if (input.value.length == 0) {
    output.textContent = "Anonymous";
  } else {
    output.textContent = input.value;
  }
});
