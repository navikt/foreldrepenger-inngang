import walk from 'walk';

export const getContentFiles = () => {
    return new Promise((resolve) => {
        const contentFolder = 'src/content';
        const walker = walk.walk(contentFolder, { followLinks: false });
        let files = [];

        walker.on('file', (root, stat, next) => {
            files.push(root + '/' + stat.name);
            next();
        });

        walker.on('end', () => {
            resolve(files.filter((file) => file.endsWith('.xml')));
        });
    });
};
