## Global Methods
Methods that we don't need to import in order to use them.

### it
Receives two parameters:
1) The title of the expectation
2) The assertion, in the form of an anonymous function
TIP: To read the title of the spec, include the word "it" as part of the sentence

### expect
Return true or false. It has two parts:
1) Actual value, or main parameter of the expect
2) Chained with a matcher using dot (.)
e.g. expect(calculator.value).toBe(5)

'spec' is short for specification