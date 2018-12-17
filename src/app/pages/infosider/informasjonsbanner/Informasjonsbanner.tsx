import * as React from 'react';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';
import { withIntl } from 'app/intl/intl';
import BEMHelper from 'app/utils/bem';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import './informasjonsbanner.less';
import { Avsnitt } from 'app/utils/strukturertTekst';

const cls = BEMHelper('informasjonsbanner');

interface Props {
    tekst: Avsnitt[];
}

const Informasjonsbanner = ({ tekst }: Props) => (
    <AlertStripeInfo className={cls.className}>
        <StrukturertTekst tekst={tekst} />
    </AlertStripeInfo>
);

export default withIntl(Informasjonsbanner);
