function createBookShop(inventory) {
   return {
      inventory: inventory,
      inventoryValue: function() {
         return this.inventory.reduce((total, book) => total + book.price, 0);
      },
      priceForTitle: function(title) {
         return this.inventory.find(book => book.title === title).price;
      }
   };
}

const inventory = [
   { title: "Harry Potter", price: 10 },
   { title: "Eloquent JS", price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');


//Enhanced Object Literal
function createBookShop(inventory) {
   return {
      inventory,
      inventoryValue() {
         return this.inventory.reduce((total, book) => total + book.price, 0);
      },
      priceForTitle(title) {
         return this.inventory.find(book => book.title === title).price;
      }
   };
}


function saveFile(url, data) {
   $.ajax({
      url,
      data,
      method: "Post"
   });
}

const url = 'http://fileupload.com';
const data = { color: 'red' };

saveFile(url, data)
