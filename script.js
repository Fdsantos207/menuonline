let cart = [];

function toggleCart() {
    const cartPanel = document.getElementById("cartPanel");
    cartPanel.style.display = cartPanel.style.display === "none" || cartPanel.style.display === "" ? "flex" : "none";
    updateCart();
}

function addToCart(productName, productPrice) {
    const item = { name: productName, price: productPrice };
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById("cartItems");
    cartItemsDiv.innerHTML = "";
    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <span>R$ ${item.price}</span>
        `;
        cartItemsDiv.appendChild(cartItem);
    });
}

function checkout() {
    alert("Finalizando compra...");
    // Aqui você pode adicionar a lógica de finalização da compra
}
