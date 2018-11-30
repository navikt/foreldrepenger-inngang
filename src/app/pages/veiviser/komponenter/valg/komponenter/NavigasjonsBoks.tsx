import React from 'react';
import { getTranslation, Language, withIntl } from '../../../../../intl/intl';
import { FlexibleSvg } from '../../../../../utils/CustomSVG';
import TypografiBase from 'nav-frontend-typografi';
import NavFrontendChevron from 'nav-frontend-chevron';
import BEMHelper from '../../../../../utils/bem';
import Lenke from 'nav-frontend-lenker';
const cls = BEMHelper('valg');

interface Props {
    lang: Language;
}

const NavigasjonsBoks: React.StatelessComponent<Props> = ({ lang }) => {
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
                                    {getTranslation('veiviser.navgigasjonsboks.kalk.label', lang)}
                                </TypografiBase>
                                <TypografiBase type="normaltekst">
                                    {getTranslation(
                                        'veiviser.navgigasjonsboks.kalk.sublabel',
                                        lang
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
                                        lang
                                    )}
                                </TypografiBase>
                                <TypografiBase type="normaltekst">
                                    {getTranslation(
                                        'veiviser.navigasjonsboks.planlegg.sublabel',
                                        lang
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

export default withIntl(NavigasjonsBoks);
