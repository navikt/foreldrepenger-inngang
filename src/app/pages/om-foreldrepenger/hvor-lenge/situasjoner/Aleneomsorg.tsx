import * as React from 'react';
import Informasjonsfaner from '../informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { Language, withIntl, getTranslation } from '../../../../intl/intl';
import { getContent } from '../../../../utils/getContent';

const content = 'om-foreldrepenger/hvor-lenge/aleneomsorg/aleneomsorg';
const kalkulatorbeskrivelse = 'om-foreldrepenger/hvor-lenge/kalkulatorbeskrivelse';
const farsDel = 'om-foreldrepenger/hvor-lenge/aleneomsorg/fars-del';
const morsDel = 'om-foreldrepenger/hvor-lenge/aleneomsorg/mors-del';

const DEFAULT_TAB = 'alenemor';

const getInformasjonsfaner = (lang: Language) => [
    {
        value: DEFAULT_TAB,
        label: getTranslation(`om_foreldrepenger.hvor_lenge.fordeling.${DEFAULT_TAB}`, lang),
        icon: true,
        body: {
            tittel: 'til mor',
            icon: 'medmor1',
            antallUker: '49/59',
            punktliste: [
                getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.default', lang)
            ],
            component: <StrukturertTekst tekst={getContent(morsDel, lang)} />
        }
    },
    {
        value: 'alenefar',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.alenefar', lang),
        icon: true,
        body: {
            tittel: 'til far',
            icon: 'far1',
            antallUker: '46/56',
            punktliste: [
                getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.som_far', lang)
            ],
            component: <StrukturertTekst tekst={getContent(farsDel, lang)} />
        }
    }
];

interface Props {
    lang: Language;
    onUndersituasjonSelected: (undersituasjon: string) => void;
}

class Aleneomsorg extends React.Component<Props> {
    componentWillMount = () => {
        this.props.onUndersituasjonSelected(DEFAULT_TAB);
    };

    render = () => (
        <div>
            <StrukturertTekst tekst={getContent(content, this.props.lang)} />
            <Informasjonsfaner
                tabs={getInformasjonsfaner(this.props.lang)}
                onTabSelected={this.props.onUndersituasjonSelected}
                title={getTranslation(
                    'om_foreldrepenger.hvor_lenge.fordeling.tittel_alene',
                    this.props.lang
                )}
            />
            <StrukturertTekst tekst={getContent(kalkulatorbeskrivelse, this.props.lang)} />
        </div>
    );
}

export default withIntl(Aleneomsorg);
