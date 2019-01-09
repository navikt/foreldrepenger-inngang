const fs = require('fs');
const walk = require('walk');

const contentFolder = 'src/content/nb';

const indent = (level, insertNewLine) => {
    let str = insertNewLine ? '\n' : '';

    for (let i = 0; i < level; i++) {
        str += '    ';
    }

    return str;
};

const parseContent = (tekst) => {
    return `<innhold>${
        tekst ? indent(1, true) + tekst.map(parseAvsnitt()).join(indent(1, true)) + '\n' : ''
    }</innhold>`;
};

const parseAvsnitt = () => (avsnitt, index) => {
    const {
        type = 'avsnitt',
        style = 'normaltekst',
        markDefs = [],
        children = [],
        listItem,
        level = 0
    } = avsnitt;

    let ret = '\n';

    if (level > 0) {
        const renderListElement = parseTekstsnutt(markDefs);
        const itemToRender = `<punkt>${children
            .map((tekstsnutt, childIndex) => {
                return renderListElement(tekstsnutt, childIndex);
            })
            .join('')}</punkt>`;

        ret =
            listItem === 'number'
                ? `<liste tag="ol">${indent(2, true)}${itemToRender}${indent(1, true)}</liste>`
                : `<liste>${indent(2, true)}${itemToRender}${indent(1, true)}</liste>`;
    } else {
        ret = `<avsnitt type="${style}">${children
            .map(parseTekstsnutt(markDefs))
            .join('')}</avsnitt>`;
    }

    return ret;
};

const parseTekstsnutt = (markDefs, variabler) => (tekstsnutt, index) => {
    let snuttype = 'span';
    let text = '';
    let marks = [];

    if (typeof tekstsnutt !== 'string') {
        snuttype = tekstsnutt.type || 'span';
        text = tekstsnutt.text;
        marks = tekstsnutt.marks || [];
    } else {
        text = tekstsnutt;
    }

    const variablesAvailable = variabler && variabler[text] && marks && marks.includes('variable');
    let toRender = variabler && variablesAvailable ? variabler[text] : text;

    switch (snuttype) {
        case 'span_nowrap': {
            toRender = `<unbreakable>${toRender}</unbreakable>`;
            break;
        }
    }

    marks.forEach((mark) => {
        switch (mark) {
            case 'bold': {
                toRender = `<b>${toRender}</b>`;
                break;
            }

            case 'italic': {
                toRender = `<i>${toRender}</i>`;
                break;
            }

            case 'variable': {
                toRender = `<variabel>${toRender}</variabel>`;
                break;
            }

            default: {
                if (markDefs) {
                    const markDefinition = markDefs.find((m) => m.key === mark);
                    if (markDefinition) {
                        toRender = `<lenke url="${markDefinition.href || '/#'}"${
                            marks.includes('external_link') ? 'ekstern="true"' : ''
                        }>${toRender}</lenke>`;
                    }
                }
            }
        }
    });

    return toRender;
};

const walker = walk.walk(contentFolder, { followLinks: false });

walker.on('file', (root, stat, next) => {
    const jsonFileName = root + '/' + stat.name;
    const xmlFileName = jsonFileName.split('.json')[0].concat('.xml');

    try {
        const json = JSON.parse(fs.readFileSync(jsonFileName, 'utf8'));
        const converted = parseContent(json);

        fs.writeFileSync(xmlFileName, converted, 'utf8', () => {
            console.warn('Successfully wrote output to', xmlFileName);
        });
    } catch (e) {}

    next();
});
