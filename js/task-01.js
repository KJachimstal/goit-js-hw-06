const categories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categories.length}`);

console.log(
  categories.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);
  })
);
