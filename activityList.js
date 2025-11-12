function Activity(amount) {
    this.amount = amount;
}

Activity.prototype.setAmount = function(value) {
    if (value <= 0) {
        return false;
    }
    this.amount = value;
    return true;
};

Activity.prototype.getAmount = function() {
    return this.amount;
};

// ---------------- Payment ----------------
function Payment(amount, receiver) {
    Activity.call(this, amount); // chama o construtor pai
    this.receiver = receiver;
}

// herda de Activity
Payment.prototype = Object.create(Activity.prototype);
Payment.prototype.constructor = Payment;

Payment.prototype.setReceiver = function(value) {
    this.receiver = value;
};

Payment.prototype.getReceiver = function() {
    return this.receiver;
};

// ---------------- Refund ----------------
function Refund(amount, sender) {
    Activity.call(this, amount);
    this.sender = sender;
}

Refund.prototype = Object.create(Activity.prototype);
Refund.prototype.constructor = Refund;

Refund.prototype.setSender = function(value) {
    this.sender = value;
};

Refund.prototype.getSender = function() {
    return this.sender;
};