const item = document.getElementsByClassName("item");
console.log(`Number of categories: ${item.length}`);


const categories = document.getElementById("categories");
const liItem = categories.querySelectorAll('li.item');
liItem.forEach((category) => {

  console.log(`Category: ${category.querySelector('h2').textContent}`);
  console.log(`Elements: ${category.querySelectorAll('ul>li').length}`);
});

