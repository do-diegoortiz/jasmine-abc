## Global Methods
Methods that we don't need to import in order to use them.

### describe (Suite)
The group of related specs

### it (Spec)
Receives two parameters:
1) The title of the expectation
2) The assertion, in the form of an anonymous function
TIP: To read the title of the spec, include the word "it" as part of the sentence

### expect (Expectations)
Return true or false. It has two parts:
1) Actual value, or main parameter of the expect
2) Chained with a matcher using dot (.)
e.g. expect(calculator.value).toBe(5)

### Disabled Specs - xit (Video 18)
With this option the spec will report as pending and won't be executed.
This is useful in two common  cases:

1) When you making changes and you want to disbled them until you finish.
2) TDD -> You write specs first and then you create the code.

### Disabled Suite - xdescribe (Video 18)
All specs within the disabled suite will be marked as pending (not executed).

## Matchers
Official Documentation: https://jasmine.github.io/api/3.4/matchers.html
A boolean comparison between the actual  value and the expected value.
A matcher is responsible for reporting to Jasmine if the expectatin is true or false.
In other words, if the spec is passing or failing.

### toBe()
Comparison with === (value and type)

### toEqual()
Deep equality comparison, it means equal keys and values (useful with Objects)

### toBeDefined()
`undefined` is different than `null`. Sometimes we need to check our methods or variables are defined.

### toBeNull()
Different to `undefined`. We validate that the actual value to be exactly `null`.

### toContain()
When looking for a subString of the value in your expect

### toBeNaN()
`expect` the value to be *Not a Number*. Careful to not write Nan instead of Nan.
e.g. to understand more about NaN:
20 + 'a' // '20a'
20 * 'a' // NaN
20 * '' // 0
NaN === NaN // false
Number.isNaN('') // false
Number.isNan(NaN) // true

### toThrow()
Be careful to wrap the expected result inside a function to not break the expect before evaluation.

### toThrowError()
It can receive two parameters, expected and message

### toMatch()
For regular expresions, remember to wrap de RegEx inside /*RegEx*/ or plain text for typeOf

## Asymetric Matchers

### toEqual(jasmine.anything())
It only doesn't work with `null` and `unedfined`

## Custom Matchers
You can create your own matcher. You have to create a file with the structure shown in custom-matchers.js.
Then you define a compare function where you decide how it success and what message to show when it fails.

The matcher needs to be registered, so we need to import the file as a script in the html and import it in the suite
using structure `jasmine.addMatchers(myMatcherName);`

**Note:** If you compare `{} == {}` you'll get false because they have different location in memory
That's why you need to use toEqual to match keys and values instead of its memory location.

'spec' is short for specification