const container = document.querySelector("#productContainer");
const cart = document.querySelector(".cart");
const cartBtn = document.querySelector('.cart-btn');

const products = [
    {
        id: "p002",
        name: "Classic Leather Watch",
        description: "A classic brand leather watch",
        price: 199,
        imgSrc: "https://images.unsplash.com/photo-1735075579378-7dd92ccc6916?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Watch",
        stock: 3,
        inStock: true
    },
    {
        id: "p003",
        name: "Minimal Steel Watch",
        description: "A good looking and brand steel watch",
        price: 249,
        imgSrc: "https://images.unsplash.com/photo-1624978983107-3082b6b0fb40?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Watch",
        stock: 4,
        inStock: true
    },
    {
        id: "p004",
        name: "Silver Elegant Ring",
        description: "A nice wedding ring",
        price: 89,
        imgSrc: "https://plus.unsplash.com/premium_photo-1673552755868-9f86ff17e2d1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Rings",
        stock: 2,
        inStock: true
    },
    {
        id: "p005",
        name: "Gold Diamond Ring",
        description: "The most romantic and good looking wedding ring",
        price: 299,
        imgSrc: "https://plus.unsplash.com/premium_photo-1678730056405-0cf5eaaad097?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Rings",
        stock: 1,
        inStock: true
    }
];

const renderCart = (cartItems) => {
    cart.innerHTML = `<h2>Your Cart:</h2>`;
    for (let [name, quantity] of Object.entries(cartItems)) {
        cart.innerHTML += `<p class="arranged">${name} x${quantity}</p>`;
    }

}


const existingCart = JSON.parse(localStorage.getItem("cartItems"));
if (existingCart) {
    renderCart(existingCart);
}

products.forEach((item) => {
    const savedStock = localStorage.getItem(item.id);
    let stock = savedStock !== null ? parseInt(savedStock) : item.stock;

    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
        <img src=${item.imgSrc} alt="${item.name}">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <span>${item.category}</span>
        <p class="price">$${item.price}</p>
        <p class="stock-count">In Stock: <span class="stock-number">${stock}</span></p>
        <button class="buy-btn">${stock !== 0 ? "Buy now!" : "Out of stock"}</button>
    `;

    container.appendChild(card);

    const buyBtn = card.querySelector("button");
    const stockNumber = card.querySelector(".stock-number");

    buyBtn.addEventListener('click', () => {
        if (stock > 0) {
            stock--;
            stockNumber.textContent = stock;
            localStorage.setItem(item.id, stock);
        }

        if (stock === 0) {
            buyBtn.textContent = "Out of stock!";
            buyBtn.disabled = true;
        }

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || {};

        if (cartItems[item.name]) {
            cartItems[item.name]++;
        } else {
            cartItems[item.name] = 1;
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        renderCart(cartItems);
    });
});

cartBtn.addEventListener('click', () => {
    cart.classList.toggle("hidden");
});
