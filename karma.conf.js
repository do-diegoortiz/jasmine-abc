process.env.CHROME_BIN = require('puppeteer').executablePath();
// https://medium.com/@metalex9/replace-phantomjs-with-headless-chromium-for-javascript-unit-testing-in-karma-59812e6f8ce4

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'jasmine-matchers'],
        preprocessors: {
            '*.js': ['coverage']
        },
        files: [
            './custom-matchers.js',
            '*.js',
            '*.spec.js'
        ],
        plugins: [
            'karma-jasmine',
            'karma-jasmine-matchers',
            'karma-chrome-launcher',
            'karma-coverage'
        ],
        reporters: ['dots', 'coverage'],
        color: true,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {type: 'html', subdir: 'html'}
            ]
        }
    });
};