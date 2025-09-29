let cart = [];
let total = 0;

// Add item to cart
function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  displayCart();
}

// Display cart items
function displayCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  
  cart.forEach((c, index) => {
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${c.item} - ₹${c.price}</span>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
}

// Remove item from cart
function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  displayCart();
}

// Place order
function placeOrder() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const payment = document.getElementById("payment").value;

  if (!name || !address || !payment) {
    alert("⚠️ Please fill all details before placing order.");
    return;
  }

  if (cart.length === 0) {
    alert("⚠️ Your cart is empty!");
    return;
  }

  alert(`✅ Order placed!\n\nName: ${name}\nAddress: ${address}\nPayment: ${payment}\nTotal: ₹${total}`);

  // Reset after order
  cart = [];
  total = 0;
  displayCart();
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("payment").value = "";
}
