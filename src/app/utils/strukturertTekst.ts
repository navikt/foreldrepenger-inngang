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

export type AvsnittType = 'avsnitt' | 'liste' | 'avsnitt-uten-padding';
export type TekstsnuttType = 'span' | 'element';
export type MarkReference = string;
export type MarkType = 'link';

export interface MarkDefinition {
    key: MarkReference;
    type: MarkType;
    href?: string;
}

export interface Tekstsnutt {
    type: TekstsnuttType;
    text: string;
    marks: Array<MarkReference | MarkType>;
}

export interface Avsnitt {
    type: AvsnittType;
    style: TypografiType;
    children: Array<Tekstsnutt>;
    markDefs: Array<MarkDefinition>;
}

export type StrukturertTekst = Array<Avsnitt>;
