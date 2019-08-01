describe('index.js', () => {
    describe('calculate()', () => {
        xit('validates expression', () => {

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