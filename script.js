let total = 0;
let items = [];

function addToCart(name, price) {
    items.push(name + " - ₦" + price);
    total += price;

    let li = document.createElement("li");
    li.textContent = name + " - ₦" + price;
    document.getElementById("cartItems").appendChild(li);

    document.getElementById("total").textContent = total;
}

function checkout() {
    let message = "Hello, I want to order:\n\n";

    items.forEach(item => {
        message += item + "\n";
    });

    message += "\nTotal: ₦" + total;

    let phone = "234XXXXXXXXXX"; // Replace with your number
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url);
}
