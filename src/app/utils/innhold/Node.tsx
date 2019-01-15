import * as React from 'react';
import classnames from 'classnames';
import LesMer from '../../../app/components/les-mer/LesMer';
import TypografiBase from 'nav-frontend-typografi';
import WithLink from '../../../app/components/with-link/WithLink';
import './innhold.less';

import BEMHelper from '../bem';
import UtvidetInformasjon from '../../../app/pages/kalkulator/utvidetinformasjon/UtvidetInformasjon';

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

export const Innhold = (props: any) => (
    <div {...props} className={classnames(cls.className, props.className)} />
);

export const Avsnitt = (props: { type?: TypografiType; children: React.ReactNode }) => (
    <TypografiBase
        className={cls.element('avsnitt')}
        type={props.type || 'normaltekst'}
        {...props}
    />
);

export const Variabel = (props: { values: ValueMap; children: string }) => {
    const { values, children } = props;
    return <span {...props}>{values[children]}</span>;
};

export const Unbreakable = (props: { children: React.ReactNode }) => (
    <span className={cls.element('unbreakable')}>{props.children}</span>
);

export const Lenke = (props: { url: string; ekstern: string; children: React.ReactNode }) => (
    <WithLink addExternalIcon={!!props.ekstern} urlIsExternal={!!props.ekstern} {...props} />
);

export const LesMerPanel = (props: {
    liten?: string;
    intro: string;
    children: React.ReactNode;
}) => {
    const { liten, intro, children } = props;

    return liten ? (
        <UtvidetInformasjon apneLabel={intro} children={children} />
    ) : (
        <LesMer intro={intro} children={children} />
    );
};

export const Liste = (props: { type?: TypografiType; tag?: string; children: React.ReactNode }) => (
    <TypografiBase type={props.type || 'normaltekst'} {...props} tag={props.tag || 'ul'} />
);
