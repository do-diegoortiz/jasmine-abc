describe('index.js', () => {
    describe('calculate()', () => {
        it('validates expression when the first number is invalid', () => {
            // Tracks the calls to the method and nothing else.
            spyOn(window, 'updateResult');

            calculate('a+3');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not valid');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('validates expression when the second number is invalid', () => {
            spyOn(window, 'updateResult');

            calculate('3+x');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not valid');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('validates expression when the operator is invalid', () => {
            spyOn(window, 'updateResult');

            calculate('9%3');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not valid');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('calls add', () => {
            const spy = spyOn(Calculator.prototype, 'add')

            calculate('2+4')

            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(2);
            expect(spy).toHaveBeenCalledWith(4);
        });

        it('calls substract', () => {
            const spy = spyOn(Calculator.prototype, 'substract')

            calculate('7-5')

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(5);
        });

        it('calls multiply', () => {
            const spy = spyOn(Calculator.prototype, 'multiply')

            calculate('6*9')

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).not.toHaveBeenCalledWith(6);
            expect(spy).toHaveBeenCalledWith(9);
        });

        it('calls divide', () => {
            const spy = spyOn(Calculator.prototype, 'divide')

            calculate('96/8')

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(8);
        });

        it('calls updateResult (example using and.callThrough)', () => {
            spyOn(window, 'updateResult')
            // This spec is going to fail if you don't include the .and.callThrough()
            // Because if not, the multiply will never happen in real life, it would return undefined
            spyOn(Calculator.prototype, 'multiply').and.callThrough()

            calculate('11*12')

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(132);
        });

        it('calls updateResult (example using and.callFake)', () => {
            spyOn(window, 'updateResult')
            spyOn(Calculator.prototype, 'divide').and.callFake(() => {
                return 'it works'
            })

            calculate('121/11')

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('it works');
        });

        it('calls updateResult (example using and.returnValue)', () => {
            spyOn(window, 'updateResult')
            spyOn(Calculator.prototype, 'divide').and.returnValue('Whatever you want')

            calculate('4/2')

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Whatever you want');
        });
    });
    describe('updateResult()', () => {
        beforeAll(() => {
            const element = document.createElement('div');
            element.setAttribute('id', 'result')
            document.body.appendChild(element);

            // A way to use element everywhere in the suite as a state without defining the variable at the beggining
            this.element = element;
        });

        afterAll(() => {
            document.body.removeChild(this.element);
        });
        it('adds  result to DOM element', () => {
            updateResult('5');

            expect(this.element.innerText).toBe('5');
        });
    });
});