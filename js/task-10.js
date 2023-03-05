const destroy = document.getElementById("controls").children[2];
const create = document.getElementById("controls").children[1];
const amountInput = document.getElementById("controls").children[0];
const boxes = document.getElementById("boxes");
console.log(boxes);
let amount = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  let dimension = 30;
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");

    newDiv.style = `width: ${dimension}px; height: ${dimension}px; background-color:${getRandomHexColor()}`;

    boxes.insertAdjacentElement("beforeend", newDiv);

    dimension += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  console.log("Destroy");
}

function updateAmount(e) {
  amount = e.target.value;
}

create.addEventListener("click", createBoxes);
amountInput.addEventListener("change", updateAmount);

destroy.addEventListener("click", destroyBoxes);
