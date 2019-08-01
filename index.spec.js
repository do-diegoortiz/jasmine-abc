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
        let element;
        beforeAll(() => {
            element = document.createElement('div');
            element.setAttribute('id', 'result')
            document.body.appendChild(element);
        });

        afterAll(() => {
            const element = document.getElementById('result');

            document.body.removeChild(element);
        });
        it('adds  result to DOM element', () => {
            updateResult('5');

            expect(element.innerText).toBe('5');
        });
    });
});