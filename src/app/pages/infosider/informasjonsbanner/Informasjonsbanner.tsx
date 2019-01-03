import * as React from 'react';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';
import { Avsnitt, Definisjoner } from 'app/utils/strukturertTekst';
import BEMHelper from 'app/utils/bem';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import './informasjonsbanner.less';

const cls = BEMHelper('informasjonsbanner');

interface Props {
    tekst: Avsnitt[];
    definisjoner?: Definisjoner;
}

const Informasjonsbanner = ({ tekst, definisjoner }: Props) => (
    <AlertStripeInfo className={cls.className}>
        <StrukturertTekst tekst={tekst} definisjoner={definisjoner} />
    </AlertStripeInfo>
);

export default Informasjonsbanner;
