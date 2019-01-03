import React from 'react';
import { FlexibleSvg } from '../../../../../utils/CustomSVG';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import Lenke from 'nav-frontend-lenker';
import NavFrontendChevron from 'nav-frontend-chevron';
import TypografiBase from 'nav-frontend-typografi';
const cls = BEMHelper('valg');

const NavigasjonsBoks: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return (
        <div className={cls.element('navigasjonsboks')}>
            <div className={cls.element('boksBorder')}>
                <Lenke href={'/hvor-mye'}>
                    <div className={cls.element('boks')} role="button">
                        <div className={cls.element('boksGruppe')}>
                            <div className={cls.element('boksBilde')}>
                                <FlexibleSvg
                                    iconRef={
                                        require('../../../../../assets/ark/ark-money2.svg').default
                                    }
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <div className={cls.element('boksTxt')}>
                                <TypografiBase type="undertittel">
                                    {getTranslation('veiviser.navgigasjonsboks.kalk.label', intl)}
                                </TypografiBase>
                                <TypografiBase type="normaltekst">
                                    {getTranslation(
                                        'veiviser.navgigasjonsboks.kalk.sublabel',
                                        intl
                                    )}
                                </TypografiBase>
                            </div>
                        </div>
                        <NavFrontendChevron />
                    </div>
                </Lenke>
            </div>
            <div className={cls.element('boksBorder sec')}>
                <Lenke href={'https://tjenester.nav.no/foreldrepengeplanlegger'}>
                    <div className={cls.element('boks')} role="button">
                        <div className={cls.element('boksGruppe')}>
                            <div className={cls.element('boksBilde')}>
                                <FlexibleSvg
                                    iconRef={
                                        require('../../../../../assets/ark/ark-calendar.svg')
                                            .default
                                    }
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <div className={cls.element('boksTxt')}>
                                <TypografiBase type="undertittel">
                                    {getTranslation(
                                        'veiviser.navigasjonsboks.planlegg.label',
                                        intl
                                    )}
                                </TypografiBase>
                                <TypografiBase type="normaltekst">
                                    {getTranslation(
                                        'veiviser.navigasjonsboks.planlegg.sublabel',
                                        intl
                                    )}
                                </TypografiBase>
                            </div>
                        </div>
                        <NavFrontendChevron />
                    </div>
                </Lenke>
            </div>
        </div>
    );
};

export default injectIntl(NavigasjonsBoks);
