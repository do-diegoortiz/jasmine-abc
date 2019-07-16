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

    // toBe
    it('should initialize with the right value', () => {
        const calculator = new Calculator();
        
        expect(calculator.total).toBe(0);
        expect(calculator.total).toBeFalsy;
    })

    // toBe vs. toEqual
    it('has a constructor', () => {
        const calculator = new Calculator();
        const calculator2 = new Calculator();
        
        expect(calculator).toEqual(calculator2);
        expect(calculator).toBeTruthy;
        expect(calculator2).toBeTruthy;
        expect(calculator.constructor.name).toContain('Calc');
    })

    it('instantiates unique object', function() {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();
        
        expect(calculator2).not.toBe(calculator1);
        expect(calculator2).toEqual(calculator1);
        // expect(calculator).toBe(calculator2); would fail and Jastime will tell you:
        // Tip: To check for deep equality, use .toEqual() instead of .toBe().
    });

    it('has common operations', function() {
        const calculator = new Calculator();

        expect(calculator.add).toBeDefined(); // same as not.toBeUndefined()
        expect(calculator.substract).toBeDefined();
        expect(calculator.multiply).toBeDefined();
        expect(calculator.divide).toBeDefined();
    })

    it('can overwrite total', function() {
        const calculator = new Calculator();
        // By default the total is set to 0
        calculator.total = null;

        expect(calculator.total).toBeNull();
    })

    it('does not handle NaN', () => {
        const calculator = new Calculator();

        calculator.total = 20;
        calculator.multiply('a'); // NaN

        expect(calculator.total).toBeNaN();
        
        calculator.total = 10;
        calculator.add('a'); // '10a'
        expect(calculator.total).not.toBeNaN();
    })
});