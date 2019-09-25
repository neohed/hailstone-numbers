export function generateHailstoneNumbers(n) {
    let max = n;
    const numbers = [];

    while (n > 1) {

        if (n & 1) {
            n = n * 3 + 1
        } else {
            n = Math.floor(n / 2)
        }

        max = Math.max(max, n);
        numbers.push(n);
    }

    return {
        max,
        numbers
    }
}
