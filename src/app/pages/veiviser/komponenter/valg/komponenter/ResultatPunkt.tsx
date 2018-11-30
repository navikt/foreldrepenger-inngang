import React from 'react';
import {getTranslation, Language, withIntl} from '../../../../../intl/intl';
import { FlexibleSvg } from '../../../../../utils/CustomSVG';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../../../utils/bem';
const resultat = BEMHelper('resultat');

interface Props {
    tegn: string;
    lang: Language
    translationString: string;
}

const ResultatPunkt: React.StatelessComponent<Props> = ({
    tegn,
    translationString,
    lang
}) => {
    return (
        <div className={resultat.element('punkter')}>
            <span className={resultat.element('punkt')}>
                <FlexibleSvg
                    iconRef={require(`../../../../../assets/icons/${tegn}.svg`).default}
                    height={20}
                    width={20}
                />
            </span>
            <span>
                <TypografiBase type="normaltekst">
                    {getTranslation(translationString, lang)}
                </TypografiBase>
            </span>
        </div>
    );
};

export default withIntl(ResultatPunkt);
