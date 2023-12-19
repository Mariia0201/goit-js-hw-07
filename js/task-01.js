const items = document.querySelectorAll('.item');
const itemsCount = items.length;
console.log('Numbers of category:', itemsCount);


items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});