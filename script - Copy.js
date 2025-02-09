let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(productName + " added to the cart!");

    // Update the cart page if it's open
    if (window.location.pathname.includes('cart.html')) {
        updateCart();
    }
}

function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty!</p>";
        return;
    }

    let total = 0;
    cart.forEach(item => {
        cartItemsContainer.innerHTML += `<p>${item.productName} - ₹${item.price}</p>`;
        total += item.price;
    });

    cartItemsContainer.innerHTML += `<p><strong>Total: ₹${total}</strong></p>`;
}
