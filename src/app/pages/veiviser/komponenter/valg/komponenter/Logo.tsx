import React from 'react';
import { injectIntl } from 'react-intl';
import BEMHelper from '../../../../../utils/bem';
import ResultatBilde from './ResultatBilde';
import MediaQuery from 'react-responsive';
import ResultatMobileBilde from './ResultatMobileBilde';

const resultat = BEMHelper('resultat');

const Logo = () => {
    return (
        <div className={resultat.element('stonadBilde')}>
            <MediaQuery minWidth={576}>
                <ResultatBilde />
            </MediaQuery>
            <MediaQuery maxWidth={575}>
                <ResultatMobileBilde />
            </MediaQuery>
        </div>
    );
};

export default injectIntl(Logo);
