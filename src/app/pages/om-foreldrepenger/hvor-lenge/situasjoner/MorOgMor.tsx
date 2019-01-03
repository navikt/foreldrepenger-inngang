import * as React from 'react';
import { addAntallUkerSomSnakkebobletittel } from './utils';
import { getContent } from '../../../../utils/getContent';
import { injectIntl, InjectedIntl, InjectedIntlProps } from 'react-intl';
import Foreldrepar from '../../../../components/foreldrepar/Foreldrepar';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import getTranslation from 'app/utils/i18nUtils';

const content = 'om-foreldrepenger/hvor-lenge/mor-og-mor/mor-og-mor';
const kalkulatorbeskrivelse = 'om-foreldrepenger/hvor-lenge/kalkulatorbeskrivelse';
const morsDel = 'om-foreldrepenger/hvor-lenge/mor-og-mor/mors-del';
const medmorsDel = 'om-foreldrepenger/hvor-lenge/mor-og-mor/medmors-del';
const fellesDel = 'om-foreldrepenger/hvor-lenge/mor-og-mor/felles-del';

const getInformasjonsfaner = (intl: InjectedIntl): InformasjonsfaneProps[] => [
    {
        kvote: 'mødrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.mødrekvote', intl),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: 'mor2',
                punkter: [
                    getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.tre_uker_før_fødsel',
                        intl
                    ),
                    getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.krav.morOgMor_krav',
                        intl
                    )
                ]
            },
            component: <StrukturertTekst tekst={getContent(morsDel, intl)} />
        }
    },
    {
        kvote: 'fedrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.medmorkvote', intl),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: 'medmor2',
                punkter: [
                    getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.som_far', intl)
                ]
            },
            component: <StrukturertTekst tekst={getContent(medmorsDel, intl)} />
        }
    },
    {
        kvote: 'fellesperiode',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fellesperiode', intl),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: <Foreldrepar firstParent="mor2" secondParent="medmor2" variant={4} />,
                punkter: [
                    `${getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.krav.aktivitetskrav_til',
                        intl
                    )} mor`
                ]
            },
            component: <StrukturertTekst tekst={getContent(fellesDel, intl)} />
        }
    }
];

const MorOgMor = ({ intl }: InjectedIntlProps) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(content, intl)} />
            <Informasjonsfaner
                tabs={getInformasjonsfaner(intl).map(
                    addAntallUkerSomSnakkebobletittel('morOgMor', intl)
                )}
            />
            <StrukturertTekst tekst={getContent(kalkulatorbeskrivelse, intl)} />
        </div>
    );
};

export default injectIntl(MorOgMor);
