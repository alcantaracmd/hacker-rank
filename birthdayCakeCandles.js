function birthdayCakeCandles(candles) {
    const max = Math.max(...candles);
    let count = 0;

    for (let c of candles) {
        if (c === max) count++;
    }

    return count;
}