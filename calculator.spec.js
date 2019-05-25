describe('calculator.js', function (){
    it('should add numbers to the total', () => {
        const calculator = new Calculator();
        calculator.add(5);

        expect(calculator.total).toBe(5);
    })
    it('should substract number from total', () => {
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.substract(5);

        expect(calculator.total).toBe(25);
    })
    it('should multiply number by total', () => {
        const calculator = new Calculator();
        calculator.total = 23;
        calculator.multiply(4);

        expect(calculator.total).toBe(92);
    })
    it('should divide number by total', () => {
        const calculator = new Calculator();
        calculator.total = 60;
        calculator.divide(6);

        expect(calculator.total).toBe(10);
    })
});