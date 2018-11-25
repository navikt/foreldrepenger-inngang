import React from 'react';
import { getTranslation, IntlProps, withIntl } from '../../../../../intl/intl';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../../../utils/bem';
const cls = BEMHelper('valg');

interface Props {
    minLogo: React.ReactNode;
    overskrift: string;
    punkter: React.ReactNode[];
    knapp: React.ReactNode;
}

const DuHarRett: React.StatelessComponent<Props & IntlProps> = ({
    lang,
    minLogo,
    overskrift,
    punkter,
    knapp
}) => {
    return (
        <div id="mainSokKnapp" className={cls.element('resultat--stonad-rett')}>
            {minLogo}
            <div className={cls.element('resultat-stonad-body')}>
                <div className={cls.element('resultat-stonad-txt')}>
                    <TypografiBase type="innholdstittel">
                        {getTranslation(overskrift, lang)}
                    </TypografiBase>
                    {punkter.map((punkt: any, index: number) => {
                        return <div key={index}>{punkt}</div>;
                    })}
                </div>
                {knapp}
            </div>
        </div>
    );
};

export default withIntl(DuHarRett);
