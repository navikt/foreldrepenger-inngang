import * as React from 'react';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import { injectIntl, InjectedIntl, InjectedIntlProps } from 'react-intl';

import { Kvote } from 'app/utils/foreldresituasjon';
import { addAntallUkerSomSnakkebobletittel } from './utils';
import getTranslation from 'app/utils/i18nUtils';

const content = 'om-foreldrepenger/hvor-lenge/aleneomsorg/aleneomsorg';
const aleneomsorgBeskrivelse = 'om-foreldrepenger/hvor-lenge/aleneomsorg/aleneomsorg-beskrivelse';
const farsDel = 'om-foreldrepenger/hvor-lenge/aleneomsorg/fars-del';
const morsDel = 'om-foreldrepenger/hvor-lenge/aleneomsorg/mors-del';

const DEFAULT_TAB: Kvote = 'mødrekvote';

const getInformasjonsfaner = (intl: InjectedIntl): InformasjonsfaneProps[] => [
    {
        kvote: DEFAULT_TAB,
        label: getTranslation(`om_foreldrepenger.hvor_lenge.fordeling.alenemor`, intl),
        innhold: {
            snakkeboble: {
                tittel: 'til mor',
                icon: 'medmor1',
                punkter: [
                    getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.i_tillegg_til_foreldrepenger',
                        intl
                    ),
                    getTranslation('om_foreldrepenger.hvor_lenge.fordeling.ingen_krav', intl, {
                        subjekt: getTranslation('far', intl)
                    })
                ]
            },
            component: <Innhold source={getSource(morsDel, intl)} />
        }
    },
    {
        kvote: 'fedrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.alenefar', intl),
        innhold: {
            snakkeboble: {
                tittel: 'til far',
                icon: 'far1',
                punkter: [
                    getTranslation('om_foreldrepenger.hvor_lenge.fordeling.ingen_krav', intl, {
                        subjekt: getTranslation('mor', intl)
                    })
                ]
            },
            component: <Innhold source={getSource(farsDel, intl)} />
        }
    }
];

interface OwnProps {
    onKvoteSelected: (kvote: Kvote) => void;
}

type Props = OwnProps & InjectedIntlProps;

class Aleneomsorg extends React.Component<Props> {
    componentWillMount = () => {
        this.props.onKvoteSelected(DEFAULT_TAB);
    };

    render = () => (
        <div>
            <Innhold source={getSource(content, this.props.intl)} />
            <Informasjonsfaner
                tabs={getInformasjonsfaner(this.props.intl).map(
                    addAntallUkerSomSnakkebobletittel('aleneomsorg', this.props.intl)
                )}
                onTabSelected={this.props.onKvoteSelected}
                title={getTranslation(
                    'om_foreldrepenger.hvor_lenge.fordeling.tittel_alene',
                    this.props.intl
                )}
            />
            <Innhold source={getSource(aleneomsorgBeskrivelse, this.props.intl)} />
        </div>
    );
}

export default injectIntl(Aleneomsorg);
