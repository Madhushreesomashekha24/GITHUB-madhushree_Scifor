// Retrieve cart items from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display cart items
function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalContainer = document.getElementById('cart-total');
  cartItemsContainer.innerHTML = '';
  cartTotalContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is currently empty.</p>';
    return;
  }

  const cartList = document.createElement('ul');
  cartList.className = 'list-group';

  let totalAmount = 0;

  cart.forEach((item, index) => {
    totalAmount += item.price * item.quantity;
  
    const cartItem = document.createElement('li');
    cartItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    cartItem.innerHTML = `
      <span>${item.name} - RS.${item.price} x ${item.quantity}</span>
      <div class="cart-actions">
        <button class="btn btn-sm btn-secondary" onclick="decreaseQuantity(${index})">-</button>
        <button class="btn btn-sm btn-secondary" onclick="increaseQuantity(${index})">+</button>
        <button class="btn btn-sm btn-outline-dark" onclick="removeFromCart(${index})">
          <i class="bi bi-x"></i> <!-- Bootstrap X Icon -->
        </button>
      </div>
    `;
    cartList.appendChild(cartItem);
  });
  cartItemsContainer.appendChild(cartList);

  // Display total amount
  cartTotalContainer.innerHTML = `<h4>Total Amount: RS.${totalAmount}</h4>`;
}

// Function to add an item to the cart
function addToCart(product) {
  const existingProductIndex = cart.findIndex((item) => item.name === product.name);
  if (existingProductIndex !== -1) {
    // If the product already exists in the cart, increase its quantity
    cart[existingProductIndex].quantity += 1;
  } else {
    // If the product is new, initialize its quantity to 1
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}

// Function to remove an item from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}

// Function to increase the quantity of a product
function increaseQuantity(index) {
  // Ensure the quantity is properly incremented
  cart[index].quantity += 1;
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}

// Function to decrease the quantity of a product
function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    // Decrease the quantity if it's greater than 1
    cart[index].quantity -= 1;
  } else {
    // Remove the product if the quantity reaches 0
    removeFromCart(index);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}

// Display cart items on page load
displayCartItems();