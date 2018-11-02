import * as React from 'react';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps } from '../../intl/intl';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../utils/getContent';
import LesMer from '../../components/les-mer/LesMer';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';

// getTranslation strings
const viktigefristerTittel = 'viktige_frister.nar_kan_du_soke';
const hvisSokerSentTittel = 'viktige_frister.hva_hvis';
const sokefristKvoteTittel = 'viktige_frister.sokefrist_nar_utsette';
const sokefristFerieTittel = 'viktige_frister.sokefrist_nar_utsette_ferie';
const sokefristKombiTittel = 'viktige_frister.sokefrist_nar_kombinere_peng_arbeid';
const harInntektJobbTittel = 'viktige_frister.hvis_hatt_arbeidsinntekt_eller_jobb';
const dokPaTermindatoTittel = 'viktige_frister.du_skal_legge_dok_pa_termindato';

// getContent strings
const ingress = 'viktige-frister/husk-a-soke-rett-tid/ingress';
const viktigefristerInnhold = 'viktige-frister/husk-a-soke-rett-tid/nar-kan-du-soke';
const søkefristBareFarEllerMedmorHarRettInnhold =
    'viktige-frister/husk-a-soke-rett-tid/søkefrist-når-bare-far-eller-medmor-har-rett';
const hvisSokerSentInnhold = 'viktige-frister/husk-a-soke-rett-tid/hva-hvis-soker-for-sent';
const sokefristKvoteInnhold = 'viktige-frister/husk-a-soke-rett-tid/sokefrist-utsette-kvote';
const sokefristFerieInnhold = 'viktige-frister/husk-a-soke-rett-tid/sokefrist-utsette-ferie';
const sokefristKombiInnhold =
    'viktige-frister/husk-a-soke-rett-tid/sokefrist-nar-kombinere-peng-arbeid';
const dokPaTermindatoInnhold = 'viktige-frister/husk-a-soke-rett-tid/dok-på-termindato';
const ingressTo = 'viktige-frister/husk-a-soke-rett-tid/ingress-to';
const harInntektJobbInnhold =
    'viktige-frister/husk-a-soke-rett-tid/hvis-hatt-arbeidsinntekt-eller-jobb';
const ingressTre = 'viktige-frister/husk-a-soke-rett-tid/ingress-tre';

interface Props {
    location: any;
}

const infosiderCls = BEMHelper('infosider');
const pageSvg = require('./../../assets/ark/ark-viktige-frister.svg').default;

const ViktigeFrister: React.StatelessComponent<Props & IntlProps> = ({ location, lang }) => {
    return (
        <div className={infosiderCls.className}>
            <ViktigeFristerHeader />
            <Sidebanner text={getTranslation('viktige_frister.banner', lang)} />
            <div className={infosiderCls.element('body')}>
                <div className={infosiderCls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <PanelMedIllustrasjon
                        title={getTranslation('viktige_frister.header', lang)}
                        svg={pageSvg}>
                        <StrukturertTekst tekst={getContent(ingress, lang)} />

                        <LesMer intro={getTranslation(viktigefristerTittel, lang)}>
                            <StrukturertTekst tekst={getContent(viktigefristerInnhold, lang)} />
                        </LesMer>

                        <LesMer intro={getTranslation(hvisSokerSentTittel, lang)}>
                            <StrukturertTekst tekst={getContent(hvisSokerSentInnhold, lang)} />
                        </LesMer>

                        <LesMer intro={getTranslation(sokefristKvoteTittel, lang)}>
                            <StrukturertTekst tekst={getContent(sokefristKvoteInnhold, lang)} />
                        </LesMer>

                        <LesMer
                            intro={getTranslation(
                                'viktige_frister.søkefrist_bare_far_eller_medmor_har_rett',
                                lang
                            )}>
                            <StrukturertTekst
                                tekst={getContent(søkefristBareFarEllerMedmorHarRettInnhold, lang)}
                            />
                        </LesMer>

                        <LesMer intro={getTranslation(sokefristFerieTittel, lang)}>
                            <StrukturertTekst tekst={getContent(sokefristFerieInnhold, lang)} />
                        </LesMer>

                        <LesMer intro={getTranslation(sokefristKombiTittel, lang)}>
                            <StrukturertTekst tekst={getContent(sokefristKombiInnhold, lang)} />
                        </LesMer>

                        <StrukturertTekst tekst={getContent(ingressTo, lang)} />

                        <LesMer intro={getTranslation(harInntektJobbTittel, lang)}>
                            <StrukturertTekst tekst={getContent(harInntektJobbInnhold, lang)} />
                        </LesMer>

                        <StrukturertTekst tekst={getContent(ingressTre, lang)} />

                        <LesMer intro={getTranslation(dokPaTermindatoTittel, lang)}>
                            <StrukturertTekst tekst={getContent(dokPaTermindatoInnhold, lang)} />
                        </LesMer>
                    </PanelMedIllustrasjon>
                </div>
            </div>
        </div>
    );
};

const ViktigeFristerHeader = () => {
    return (
        <HeaderInformasjon
            title={'Viktige frister - www.nav.no'}
            siteDescription={'Viktige frister angående foreldrepenger'}
            propTitle={'nav.no Viktige-frister'}
            propDescription={'Viktige frister angående foreldrepenger'}
            siteUrl={'https://familie.nav.no/viktige-frister'}
        />
    );
};

export default withIntl(ViktigeFrister);
