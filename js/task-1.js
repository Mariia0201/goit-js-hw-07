const items = document.querySelectorAll('.item');
const allItems = items.length;
console.log('Number of categories:', allItems);

allItems.forEach((elem) => {
    const itemTitle = elem.querySelector('h2').textContent;
  const allItems2 = elem.querySelectorAll('li');
  const itemCount = allItems2.length;

}   
)
console.log ('${itemTitle} : ${itemCount}')