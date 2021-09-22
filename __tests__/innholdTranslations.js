import { getContentFiles } from '../jest/utils';

let allContentFiles = [];
const removeFileEnding = (file) => file.split('.')[0];

const getMissingTranslations = (files, lang) => {
    const bokmålFiles = files
        .filter((file) => !file.endsWith('.en.xml') && !file.endsWith('.nn.xml'))
        .map(removeFileEnding);

    const translatedFiles = files
        .sort()
        .filter((file) => file.endsWith(`.${lang}.xml`))
        .map(removeFileEnding);

    return bokmålFiles.filter((bokmålFile) => !translatedFiles.includes(bokmålFile));
};

beforeAll(() => {
    return getContentFiles().then((files) => (allContentFiles = files));
});

describe('oversetting av innholdsfiler', () => {
    test.skip('innhold er oversatt til engelsk', () => {
        const missingEnglish = getMissingTranslations(allContentFiles, 'en');
        expect(missingEnglish).toHaveLength(0);
    });

    test.skip('innhold er oversatt til nynorsk', () => {
        const missingNynorsk = getMissingTranslations(allContentFiles, 'nn');
        expect(missingNynorsk).toHaveLength(0);
    });
});
