import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { FlexibleSvg } from '../../../../../utils/CustomSVG';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
const resultat = BEMHelper('resultat');

interface OwnProps {
    tegn: string;
    translationString: string;
}

type Props = OwnProps & InjectedIntlProps;

const ResultatPunkt: React.StatelessComponent<Props> = ({ tegn, translationString, intl }) => {
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
                    {getTranslation(translationString, intl)}
                </TypografiBase>
            </span>
        </div>
    );
};

export default injectIntl(ResultatPunkt);
