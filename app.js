'use strict';

//Cart constructor.
const Cart = function (items) {
    //this.items is an array of CartItem instances
    this.items = JSON.parse(localStorage.getItem('cart')) || items;
}

Cart.prototype.addItem = function (product, quantity) {
    //Done: Fill in this instance method to create als new cartItem and add it to this.items
    this.items.push(new CartItem(product, quantity));
}

Cart.prototype.saveToLocalStorage = function () {
    //TODO: Fill in this instance method to save the contents of the cart to localStorage
    //take what's in this.items and we need to save it to local storage
    //1. stringify this.items
    let stringfyedValue = JSON.stringify(this.items)
    //2. save it to local storage
    localStorage.setItem('cart', stringfyedValue);
};

Cart.prototype.removeItem = function (itemNum) {
    //TODO: Fill in this instance method to remove one item from the cart.
    //Note: You will have to decide what kind of parameter to pass in here!
    if (itemNum === 0) {
        this.items.splice(itemNum, 1);
    } else if (itemNum > 1) {
        this.items.splice(itemNum, itemNum);
    }
};

const CartItem = function (product, quantity) {
    this.product = product;
    this.quantity = quantity;
}

const Product = function (filePath, name) {
    this.filePath = filePath;
    this.name = name;
    Product.allProducts.push(this);
};

Product.allProducts = [];

function generateCatalog() {
    new Product('assets/bag.jpg', 'Bag');
    new Product('assets/banana.jpg', 'Banana');
    new Product('assets/bathroom.jpg', 'Bathroom');
    new Product('assets/boots.jpg', 'Boots');
    new Product('assets/breakfast.jpg', 'Breakfast');
    new Product('assets/bubblegum.jpg', 'Bubblegum');
    new Product('assets/chair.jpg', 'Chair');
    new Product('assets/cthulhu.jpg', 'Cthulhu');
    new Product('assets/dog-duck.jpg', 'Dog-Duck');
    new Product('assets/dragon.jpg', 'Dragon');
    new Product('assets/pen.jpg', 'Pen');
    new Product('assets/pet-sweep.jpg', 'Pet Sweep');
    new Product('assets/scissors.jpg', 'Scissors');
    new Product('assets/shark.jpg', 'Shark');
    new Product('assets/sweep.png', 'Sweep');
    new Product('assets/tauntaun.jpg', 'Taun-Taun');
    new Product('assets/unicorn.jpg', 'Unicorn');
    new Product('assets/water-can.jpg', 'Water Can');
    new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();

