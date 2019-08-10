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

    get version() {
        return fetch('https://gist.githubusercontent.com/do-diegoortiz/28038ec5d66f918129ab612076b9dfae/raw/35dfbcfe1e1dc6c31b62b49ae08cf87085f6253a/calculator-info.json')
            .then(promise => {
                return promise.json();
            })
            .then(response => {
                return response.version
            })
    }
}

// leete CORS 
// Leete CORs MDN
// Content negotiation 
// accept xml
// Content-Type -> lo que tu mandas - el formato en qu eestas manando el cuerpo de la petition 
// Accept -> lo que tu quieres que te retorne la API/server. El formato. 

// gist -> no es la url por que esa incluye html y CORS de github rechaza
// -> raw -> .json ese si funciona. 