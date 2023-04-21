module.exports = {
    testRegex: '(/__tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleNameMapper: {
        '\\.(css|jpg|png|svg|less)$': '<rootDir>/jest/style-mock.js',
        'nav-(.*)-style': '<rootDir>/jest/style-mock.js',
        '^uttaksplan/(.*)': '<rootDir>/src/uttaksplan/$1',
        '^common/(.*)': '<rootDir>/src/common/$1',
        '^app/(.*)': '<rootDir>/src/app/$1',
    },
    rootDir: '../',
    preset: 'ts-jest/presets/js-with-ts',
    testMatch: null,
};
