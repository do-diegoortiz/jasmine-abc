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


'spec' is short for specification