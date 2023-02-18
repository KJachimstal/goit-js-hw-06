const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

ingredients.forEach((element) => {
  let li = document.createElement("li");
  li.innerHTML = element;
  list.appendChild(li);
});
