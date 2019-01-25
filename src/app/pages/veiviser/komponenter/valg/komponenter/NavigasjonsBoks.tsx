import React from 'react';
import { FlexibleSvg } from '../../../../../utils/CustomSVG';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import NavFrontendChevron from 'nav-frontend-chevron';
import TypografiBase from 'nav-frontend-typografi';
import WithLink from '../../../../../components/with-link/WithLink';
const cls = BEMHelper('valg');

const NavigasjonsBoks: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return (
        <div className={cls.element('navigasjonsboks')}>
            <div className={cls.element('boksBorder')}>
                <WithLink
                    url={'/hvor-mye'}
                    noStyling={true}
                    urlIsExternal={false}
                    className={cls.element('navigasjonsboks')}
                    ariaLabel={getTranslation(
                        'veiviser.valg.resultat.navigasjonsboks.hvormye.ariaLabel',
                        intl
                    )}>
                    <div className={cls.element('boks')}>
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
                </WithLink>
            </div>
            <div className={cls.element('boksBorder sec')}>
                <WithLink
                    url={'https://tjenester.nav.no/foreldrepengeplanlegger'}
                    noStyling={true}
                    urlIsExternal={true}
                    className={cls.element('navigasjonsboks')}
                    aria-label={getTranslation(
                        'veiviser.valg.resultat.navigasjonsboks.hvorlenge.ariaLabel',
                        intl
                    )}>
                    <div className={cls.element('boks')}>
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
                </WithLink>
            </div>
        </div>
    );
};

export default injectIntl(NavigasjonsBoks);
