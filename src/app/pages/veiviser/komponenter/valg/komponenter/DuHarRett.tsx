import React from 'react';
import {getTranslation, Language, withIntl} from '../../../../../intl/intl';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../../../utils/bem';
const resultat = BEMHelper('resultat');

interface Props {
    minLogo: React.ReactNode;
    overskrift: string;
    punkter: React.ReactNode[];
    knapp: React.ReactNode;
}

interface CurrentLanguage {
    lang: Language;
}

const DuHarRett: React.StatelessComponent<Props & CurrentLanguage> = ({
    lang,
    minLogo,
    overskrift,
    punkter,
    knapp
}) => {
    return (
        <div id="mainSokKnapp" className={resultat.element('stonadRett')}>
            {minLogo}
            <div className={resultat.element('stonadBody')}>
                <div className={resultat.element('stonadTxt')}>
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
