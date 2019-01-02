const walk = require('walk');
const fs = require('fs');

const testInnhold = (sendInvalidFiles) => {
    const contentFolder = 'src/content';
    const walker = walk.walk(contentFolder, { followLinks: false });
    let files = [];

    walker.on('file', (root, stat, next) => {
        files.push(root + '/' + stat.name);
        next();
    });

    walker.on('end', () => {
        files = files.sort().filter((file) => file.endsWith('.json'));
        const invalidFiles = [];

        for (const file of files) {
            try {
                const tekst = fs.readFileSync(file);
                JSON.parse(tekst);
            } catch (error) {
                invalidFiles.push({
                    file,
                    error
                });
            }
        }

        sendInvalidFiles(invalidFiles);
    });
};

test('innhold kompilerer', (done) => {
    const receiveInvalidFiles = (invalidFiles) => {
        if (invalidFiles.length > 0) {
            console.error('Invalid files:', invalidFiles);
        }

        expect(invalidFiles.length).toBe(0);
        done();
    };

    testInnhold(receiveInvalidFiles);
});
