import * as React from 'react';
import classnames from 'classnames';
import LesMer from '../../../app/components/les-mer/LesMer';
import TypografiBase, { Undertittel } from 'nav-frontend-typografi';
import WithLink from '../../../app/components/with-link/WithLink';
import './innhold.less';

import BEMHelper from '../bem';
import UtvidetInformasjon from '../../../app/pages/kalkulator/utvidetinformasjon/UtvidetInformasjon';
import Lenkeknapp from '../../components/lenkeknapp/Lenkeknapp';
import { getSøknadsurl, Søknadstyper } from '../externalUrls';
import Environment from 'app/Environment';

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

export const Innhold = (props: any) => <div {...props} className={classnames(cls.block, props.className)} />;

export const Avsnitt = (props: { type?: TypografiType; className?: string; children: React.ReactNode }) => (
    <TypografiBase type={props.type || 'normaltekst'} className={classnames(cls.element('avsnitt'), props.className)}>
        {props.children}
    </TypografiBase>
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

export const MidstiltTittel = (props: any) => (
    <Undertittel className={cls.element('midtstiltTittel')}>{props.children}</Undertittel>
);

export const SøkNåKnapp = (props: { søknad: Søknadstyper; sentrert?: boolean; children: React.ReactNode }) => {
    const url = getSøknadsurl(props.søknad);
    if (!url) {
        return null;
    }
    const content = (
        <Lenkeknapp url={url} urlIsExternal={true} type="hoved">
            {props.children}
        </Lenkeknapp>
    );
    if (props.sentrert) {
        return (
            <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'inline-block' }}>{content}</span>
            </div>
        );
    }
    return content;
};

export const LesMerPanel = (props: { liten?: string; intro: string; children: React.ReactNode }) => {
    const { liten, intro, children } = props;

    return liten ? (
        <UtvidetInformasjon apneLabel={intro}>{children}</UtvidetInformasjon>
    ) : (
        <LesMer intro={intro}>{children}</LesMer>
    );
};

export const Liste = (props: { type?: TypografiType; tag?: string; children: React.ReactNode }) => (
    <TypografiBase type={props.type || 'normaltekst'} {...props} tag={props.tag || 'ul'} />
);

export const EttersendKnapp = (props: { sentrert?: boolean; children: React.ReactNode }) => {
    const content = (
        <Lenkeknapp url={Environment.DINE_FORELDREPENGER_URL} urlIsExternal={true}>
            {props.children}
        </Lenkeknapp>
    );

    if (props.sentrert) {
        return <span style={{ display: 'inline' }}>{content}</span>;
    }

    return content;
};

export const SøkOgEttersendKnapp = (props: { søknad: Søknadstyper; children: string }) => {
    const url = getSøknadsurl(props.søknad);
    if (!url) {
        return null;
    }

    const knappTekster = props.children.split('|');

    const søkKnapp = (
        <Lenkeknapp url={url} urlIsExternal={true} type="hoved">
            {knappTekster[0]}
        </Lenkeknapp>
    );

    const ettersendKnapp = (
        <Lenkeknapp url={Environment.DINE_FORELDREPENGER_URL} urlIsExternal={true}>
            {knappTekster[1]}
        </Lenkeknapp>
    );

    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div>{søkKnapp}</div>
            <div>{ettersendKnapp}</div>
        </div>
    );
};
