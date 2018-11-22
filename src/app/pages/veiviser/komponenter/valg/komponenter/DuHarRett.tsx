import React from 'react';
import { getTranslation, IntlProps, withIntl } from '../../../../../intl/intl';
import TypografiBase from 'nav-frontend-typografi';
import KnappBase from 'nav-frontend-knapper';
import BEMHelper from '../../../../../utils/bem';
import Logo from './Logo';
import ResultatPunkt from './ResultatPunkt';
const cls = BEMHelper('valg');

interface Props {
    overskrift: string;
    punkt1: boolean;
    punkt2: boolean;
    punkt3: boolean;
}

const DuHarRett: React.StatelessComponent<Props & IntlProps> = ({
    lang,
    overskrift,
    punkt1,
    punkt2,
    punkt3
}) => {
    const tegn1 = punkt1 ? 'godkjenttegn' : 'varseltegn';
    const tegn2 = punkt3 ? 'godkjenttegn' : 'varseltegn';
    const tegn3 = punkt3 ? 'godkjenttegn' : 'varseltegn';
    return (
        <div className={cls.element('resultat--stonad-rett')}>
            <Logo />
            <div className={cls.element('resultat-stonad-body')}>
                <TypografiBase type="innholdstittel">
                    {getTranslation(overskrift, lang)}
                </TypografiBase>
                <ResultatPunkt
                    lang={lang}
                    translationString={
                        punkt1
                            ? 'veiviser.valg.resultat.punkt.forste.godkjent'
                            : 'veiviser.valg.resultat.punkt.forste.underkjent'
                    }
                    tegn={tegn1}
                />
                <ResultatPunkt
                    lang={lang}
                    translationString={
                        punkt2
                            ? 'veiviser.valg.resultat.punkt.andre.godkjent'
                            : 'veiviser.valg.resultat.punkt.andre.underkjent'
                    }
                    tegn={tegn2}
                />
                <ResultatPunkt
                    lang={lang}
                    translationString={
                        punkt3
                            ? 'veiviser.valg.resultat.punkt.tredje.godkjent'
                            : 'veiviser.valg.resultat.punkt.tredje.underkjent'
                    }
                    tegn={tegn3}
                />
                <div className={cls.element('resultat-har-rett-knapp')}>
                    <KnappBase type="hoved">{getTranslation("veiviser.valg.resultat.knapp.foreldrepenger", lang)}</KnappBase>
                </div>
            </div>
        </div>
    );
};

export default withIntl(DuHarRett);
