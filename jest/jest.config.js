module.exports = {
    setupTestFrameworkScriptFile: './jest/setup.ts',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleNameMapper: {
        '\\.(css|jpg|png|svg|less)$': '<rootDir>/jest/style-mock.js',
        'nav-(.*)-style': '<rootDir>/jest/style-mock.js',
        '^uttaksplan/(.*)': '<rootDir>/src/uttaksplan/$1',
        '^common/(.*)': '<rootDir>/src/common/$1'
    },
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.test.json',
            babelConfig: true
        }
    },
    rootDir: '../',
    preset: 'ts-jest/presets/js-with-babel',
    testMatch: null
};
