/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drow down list
function populateForm() {
    //DONE: Add an <option> tag inside the form's select for each product
    const selectElement = document.getElementById('items');
    for (let i in Product.allProducts) {
        let option = document.createElement('option');
        option.textContent = Product.allProducts[i].name;
        option.value = Product.allProducts[i].name;
        selectElement.appendChild(option);
    }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself

function handleSubmit(event) {
    // DON: Prevent the page from reloading
    event.preventDefault();
    //Do all the things ...
    if (event.target.quantity.value <= 0) {
        alert('Enter a valid number');
    } else {
        addSelectedItemToCart();
        cart.saveToLocalStorage();
        updateCounter();
        updateCartPreview();
        catalogForm.reset();
    }
}

// DONE: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
    // DONE: suss out the item picked from the select list
    let itemPicked = document.getElementById('items').value;
    // DONE: get the quantity
    let itemQuantity = document.getElementById('quantity').value
    // DONE: using those, add one item to the Cart
    cart.addItem(itemPicked, itemQuantity);
}

// DONE: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
    document.getElementById('itemCount').textContent = `: ${cart.items.length} items(s)`;
}

// TODO: As you add items into the cart, show them(item & quantity) in the cart preview div
function updateCartPreview() {
    // TODO: Get the item and quantity from the form
    // same as above
    // TODO: Add a new element to the cartContents div with that information
    let pPreview = document.createElement('p');
    pPreview.textContent = `Item: ${document.getElementById('items').value} Qty: ${document.getElementById('quantity').value}`
    let divPreview = document.getElementById('cartContents');
    // create a new element, give it content, append to parent (parent either through querySelector of getElementById)
    divPreview.appendChild(pPreview);
    for (let i = 0; i < Product.allProducts.length; i++) {
        if (document.getElementById('items').value === Product.allProducts[i].name) {
            let img = document.createElement('img');
            img.src = Product.allProducts[i].filePath;
            divPreview.appendChild(img);
            break;
        }
    }
}

// Set up the 'submit' event listener on the form.
// This is the trigger for the app. When a user 'submits' the form, it will 
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

populateForm();