class Calculator {
    constructor() {
        this.total = 0;
    }
    add(number) {
        return this.total += number;
    }
    substract(number) {
        return this.total -= number;
    }
    multiply(number) {
        return this.total *= number;
    }
    divide(number) {
        if (number === 0)
            throw new Error("Can't be zero");
        return this.total /= number;
    }
}

