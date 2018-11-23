import React from 'react';
import { getTranslation, IntlProps, withIntl } from '../../../../../intl/intl';
import { FlexibleSvg } from '../../../../../utils/CustomSVG';
import TypografiBase from 'nav-frontend-typografi';
import NavFrontendChevron from 'nav-frontend-chevron';
import BEMHelper from '../../../../../utils/bem';
const cls = BEMHelper('valg');

const NavigasjonsBoks: React.StatelessComponent<IntlProps> = ({ lang }) => {
    return (
        <div className={cls.element('navigasjonsboks')}>
            <div className={cls.element('boks-border')}>
                <div className={cls.element('boks')} role="button">
                    <div className={cls.element('boks-gruppe')}>
                        <div className={cls.element('boks-bilde')}>
                            <FlexibleSvg
                                iconRef={require('../../../../../assets/ark/ark-money2.svg').default}
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className={cls.element('boks-txt')}>
                            <TypografiBase type="normaltekst">
                                {getTranslation('veiviser.navgigasjonsboks.kalk.label', lang)}
                            </TypografiBase>
                        </div>
                    </div>
                    <NavFrontendChevron />
                </div>
            </div>
            <div className={cls.element('boks-border sec')}>
                <div className={cls.element('boks')} role="button">
                    <div className={cls.element('boks-gruppe')}>
                        <div className={cls.element('boks-bilde')}>
                            <FlexibleSvg
                                iconRef={require('../../../../../assets/ark/ark-calendar.svg').default}
                                width={60}
                                height={60}
                            />
                        </div>
                        <div className={cls.element('boks-txt')}>
                            <TypografiBase type="normaltekst">
                                {getTranslation('veiviser.navigasjonsboks.planlegg.label', lang)}
                            </TypografiBase>
                        </div>
                    </div>
                    <NavFrontendChevron />
                </div>
            </div>
        </div>
    );
};

export default withIntl(NavigasjonsBoks);
