import React, { ReactNode } from 'react';
import BEMHelper from '../../../../utils/bem';
import CustomSVG from '../../../../utils/CustomSVG';

const cls = BEMHelper('InformasjonsfanerBody');

interface Props {
    tittel: string;
    icon: string | any;
    antallUker: string;
    punktliste: string[];
    component: ReactNode;
}

const InformasjonsFanerBody: React.StatelessComponent<Props> = ({
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
            <div className={cls.element('header')}>
                <div className={cls.element('tid')}>
                    <div className={cls.element('antallUker')}>
                        {antallUker}
                    </div>
                    <div className={cls.element('uker')}>uker</div>
                </div>
                <div className={cls.element('Icon')}>
                    {svg ? (
                        <CustomSVG
                            className="Icon__svg"
                            iconRef={svg}
                            size={42}
                        />
                    ) : (
                        icon
                    )}
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
