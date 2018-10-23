import React, { ReactNode } from 'react';
import BEMHelper from '../../../../utils/bem';
import CustomSVG from '../../../../utils/CustomSVG';
import Veileder from 'nav-frontend-veileder';
import TypografiBase from 'nav-frontend-typografi';
import { Language, getTranslation, withIntl, IntlProps } from 'app/intl/intl';

const cls = BEMHelper('informasjonsfanerBody');

interface Props {
    tittel: string;
    icon: string | any;
    antallUker: string;
    punktliste: string[];
    component: ReactNode;
}

const InformasjonsfanerBody = withIntl(
    ({ tittel, icon, antallUker, punktliste, component, lang }: Props & IntlProps) => {
        let svg;
        if (typeof icon === 'string') {
            svg = require(`../../../../assets/foreldre/${icon}.svg`).default;
        }

        return (
            <div className={cls.className}>
                <div style={{ display: 'flex' }}>
                    <Veileder
                        fargetema="normal"
                        posisjon="høyre"
                        storrelse="M"
                        tekst={
                            <Snakkeboble
                                tittel={`${antallUker} uker ${tittel}`}
                                punktliste={punktliste}
                                lang={lang}
                            />
                        }>
                        {svg ? <CustomSVG className="Icon__svg" iconRef={svg} size={72} /> : icon}
                    </Veileder>
                </div>
                <div className={cls.element('bodyTxt')}>{component}</div>
            </div>
        );
    }
);

const Snakkeboble = ({
    tittel,
    punktliste,
    lang
}: {
    tittel: string;
    punktliste: string[];
    lang: Language;
}) => (
    <div>
        <TypografiBase type="element">{tittel}</TypografiBase>
        <ul className={cls.element('liste')}>
            {punktliste.length > 0 ? (
                punktliste.map((punkt) => {
                    return <li key={punkt}>{punkt}</li>;
                })
            ) : (
                <li>
                    {getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.ingen_krav', lang)}
                </li>
            )}
        </ul>
    </div>
);

export default InformasjonsfanerBody;
