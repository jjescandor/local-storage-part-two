/* global Cart */
'use strict';

// Create an event listener so that whe the delete link is clicked, the removeItemFromCart method is invoked
const table = document.getElementById('cart');
const tbody = document.querySelector('tbody');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cart = new Cart(cartItems);
}

// Make Magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
    loadCart();
    clearCart();
    showCart();
}

// TODO: Remove all of the rows(tr) in the cart table (tbody)
function clearCart() {
    //target the tbody and use innerHTML = ''
    document.querySelector('tbody').innerHTML = '';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
    // TODO: Find the table body
    const tbody = document.querySelector('tbody');
    // TODO: Iterate over the items in the cart
    for (let i = 0; i < cart.items.length; i++) {
        let tr = document.createElement('tr');
        let tdDelete = document.createElement('td');
        tdDelete.innerHTML = `<button class='${i}'>X</button>`;
        let tdProduct = document.createElement('td');
        tdProduct.textContent = cart.items[i].product;
        let tdQuantity = document.createElement('td');
        tdQuantity.textContent = cart.items[i].quantity;
        tr.append(tdDelete, tdProduct, tdQuantity);
        tbody.appendChild(tr);
    }
    // TODO: Create a TR
    // TODO: Create a TD for the delete link, quantity, and the item
    // TODO: add the TR to the TBODDY and each of the TD's to the TR
}


function removeItemFromCart(event) {
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    let selectedBtn = parseInt(event.target.className);
    console.log(selectedBtn);
    cart.removeItem(selectedBtn);
    cart.saveToLocalStorage();
    // TODO: Save the cart back to local storage
    // TODO: Re-draw the cart table
    renderCart()
    // .slice() remove specific index from cartItems array? Maybe rerender?
}

//This will initialize the page and draw the cart on screen
renderCart();