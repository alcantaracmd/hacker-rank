function miniMaxSum(arr) {
    const total = arr.reduce((a, b) => a + b, 0);

    const min = total - Math.max(...arr);
    const max = total - Math.min(...arr);

    console.log(min + " " + max);
}