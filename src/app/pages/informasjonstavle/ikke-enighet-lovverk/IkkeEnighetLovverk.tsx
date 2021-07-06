import React from 'react';
import Icon from 'nav-frontend-ikoner-assets';
import BEMHelper from 'app/utils/bem';
import { Normaltekst, Element } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';

import './ikkeEnighetLovverk.less';

const bem = BEMHelper('ikkeEnighetLovverk');

const IkkeEnighetLovverk = () => {
    return (
        <div className={bem.block}>
            <Ekspanderbartpanel
                tittel={
                    <div className={bem.element('tittel')}>
                        <Icon kind="info-sirkel-fyll" style={{ paddingRight: '1rem' }} />
                        <div className={bem.element('tittelTekst')}>
                            Sivilombudet har uttalt seg om hvordan NAV behandler foreldrepenger
                        </div>
                    </div>
                }
            >
                <div className={bem.element('textPadding')}>
                    <Normaltekst>
                        NAV har mottatt en uttalelse fra Sivilombudet, der det framgår at de ikke er enige i hvordan
                        lovverket som gjelder uttak av foreldrepenger praktiseres. Vi vil nå sette oss inn i uttalelsen
                        og se den i sammenheng med lovverket på foreldrepenger. Vi har forståelse for at dette er en
                        viktig sak for mange foreldre.
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Normaltekst>NAV vil besvare Sivilombudets henvendelse innen 31. august 2021.</Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Normaltekst>
                        For oppdatert informasjon om foreldrepenger og fedrekvote, se{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger"
                        >
                            familie.nav.no/om-foreldrepenger
                        </Lenke>
                    </Normaltekst>
                </div>
            </Ekspanderbartpanel>
        </div>
    );
};

export default IkkeEnighetLovverk;
