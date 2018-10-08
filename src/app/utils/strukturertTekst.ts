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

export interface Tekstsnutt {
    type: TekstsnuttType;
    text: string;
    marks?: Array<MarkReference | Mark>;
}

export interface Avsnitt {
    type: AvsnittType;
    style: TypografiType;
    children: Array<Tekstsnutt>;
    markDefs: Array<MarkDefinition>;
    level: number;
    listItem: ListItem;
}

export type StrukturertTekst = Array<Avsnitt>;
