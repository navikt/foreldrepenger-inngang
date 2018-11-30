import React from 'react';
import { withIntl } from '../../../../../intl/intl';
import BEMHelper from '../../../../../utils/bem';
import ResultatBilde from "./ResultatBilde";
import MediaQuery from "react-responsive";
import ResultatMobileBilde from "./ResultatMobileBilde";

const resultat = BEMHelper('resultat');

const Logo = () => {
    return (
        <div className={resultat.element('stonadBilde')}>
            <MediaQuery minWidth={576}>
                <ResultatBilde/>
            </MediaQuery>
            <MediaQuery maxWidth={575}>
                <ResultatMobileBilde/>
            </MediaQuery>
        </div>
    );
};

export default withIntl(Logo);
