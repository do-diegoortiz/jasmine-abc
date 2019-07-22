const customMatchers = {
    toBeCalculator() {
        return {
            compare: (actual) => {
                const result = {
                    pass: actual instanceof Calculator,
                    message: ''
                }

                // We need two messages, for the case when we negate the matcher (not.toBeCalculator())
                if (result.pass) {
                    result.message = 'Expected ' + actual + ' not to be instance of Calculator';
                } else {
                    result.message = 'Expected ' + actual + ' to be instance of Calculator';
                }

                return result;
            }
        }
    }
}