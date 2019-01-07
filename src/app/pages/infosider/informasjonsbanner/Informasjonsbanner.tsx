import * as React from 'react';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';
import BEMHelper from 'app/utils/bem';
import Innhold from 'app/utils/innhold/Innhold';
import './informasjonsbanner.less';
import { ValueMap } from 'app/utils/innhold/Node';

const cls = BEMHelper('informasjonsbanner');

interface Props {
    source: string;
    values?: ValueMap;
}

const Informasjonsbanner = ({ source, values }: Props) => (
    <AlertStripeInfo className={cls.className}>
        <Innhold source={source} values={values} />
    </AlertStripeInfo>
);

export default Informasjonsbanner;
