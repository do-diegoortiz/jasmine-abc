describe('calculator.js', function (){
    let calculator;
    let calculator2;
    beforeEach(() => {
        calculator = new Calculator();
        calculator2 = new Calculator();
    });

    afterEach(() => {

    });

    describe('add()', () => {
        it('should add numbers to the total', () => {
            calculator.add(5);
    
            expect(calculator.total).toBe(5);
        })
    });
    
    describe('substract()', () => {
        it('should substract number from total', () => {
            calculator.total = 30;
            calculator.substract(5);
    
            expect(calculator.total).toBe(25);
        })
    });

    describe('multiply()', () => {
        it('should multiply number by total', () => {
            calculator.total = 23;
            calculator.multiply(4);
    
            expect(calculator.total).toBe(92);
        })
    });

    describe('divide()', () => {
        it('should divide number by total', () => {
            calculator.total = 60;
            calculator.divide(6);
    
            expect(calculator.total).toBe(10);
        });

        it('handles divide by zero', () => {
            // This expect breaks the expectation before being avaluated
            // expect(calculator.divide(0)).toThrow();
            // So we need to wrap it inside a function
            expect(() => {calculator.divide(0)}).toThrow();
            expect(() => {calculator.divide(0)}).toThrowError(Error);
            expect(() => {calculator.divide(0)}).toThrowError(Error, "Can't be zero");
        });
    });

    describe('get version', () => {
        it('fetches version from external source USING THEN', (done) => {
            // calculator.version is gonna return a Promise, that's why we can use the then() method
            // So the expectation must be inside the promise handler.

            // But we also need to spy and mock the response, since we have real unit testing
            // we don't want real calls to the url

            spyOn(window, 'fetch').and.returnValue(Promise.resolve(
                new Response('{ "version": "0.1" }')
            ))

            calculator.version.then(version => {
                expect(version).toBe('0.1');

                done();
            })
        });

        it('fetches version from external source USING ASYNC-AWAIT ES2017', async (done) => {
            spyOn(window, 'fetch').and.returnValue(Promise.resolve(
                new Response('{ "version": "0.1" }')
            ))

            const version = await calculator.version

            expect(window.fetch).toHaveBeenCalled();
            expect(version).toBe('0.1');
            done();
        });
    });

    // toBe
    it('should initialize with the right value', () => {
        expect(calculator.total).toBe(0);
        expect(calculator.total).toBeFalsy;
    })

    it('has a constructor', () => {
        jasmine.addMatchers(customMatchers);
        
        expect(calculator).toBeCalculator();
        expect(calculator).toEqual(calculator2);
        expect(calculator).toBeTruthy;
        expect(calculator2).toBeTruthy;
        expect(calculator.constructor.name).toContain('Calc');
    })

    // toBe vs. toEqual
    it('instantiates unique object', function() {
        expect(calculator2).not.toBe(calculator);
        expect(calculator2).toEqual(calculator);
        // expect(calculator).toBe(calculator2); would fail and Jastime will tell you:
        // Tip: To check for deep equality, use .toEqual() instead of .toBe().
    });

    it('has common operations', function() {
        expect(calculator.add).toBeDefined(); // same as not.toBeUndefined()
        expect(calculator.substract).toBeDefined();
        expect(calculator.multiply).toBeDefined();
        expect(calculator.divide).toBeDefined();
    })

    it('can overwrite total', function() {
        // By default the total is set to 0
        calculator.total = null;

        expect(calculator.total).toBeNull();
    })

    it('does not handle NaN', () => {
        calculator.total = 20;
        calculator.multiply('a'); // NaN

        expect(calculator.total).toBeNaN();
        
        calculator.total = 10;
        calculator.add('a'); // '10a'
        expect(calculator.total).not.toBeNaN();
    });

    it('returns total', () => {
        calculator.total = 50;

        expect(calculator.add(18)).toBe(68);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch('number');
        // asymetric matchers!
        // not equal in each side!
        expect(calculator.total).toEqual(jasmine.anything());

        // Third party matchers
        // That could work adding libraries like:https://github.com/JamieMason/Jasmine-Matchers
        // expect(calculator.total).toBeNumber();
    })
});