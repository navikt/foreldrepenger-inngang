import React from 'react';
import { withIntl } from '../../../../../intl/intl';
import BEMHelper from '../../../../../utils/bem';
import ResultatBilde from "./ResultatBilde";
const cls = BEMHelper('valg');

const Logo = ({width, height}: {width: string, height: string}) => {
    return (
        <div className={cls.element('resultat--stonad-bilde')}>
      <ResultatBilde width={width} height={height}/>
        </div>
    );
};

export default withIntl(Logo);
