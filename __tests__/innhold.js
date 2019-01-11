const walk = require('walk');
const fs = require('fs');

const getContentFiles = (retrievedFiles) => {
    const contentFolder = 'src/content';
    const walker = walk.walk(contentFolder, { followLinks: false });
    let files = [];

    walker.on('file', (root, stat, next) => {
        files.push(root + '/' + stat.name);
        next();
    });

    walker.on('end', () => {
        retrievedFiles(files.filter((file) => file.endsWith('.xml')));
    });
};

test('innhold er oversatt til engelsk', (done) => {
    const retrievedFiles = (files) => {
        const removeFileEnding = (file) => file.split('.')[0];

        const bokmålFiles = files
            .filter((file) => !file.endsWith('.en.xml') && !file.endsWith('.nn.xml'))
            .map(removeFileEnding);

        const englishFiles = files
            .sort()
            .filter((file) => file.endsWith('.en.xml'))
            .map(removeFileEnding);

        const missingEnglish = bokmålFiles.filter(
            (bokmålFile) => !englishFiles.includes(bokmålFile)
        );

        expect(missingEnglish).toHaveLength(0);
        done();
    };

    getContentFiles(retrievedFiles);
});

test('innhold er oversatt til nynorsk', (done) => {
    const retrievedFiles = (files) => {
        const removeFileEnding = (file) => file.split('.')[0];

        const bokmålFiles = files
            .filter((file) => !file.endsWith('.en.xml') && !file.endsWith('.nn.xml'))
            .map(removeFileEnding);

        const nynorskFiles = files
            .sort()
            .filter((file) => file.endsWith('.nn.xml'))
            .map(removeFileEnding);

        const missingNynorsk = bokmålFiles.filter(
            (bokmålFile) => !nynorskFiles.includes(bokmålFile)
        );

        expect(missingNynorsk).toHaveLength(0);
        done();
    };

    getContentFiles(retrievedFiles);
});
