import * as React from 'react';
import PanelMedIllustrasjon from '../panel-med-illustrasjon/PanelMedIllustrasjon';
import translate from '../../../utils/translate';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import BEMHelper from '../../../utils/bem';

const pageSvg = require('../../../assets/page.svg').default;
const content = require('../../../../content/all-informasjon/arbeidsgiver/arbeidsgiver.json');

import './arbeidsgiver.less';

import Lenke from './Lenke';

const cls = BEMHelper('arbeidsgiver');

const Arbeidsgiver = ({ id }: { id: string }) => {
    return (
        <PanelMedIllustrasjon
            className={cls.className}
            id={id}
            title={translate('arbeidsgiver_tittel')}
            svg={pageSvg}>
            <StrukturertTekst tekst={content} />
            <div className={cls.element('links')}>
                <Lenke
                    href={'#'}
                    txt={"arbeid_skjema_for_inntektsopplysninger_link"}
                />
                <Lenke href={'#'} txt={''} />
            </div>
        </PanelMedIllustrasjon>
    );
};

export default Arbeidsgiver;
