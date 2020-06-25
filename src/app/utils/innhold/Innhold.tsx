import XMLToReact from '@condenast/xml-to-react';
import * as Node from './Node';
import { IntlShape } from 'react-intl';

type NodeType = React.ReactNode;

const contentSubstitute = '<innhold />';

const renderAs = (type: NodeType) => (props: any) => ({
    type,
    props: { ...props, className: props.className || props.class },
});

const renderWithValues = (type: NodeType) => (props: any, values: any) => ({
    type,
    props: {
        ...props,
        values,
    },
});

const xmlToReact = new XMLToReact({
    innhold: renderAs(Node.Innhold),
    avsnitt: renderAs(Node.Avsnitt),
    lenke: renderAs(Node.Lenke),
    liste: renderAs(Node.Liste),
    punkt: renderAs('li'),
    b: renderAs('b'),
    i: renderAs('i'),
    span: renderAs('span'),
    lesmer: renderAs(Node.LesMerPanel),
    variabel: renderWithValues(Node.Variabel),
    unbreakable: renderAs(Node.Unbreakable),
    søkKnapp: renderAs(Node.SøkNåKnapp),
    ettersendKnapp: renderAs(Node.EttersendKnapp),
    søkOgEttersendKnapp: renderAs(Node.SøkOgEttersendKnapp),
    midstiltTittel: renderAs(Node.MidstiltTittel),
});

export const getSource = (path: string, intl: IntlShape): string => {
    const inDevelopment = process.env.NODE_ENV === 'development';
    const localeSnippet = intl.locale === 'nb' ? '' : `.${intl.locale}`;

    try {
        return require(`../../../content/${path}${localeSnippet}.xml`);
    } catch (e) {
        if (inDevelopment) {
            console.warn('Translated content not found, using default language:', e.message);
        }

        try {
            return require(`../../../content/${path}.xml`);
        } catch (e) {
            if (inDevelopment) {
                console.error('Content does not exist:', e);
            }

            return contentSubstitute;
        }
    }
};

const Innhold = ({ source, values = {}, className }: { source: any; values?: Node.ValueMap; className?: string }) => {
    try {
        const toRender = xmlToReact.convert(source.default, {
            ...values,
            className,
        });
        return toRender;
    } catch (e) {
        console.error('Error converting XML to React components:', e);
        return null;
    }
};

export default Innhold;
