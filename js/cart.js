// Cart Variables
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = {};

// Update Cart Display
function updateCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  for (const [name, item] of Object.entries(cart)) {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${name}</td>
      <td>
        <button class="btn btn-sm btn-danger" onclick="decreaseQuantity('${name}')">-</button>
        <span class="mx-2">${item.quantity}</span>
        <button class="btn btn-sm btn-success" onclick="increaseQuantity('${name}')">+</button>
      </td>
      <td>$${item.price.toFixed(2)}</td>
      <td>$${subtotal.toFixed(2)}</td>
      <td><button class="btn btn-sm btn-outline-light" onclick="removeFromCart('${name}')">Remove</button></td>
    `;
    cartItemsContainer.appendChild(row);
  }

  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Add Item to Cart
function addToCart(name, price) {
  if (cart[name]) {
    cart[name].quantity++;
  } else {
    cart[name] = { price: price, quantity: 1 };
  }
  updateCart();
}

// Increase Quantity
function increaseQuantity(name) {
  cart[name].quantity++;
  updateCart();
}

// Decrease Quantity
function decreaseQuantity(name) {
  if (cart[name].quantity > 1) {
    cart[name].quantity--;
  } else {
    delete cart[name];
  }
  updateCart();
}

// Remove Item Completely
function removeFromCart(name) {
  delete cart[name];
  updateCart();
}

// Attach Event Listeners to Add-to-Cart Buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const name = this.getAttribute('data-name');
    const price = parseFloat(this.getAttribute('data-price'));
    addToCart(name, price);
  });
});
