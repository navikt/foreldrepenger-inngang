import React, { ReactNode } from 'react';
import BEMHelper from '../../../../utils/bem';
import CustomSVG from '../../../../utils/CustomSVG';
import Veileder from 'nav-frontend-veileder';
import TypografiBase from 'nav-frontend-typografi';

const cls = BEMHelper('InformasjonsfanerBody');

interface Props {
    tittel: string;
    icon: string | any;
    antallUker: string;
    punktliste: string[];
    component: ReactNode;
}

const InformasjonsfanerBody: React.StatelessComponent<Props> = ({
    tittel,
    icon,
    antallUker,
    punktliste,
    component
}) => {
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
                        />
                    }>
                    {svg ? <CustomSVG className="Icon__svg" iconRef={svg} size={72} /> : icon}
                </Veileder>
            </div>
            <div className={cls.element('bodyTxt')}>{component}</div>
        </div>
    );
};

const Snakkeboble = ({ tittel, punktliste }: { tittel: string; punktliste: string[] }) => (
    <div>
        <TypografiBase type="element">{tittel}</TypografiBase>
        <ul className={cls.element('liste')}>
            {punktliste.map((punkt) => {
                return <li key={punkt}>{punkt}</li>;
            })}
        </ul>
    </div>
);

export default InformasjonsfanerBody;
