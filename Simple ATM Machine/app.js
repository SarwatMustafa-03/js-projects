



let balance = 5000;

// PIN check
document.getElementById("pin-submit").addEventListener("click", () => {
    const pinInput = document.getElementById("pin-input").value;
    const pinMessage = document.getElementById("pin-message");
    
    if (pinInput === "1234") {
        pinMessage.textContent = "PIN accepted!";
        document.getElementById("pin-section").style.display = "none";
        document.getElementById("options-section").style.display = "block";
        updateBalance();
    } else {
        pinMessage.textContent = "Incorrect PIN. Try again.";
    }
});

// Update balance display
function updateBalance() {
    document.getElementById("balance").textContent = "Balance: $" + balance;
}

// Check balance
function checkBalance() {
    updateBalance();
}

// Withdraw money
function withdrawMoney() {
    const amount = parseFloat(document.getElementById("withdraw-amount").value);
    const message = document.getElementById("withdraw-message");
    
    if (isNaN(amount) || amount <= 0) {
        message.textContent = "Enter a valid amount.";
    } else if (amount > balance) {
        message.textContent = "Insufficient funds.";
    } else {
        balance -= amount;
        message.textContent = "Withdrawal successful!";
        updateBalance();
    }
}

// Deposit money
function depositMoney() {
    const amount = parseFloat(document.getElementById("deposit-amount").value);
    const message = document.getElementById("deposit-message");

    if (isNaN(amount) || amount <= 0) {
        message.textContent = "Enter a valid amount.";
    } else {
        balance += amount;
        message.textContent = "Deposit successful!";
        updateBalance();
    }
}
