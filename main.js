const products = [
  { id: 1, name: "Sneakers", price: 59.99, img: "https://via.placeholder.com/200x150" },
  { id: 2, name: "Backpack", price: 39.99, img: "https://via.placeholder.com/200x150" },
  { id: 3, name: "Wristwatch", price: 79.99, img: "https://via.placeholder.com/200x150" },
  { id: 4, name: "Sunglasses", price: 19.99, img: "https://via.placeholder.com/200x150" },
];

const productGrid = document.getElementById('product-grid');
const cartModal = document.getElementById('cart-modal');
const cartItemsList = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');

let cart = [];

function renderProducts() {
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productGrid.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  cartCount.textContent = cart.length;
}

document.getElementById('cart-btn').addEventListener('click', () => {
  renderCart();
  cartModal.style.display = 'block';
});

function renderCart() {
  cartItemsList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
  });
}

function closeCart() {
  cartModal.style.display = 'none';
}

renderProducts();
