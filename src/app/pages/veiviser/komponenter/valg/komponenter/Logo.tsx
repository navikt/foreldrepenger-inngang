import React from 'react';
import { withIntl } from '../../../../../intl/intl';
import BEMHelper from '../../../../../utils/bem';
import ResultatBilde from "./ResultatBilde";
import MediaQuery from "react-responsive";
import ResultatMobileBilde from "./ResultatMobileBilde";

const cls = BEMHelper('valg');

const Logo = () => {
    return (
        <div className={cls.element('resultat--stonad-bilde')}>
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
