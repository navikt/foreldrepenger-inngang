import React, { ReactNode } from 'react';
import BEMHelper from '../../../../utils/bem';
// import TypografiBase from 'nav-frontend-typografi';
import CustomSVG from '../../../../utils/CustomSVG';

const cls = BEMHelper('InformasjonsfanerBody');

interface Props {
    tittel: string;
    icon: string;
    punktliste: string[];
    component: ReactNode;
}

const InformasjonsFanerBody: React.StatelessComponent<Props> = ({
    tittel,
    icon,
    punktliste,
    component
}) => {
    const svg = require(`../../../../assets/foreldre/${icon}.svg`).default;
    return (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <div className={cls.element('tid')}>
                    <div className={cls.element('antallUker')}>15</div>
                    <div className={cls.element('uker')}>uker</div>
                </div>
                <div className={cls.element('Icon')}>
                    <CustomSVG className="Icon__svg" iconRef={svg} size={42} />
                    <div className={cls.element('label')}>{tittel}</div>
                </div>

                <ul className={cls.element('liste')}>
                    {punktliste.map((punkt) => {
                        return <li key={punkt}>{punkt}</li>;
                    })}
                </ul>
            </div>
            <div className={cls.element('bodyTxt')}>{component}</div>
        </div>
    );
};

export default InformasjonsFanerBody;
