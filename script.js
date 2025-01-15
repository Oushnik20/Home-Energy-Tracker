function predictBill() {
    const dailyUsage = parseFloat(document.getElementById("daily-usage").value);
    const rate = parseFloat(document.getElementById("rate").value);

    if (!dailyUsage || !rate) {
        alert("Please enter valid values!");
        return;
    }

    const monthlyBill = dailyUsage * rate * 30;
    document.getElementById("bill-prediction").innerText = `Estimated Monthly Bill: $${monthlyBill.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded!");
});
