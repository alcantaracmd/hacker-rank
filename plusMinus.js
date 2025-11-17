function plusMinus(arr) {
    const n = arr.length;

    let positivos = 0;
    let negativos = 0;
    let zeros = 0;

    for (let num of arr) {
        if (num > 0) positivos++;
        else if (num < 0) negativos++;
        else zeros++;
    }

    console.log((positivos / n).toFixed(6));
    console.log((negativos / n).toFixed(6));
    console.log((zeros / n).toFixed(6));
}