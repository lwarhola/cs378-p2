function increment(x, total, y) {
    let count = document.getElementById(x);
    let totalVal = document.getElementById(total);
    let subtotal = totalVal.innerText.split("$");
    let cost = document.getElementById(y).innerText.split("$")[1];
    count.innerText = String(Number(count.innerText) + 1);
    totalVal.innerText = subtotal[0] + "$" + String(Number(cost) + Number(subtotal[1]));
}

function decrement(x, total, y) {
    let val = document.getElementById(x);
    let subtotalVal = document.getElementById(total);
    let subtotal = subtotalVal.innerText.split("$");
    let cost = document.getElementById(y).innerText.split("$")[1];
    if (Number(val.innerText) >= 1) {
        val.innerText = String(Number(val.innerText) - 1);
        subtotalVal.innerText = subtotal[0] + "$" + String(Number(subtotal[1]) - Number(cost));
    } else {
        val.innerText = "0";
    }
}

function clearAll() {
    let subtotal = document.getElementById("subtotal");
    let macncheeseCount = document.getElementById("macncheeseCount");
    let pastaCount = document.getElementById("pastaCount");
    let tacosCount = document.getElementById("tacosCount");
    let enchiladaCount = document.getElementById("enchiladaCount");
    subtotal.innerText = "Subtotal $0";
    macncheeseCount.innerText = "0";
    pastaCount.innerText = "0";
    tacosCount.innerText = "0";
    enchiladaCount.innerText = "0";
}

function order() {
    let macncheeseCount = document.getElementById("macncheeseCount").innerText;
    let pastaCount = document.getElementById("pastaCount").innerText;
    let tacosCount = document.getElementById("tacosCount").innerText;
    let enchiladaCount = document.getElementById("enchiladaCount").innerText;
    let message = "";
    if (macncheeseCount > 0) {
        message += macncheeseCount + " mac & cheese ";
    }
    if (pastaCount > 0) {
        message += pastaCount + " pasta ";
    }
    if (tacosCount > 0) {
        message += tacosCount + " tacos ";
    }
    if (enchiladaCount > 0) {
        message += enchiladaCount + " enchilada ";
    }
    message = "Order Placed! " + message;
    if (message === "Order Placed!") {
        message = "No items in cart";
    }
    alert(message)
}