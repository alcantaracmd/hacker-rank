function getFixedCounter(k) {
    var value = 0;
    return {
        increment() { value += k },
        decrement() { value -= k },
        getValue() { return value }
    };
}