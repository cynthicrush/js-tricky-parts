function createAccount(pin, total=0) {
    return {
        checkBalance(password) {
            if(password !== pin) return 'Invalid PIN.';
            return `$${total}`;
        },

        deposit(password, amount) {
            if(password !== pin) return 'Invalid PIN.'
            return `Succesfully deposited $${amount}. Current balance: $${total += amount}.`
        },

        withdraw(password, amount) {
            if(password !== pin) return 'Invalid PIN.'
            if(amount > total) return 'Withdrawal amount exceeds account balance. Transaction cancelled.'
            return `Succesfully withdrew $${amount}. Current balance: $${total -= amount}.`
        },

        changePin(oldPin, newPin) {
            if(oldPin !== pin) return 'Invalid PIN.'
            pin = newPin;
            return 'PIN successfully changed!'
        }
    }
    
}

module.exports = { createAccount };
