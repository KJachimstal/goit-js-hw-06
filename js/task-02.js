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
  list.appendChild(li);
  li.innerHTML = li.innerHTML + element;
});
