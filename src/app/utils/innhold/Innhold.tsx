import XMLToReact from '@condenast/xml-to-react';
import * as Node from './Node';
import { InjectedIntl } from 'react-intl';

type NodeType = React.ReactNode | string;

const renderAs = (type: NodeType) => (props: any) => ({ type, props });
const renderWithValues = (type: NodeType) => (props: any, values: any) => ({
    type,
    props: {
        ...props,
        values
    }
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
    unbreakable: renderAs(Node.Unbreakable)
});

export const getSource = (path: string, intl: InjectedIntl): string => {
    try {
        const content = require(`../../../content/${intl.locale}/${path}.xml`);
        return content;
    } catch (e) {
        if (process.env.NODE_ENV === 'development') {
            /* tslint:disable */
            console.error('No content found:', e);
        }

        return '<innhold><avsnitt>Content not found</avsnitt></innhold>';
    }
};

const Innhold = ({ source, values }: { source: string; values?: Node.ValueMap }) => {
    try {
        const toRender = xmlToReact.convert(source, values);
        return toRender;
    } catch (e) {
        console.error('Error converting XML to React components:', e);
        return null;
    }
};

export default Innhold;
