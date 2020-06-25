import React from 'react';
import { useIntl } from 'react-intl';
import BEMHelper from '../../../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import TypografiBase from 'nav-frontend-typografi';

const resultat = BEMHelper('resultat');

interface OwnProps {
    minLogo: React.ReactNode;
    overskrift: string;
    punkter: React.ReactNode[];
    knapp: React.ReactNode;
}

type Props = OwnProps;

const DuHarRett: React.StatelessComponent<Props> = ({ minLogo, overskrift, punkter, knapp }) => {
    const intl = useIntl();

    return (
        <div id="mainSokKnapp" className={resultat.element('stonadRett')}>
            {minLogo}
            <div className={resultat.element('stonadBody')}>
                <div className={resultat.element('stonadTxt')}>
                    <TypografiBase type="innholdstittel">{getTranslation(overskrift, intl)}</TypografiBase>
                    {punkter.map((punkt: any, index: number) => {
                        return <div key={index}>{punkt}</div>;
                    })}
                </div>
                {knapp}
            </div>
        </div>
    );
};

export default DuHarRett;
