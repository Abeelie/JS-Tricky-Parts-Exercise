function createAccount(pin, amount=0) {
    this.pin = pin;
    this.amount = amount;

    return {
        checkBalance(userPin) {
            if(userPin !== pin) return "Invalid PIN.";
            else return `$${amount}`;
        },
        
        deposit(userPin, depositAmount){
            if(userPin == pin) {
                return `Succesfully deposited $${depositAmount}. Current balance: $${amount += depositAmount}.`;
            }
            else return "Invalid PIN.";
        },

        withdraw(userPin, withdrawAmount){
            if(userPin != pin) return "Invalid PIN.";
            if(userPin == pin){
                if(amount - withdrawAmount > 0) {
                    return `Succesfully withdrew $${withdrawAmount}. Current balance: $${amount -= withdrawAmount}.`;
                }
                else return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
        },

        changePin(oldPin, newPin){
            if(oldPin !== pin) return "Invalid PIN.";
            else {
                pin = newPin; 
                return "PIN successfully changed!";
            }
        }
    }
}

module.exports = { createAccount };
