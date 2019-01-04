const fs = require('fs');

const LOCALES_PATH = '../src/app/intl/locales';

const localeFileBokmål = require(`${LOCALES_PATH}/nb_NO.json`);
const localeFileNynorsk = require(`${LOCALES_PATH}/nn_NO.json`);
const localeFileEnglish = require(`${LOCALES_PATH}/en_GB.json`);

const getMissingKeys = (defaultLanguage, targetLanguage) => {
    const defaultLocaleFile = require(`${LOCALES_PATH}/${defaultLanguage}.json`);
    const targetLocaleFile = require(`${LOCALES_PATH}/${targetLanguage}.json`);

    const allKeysBokmål = Object.keys(defaultLocaleFile);
    const allKeysEnglish = Object.keys(targetLocaleFile);

    const missingKeys = allKeysBokmål.filter((bokmålKey) => !allKeysEnglish.includes(bokmålKey));

    const missingTranslations = {};
    for (const missingKey of missingKeys) {
        missingTranslations[missingKey] = defaultLocaleFile[missingKey];
    }

    writeMissingTranslationsToFile(targetLanguage, missingTranslations);
    return missingKeys;
};

const writeMissingTranslationsToFile = (targetLanguage, missingTranslations) => {
    fs.writeFileSync(
        `${__dirname}/${LOCALES_PATH}/${targetLanguage}_missing.json`,
        JSON.stringify(missingTranslations)
    );
};

test('meldinger er oversatt til nynorsk', () => {
    const missingKeys = getMissingKeys('nb_NO', 'nn_NO');
    expect(missingKeys).toHaveLength(0);
});

test('meldinger er oversatt til engelsk', () => {
    const missingKeys = getMissingKeys('nb_NO', 'en_GB');
    expect(missingKeys).toHaveLength(0);
});
