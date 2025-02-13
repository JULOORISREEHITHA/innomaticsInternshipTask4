const products = [
    { id: 1, name: "HP", price: 50000, image: "Images/Laptop.jpg" },
    { id: 2, name: "IPhone15", price:70000, image: "Images/SmartPhone.jpg" },
    
    { id: 3, name: "MAC", price: 200000, image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlbm92b3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 4, name: "DELL", price: 40000, image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGVub3ZvfGVufDB8fDB8fHww"},
    {id: 5, name: "REDMI", price: 20000, image:"https://images.unsplash.com/photo-1728897061866-9933536214a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlZG1pJTIwbW9iaWxlYm94fGVufDB8fDB8fHww"},
    {id: 6, name: "IQOO", price: 200000, image:"https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1721017006125/36ebf43cf710d57990489ec4f84773e7.png_w860-h860.webp"},
    {id: 7, name: "Smart Watch", price: 2000, image:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"},
    {id: 8, name: "Samsung", price:80000, image:"https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftc3VuZyUyMG1vYmlsZWJveHxlbnwwfHwwfHx8MA%3D%3D"},
    {id: 9, name: "Boat Headset", price: 1800, image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ3M1SgQ_yNL4gg2gqkZa-xHs0W4FWawfa3pg1r81O90Cp_cMcmp_S1UjCj2QQK7gd37tRnTCKJF1aLPQauhF1_o98wflIAkQFRG2RDubw&usqp=CAc"},
    {id:10,  name : "Sony Headset",price: 2000,  image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQyxina7pNW8_pbFRShCHKV1zvSY2mMxXUrJn5EEbgy7EzleDW-s3h3Vj8ZGROTpk-RipLcKBsk44CtDchk908QoYaQ9-Z8qsBEWLRsGd-F&usqp=CAc"},
    {id:11,  name : "Samsung Earphones",price: 1000,  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdi-FgA70e4JdS9BEDgtLTY_995v0hOTbCQ&s"},
    {id:12,  name : "Boat Earphones",price: 1000,  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrDjmE2uGyWuJ7rcXzQ9Amk8fgQgisgXyBA&s"},
    {id:13,  name : "Oneplus Earphones",price: 1200,  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqNtHa2cIiiqCgntl9lgjN3v3TFgRXm2IKw&s"},
    {id:14,  name : "Boat Airdopes",price: 2500,  image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSpKzFvX9fiWI_hqnzGC5A0X2X8-oGII0Yho1ARUil4cqzzNj45zLpFW4mybfavQZlOLuBu3uSHFEZ9Lk7sLys_sroNagFdxPVWqj76MWQ&usqp=CAc"},
    {id:15,  name : "Artis"  ,price:2000,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmC71mtTY2bfXLUk4rBBYFoH22lbj9_NW9OA&s"},
];

const cart = [];
function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

// Close a popup
function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

// Open Address Input Popup
function openAddressPopup() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    openPopup("address-popup");
}

// Confirm Order - Show Confirmation Popup
function confirmOrder() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let pincode = document.getElementById("pincode").value;

    if (!name || !address || !city || !pincode) {
        alert("Please fill all details!");
        return;
    }

    // Save details for later use
    sessionStorage.setItem("customer", JSON.stringify({ name, address, city, pincode }));

    closePopup("address-popup");
    openPopup("confirm-popup");
}

// Place Order - Show Receipt
function placeOrder() {
    closePopup("confirm-popup");

    let customer = JSON.parse(sessionStorage.getItem("customer"));
    let receiptText = `<strong>Name:</strong> ${customer.name}<br>
                        <strong>Address:</strong> ${customer.address}, ${customer.city} - ${customer.pincode}<br>
                        <strong>Items:</strong><br>`;

    cart.forEach(item => {
        receiptText += `- ${item.name} x ${item.quantity} (₹${item.subtotal})<br>`;
    });

    document.getElementById("receipt-details").innerHTML = receiptText;

    openPopup("receipt-popup");
}

// Print Receipt
function printReceipt() {
    let { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    let customer = JSON.parse(sessionStorage.getItem("customer"));
    let y = 20; // Starting position for text in PDF

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Order Receipt", 80, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    y += 10;
    doc.text(`Name: ${customer.name}`, 10, y);
    y += 10;
    doc.text(`Address: ${customer.address}, ${customer.city} - ${customer.pincode}`, 10, y);
    y += 15;
    doc.text("Items Ordered:", 10, y);
    y += 10;

    // Add each cart item to the receipt
    cart.forEach(item => {
        doc.text(`- ${item.name} x ${item.quantity} (₹${item.subtotal})`, 10, y);
        y += 10;
    });

    y += 10;
    doc.setFont("helvetica", "bold");
    doc.text(`Total: ₹${cart.reduce((sum, item) => sum + item.subtotal, 0)}`, 10, y);

    // Save the receipt as a PDF
    doc.save("Order_Receipt.pdf");
}


// Display Products with Images
function displayProducts() {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = "";
    products.forEach((product) => {
        productContainer.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
            </div>`;
    });
}

// Add to Cart
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.subtotal = existingItem.quantity * price;
    } else {
        cart.push({ name, price, quantity: 1, subtotal: price });
    }
    updateCart();
}

// Update Cart Display
function updateCart() {
    const cartContainer = document.getElementById("cart-items");
    const totalCost = document.getElementById("total-cost");
    cartContainer.innerHTML = "";
    
    let total = 0;
    cart.forEach(item => {
        total += item.subtotal;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <div class="item-details">
                    <span>${item.name}</span>
                    <span class="subtotal">₹${item.subtotal}</span>
                </div>
                <div class="quantity-controls">
                    <button onclick="updateQuantity('${item.name}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity('${item.name}', 1)">+</button>
                </div>
                <button class="delete-btn" onclick="removeFromCart('${item.name}')">Delete</button>
            </div>`;
    });

    totalCost.textContent = `Total: ₹${total}`;
}

// Update Quantity
function updateQuantity(name, change) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += change;
        if (item.quantity === 0) removeFromCart(name);
        else item.subtotal = item.quantity * item.price;
    }
    updateCart();
}

// Remove from Cart
function removeFromCart(name) {
    const index = cart.findIndex(item => item.name === name);
    cart.splice(index, 1);
    updateCart();
}

// Initialize
displayProducts();
