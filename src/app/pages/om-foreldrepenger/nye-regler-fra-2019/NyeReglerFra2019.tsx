import * as React from 'react';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';
import { getContent } from 'app/utils/getContent';
import { withIntl, Language } from 'app/intl/intl';
import BEMHelper from 'app/utils/bem';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import './nyeReglerFra2019.less';

const cls = BEMHelper('nyeReglerFra2019');

const NyeReglerFra2019 = ({ lang }: { lang: Language }) => (
    <AlertStripeInfo className={cls.className}>
        <StrukturertTekst tekst={getContent('om-foreldrepenger/nye-regler-fra-2019', lang)} />
    </AlertStripeInfo>
);

export default withIntl(NyeReglerFra2019);
