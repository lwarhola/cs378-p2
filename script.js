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