import * as React from 'react';
import LesMer from 'app/components/les-mer/LesMer';
import TypografiBase from 'nav-frontend-typografi';
import WithLink from 'app/components/with-link/WithLink';
import './innhold.less';

import BEMHelper from '../bem';

const cls = BEMHelper('innhold');

type TypografiType =
    | 'sidetittel'
    | 'innholdstittel'
    | 'systemtittel'
    | 'undertittel'
    | 'ingress'
    | 'element'
    | 'normaltekst'
    | 'etikettLiten'
    | 'undertekstBold'
    | 'undertekst';

export interface ValueMap {
    [s: string]: string;
}

export const Innhold = (props: any) => <div {...props} className={cls.className} />;

export const Avsnitt = (props: { type?: TypografiType; children: React.ReactNode }) => (
    <TypografiBase
        className={cls.element('avsnitt')}
        type={props.type || 'normaltekst'}
        {...props}
    />
);

export const Variabel = (props: { values: ValueMap; children: string }) => {
    const { values, children } = props;
    return <span {...props}>{values[children] || 'tøys og tull'}</span>;
};

export const Lenke = (props: { url: string; ekstern: string; children: React.ReactNode }) => (
    <WithLink addExternalIcon={!!props.ekstern} urlIsExternal={!!props.ekstern} {...props} />
);

export const LesMerPanel = (props: { intro: string; children: React.ReactNode }) => (
    <LesMer intro={props.intro} children={props.children} />
);

export const Liste = (props: { type?: TypografiType; tag?: string; children: React.ReactNode }) => (
    <TypografiBase type={props.type || 'normaltekst'} {...props} tag={props.tag || 'ul'} />
);
