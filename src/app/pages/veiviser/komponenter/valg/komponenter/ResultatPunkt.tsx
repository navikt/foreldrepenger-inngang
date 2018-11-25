import React from 'react';
import {getTranslation, Language, withIntl} from '../../../../../intl/intl';
import { FlexibleSvg } from '../../../../../utils/CustomSVG';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../../../utils/bem';
const cls = BEMHelper('valg');

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
        <div className={cls.element('resultat--punkter')}>
            <span className={cls.element('resultat--punkt')}>
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
