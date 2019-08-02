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
        xit('calls add', () => {

        });
        xit('calls substract', () => {

        });
        xit('calls multiply', () => {

        });
        xit('calls divide', () => {

        });
        xit('validates operation', () => {

        });
        xit('calls updateResult', () => {

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