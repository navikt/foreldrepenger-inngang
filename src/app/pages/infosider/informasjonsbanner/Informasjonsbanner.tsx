import * as React from 'react';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';
import { Avsnitt } from 'app/utils/strukturertTekst';
import BEMHelper from 'app/utils/bem';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import './informasjonsbanner.less';

const cls = BEMHelper('informasjonsbanner');

interface Props {
    tekst: Avsnitt[];
}

const Informasjonsbanner = ({ tekst }: Props) => (
    <AlertStripeInfo className={cls.className}>
        <StrukturertTekst tekst={tekst} />
    </AlertStripeInfo>
);

export default Informasjonsbanner;
