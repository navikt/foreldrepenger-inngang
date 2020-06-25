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

export type AvsnittType = 'avsnitt' | 'tittel' | 'liste' | 'avsnitt-uten-padding';
export type TekstsnuttType = 'span' | 'element' | 'span_nowrap';
export type MarkReference = string;
export type Mark = 'link';
export type ListItem = 'bullet' | 'number';

export interface MarkDefinition {
    key: MarkReference;
    type: Mark;
    href?: string;
}

export interface TekstsnuttKompleks {
    text: string;
    type?: TekstsnuttType;
    marks?: (MarkReference | Mark)[];
}

export type Tekstsnutt = TekstsnuttKompleks | string;

export interface Avsnitt {
    children: Tekstsnutt[];
    type?: AvsnittType;
    style?: TypografiType;
    markDefs?: MarkDefinition[];
    level?: number;
    listItem?: ListItem;
}

export type Definisjoner = { [s: string]: string };

export type StrukturertTekst = Avsnitt[];
