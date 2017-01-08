var products = [
  { name: 'cucumber', type: 'vegetable'},
  { name: 'banana', type: 'fruit'},
  { name: 'celery', type: 'vegetable'},
  { name: 'orange', type: 'fruit'}
];

var filteredProducts = [];

for (var i=0; i<products.length; i++) {
  if (products.type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}
