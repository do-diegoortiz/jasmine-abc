[![CircleCI](https://circleci.com/gh/do-diegoortiz/jasmine-abc.svg?style=svg)](https://circleci.com/gh/do-diegoortiz/jasmine-abc)

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

## Organizing Specs
We use `describe` to group our specs, it's also called a **suite**.
We should nest the suites by methods

###Setup
Where you place prerequisites for your specs. It executes **before** specs are run:
beforeEach(): Executed before each spec (`it`)
beforeAll(): Executed once before each suite (`describe`) or before all the specs in which it is called.

###Teardown
Clean up steps for your specs. It executes **after** specs are run:
afterEach(): Executed after each spec (`it`)
afterAll(): Executed once after each suite (`describe`) or after all the specs in which it is called.

###xit
To explicitly say the the spec is disabled, **temporarily disabled** or a pending spec. The spec won't be executed

## Spying On Your Code
Sometimes there are methods that are called in our test, but we are not testing them.
Spies create test doubles and help us isolate dependencies for true unit testing!
A test double is an object that can stand in for real object in a test, similar to a stunt in a movie.

### Spies
A spy can stub any function and tracks calls to it and all arguments.
A spy only exists in the `describe` and `it` where they were defined.
**Note:** We can NOT spy on getters and setters in Jasmine.

### Spy Matchers
toHaveBeenCalled: It only evaluates the methods was called, nothing else.
toHaveBeenCalledWith
toHaveBeenCalledTimes

### spyOn()
Receives two parameters, the object that contains the method we are spying on and a string with the name of the method()

### callThough()
You rarely need to use this method, but in case you need it, it's going to call the real implementation.
You know the spy creates a double, so the real implementation is not happening there, sometimes you
could need the real implementation to happen, that's when you use `and.callThrough()`

### callFake()
Rare to use too. It allows to call a specific custom implementation when spying on a function.
It recives a function as an argument, it should have the same signature like the one you're faking.

### returnValue()
If you want an specific value to be return. Very similar to callFake() method but shorter

### spyOnProperty()
Useful when we want to test the getters and setters from a property.
It receives three arguments, the last one is optional and by default is a `get`

## Testing Asynchronous Code
Useful to work with promises. For this you should use the `done` callback in the describe, and call it
at the end of your spec. Also you should mock the request, since we are testing the async method, not the request.

## Continuous Integration
In order to not include each file separately in out spec-runner.html
npm will allow us to get the dependencies from lib folder in our proyect.

1) Delete the lib folder
2) Delete de spec-matchers.js file
3) Install node if you don't have it already
4) Create a package.json file using the command `npm init` in your directory (all default answers are ok)
5) Install karma with command `npm install karma --save-dev`
6) Install jasmine-core and karma-jasmine `npm i jasmine-core karma-jasmine --save-dev` 
7) Install karma-jasmine-matchers `npm i karma-jasmine-matchers --save-dev` 
8) Create karma.config.js and set it up, karma looks for it automatically.

This first part will cover the part of a basic karma configuration to run all your tests automatically without the need
to register one by one.

We will need a headless browser, it is included in puppeteer package
9) Install puppeteer `npm i puppeteer --save-dev`
10) Add ChromeHeadless to karma config browsers array.
11) Install karma-chrome-launcher `npm i karma-chrome-launcher --save-dev` to integrate to chrome headless browser
12) Add karma-chrome-launcher to your karma.conf plugins
13) Add `process.env.CHROME_BIN = require('puppeteer').executablePath();` before module in karma config

Now the test are running in the console without the need to open a browser.
What if want to see reports of the tests. Because we want to know how much % of our code is being tested:

14) Install istanbul  `npm i -D istanbul`. Making sure our lines are visited helping to generate the report
15) Install karma-cli  `npm i -D karma-cli`. Needed for generate coverage reports.
16) Install karma-coverage  `npm i -D karma-coverage`. Plugin
17) Add it to the plugins in karma configuration.
18) Add a second reporter after dots, called `coverage`
19) Add a new key called coverageReporter to tell where the report is going to be saved
20) Add preprocessors key to config istanbul library on the js files.

Now in the coverage>html folder, you have a index.html that you can open to see the full report.