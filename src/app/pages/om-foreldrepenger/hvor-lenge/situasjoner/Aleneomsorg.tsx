import * as React from 'react';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { Language, withIntl, getTranslation } from '../../../../intl/intl';
import { getContent } from '../../../../utils/getContent';
import { Kvote } from 'app/utils/foreldresituasjon';
import { addAntallUkerSomSnakkebobletittel } from './utils';

const content = 'om-foreldrepenger/hvor-lenge/aleneomsorg/aleneomsorg';
const kalkulatorbeskrivelse = 'om-foreldrepenger/hvor-lenge/kalkulatorbeskrivelse';
const farsDel = 'om-foreldrepenger/hvor-lenge/aleneomsorg/fars-del';
const morsDel = 'om-foreldrepenger/hvor-lenge/aleneomsorg/mors-del';

const DEFAULT_TAB: Kvote = 'mødrekvote';

const getInformasjonsfaner = (lang: Language): InformasjonsfaneProps[] => [
    {
        kvote: DEFAULT_TAB,
        label: getTranslation(`om_foreldrepenger.hvor_lenge.fordeling.${DEFAULT_TAB}`, lang),
        innhold: {
            snakkeboble: {
                tittel: 'til mor',
                icon: 'medmor1',
                punkter: [
                    getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.i_tillegg_til_foreldrepenger',
                        lang
                    ),
                    getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.default', lang)
                ]
            },
            component: <StrukturertTekst tekst={getContent(morsDel, lang)} />
        }
    },
    {
        kvote: 'fedrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.alenefar', lang),
        innhold: {
            snakkeboble: {
                tittel: 'til far',
                icon: 'far1',
                punkter: [
                    getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.som_far', lang)
                ]
            },
            component: <StrukturertTekst tekst={getContent(farsDel, lang)} />
        }
    }
];

interface Props {
    lang: Language;
    onKvoteSelected: (kvote: Kvote) => void;
}

class Aleneomsorg extends React.Component<Props> {
    componentWillMount = () => {
        this.props.onKvoteSelected(DEFAULT_TAB);
    };

    render = () => (
        <div>
            <StrukturertTekst tekst={getContent(content, this.props.lang)} />
            <Informasjonsfaner
                tabs={getInformasjonsfaner(this.props.lang).map(
                    addAntallUkerSomSnakkebobletittel('aleneomsorg', this.props.lang)
                )}
                onTabSelected={this.props.onKvoteSelected}
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
