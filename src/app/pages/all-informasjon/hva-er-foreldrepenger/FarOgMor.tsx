import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Kalkulator from './kalkulator/Kalkulator';

import translate from '../../../utils/translate';
// import BEMHelper from '../../../utils/bem';
// import Fane, { FaneType } from './fane/Fane';

const FarOgMor = () => {
    return (
        <div>
            <TypografiBase type="undertittel">
                {translate('lengde_på_foreldreperioden')}
            </TypografiBase>
            <TypografiBase type="normaltekst">
                {translate('lengde_på_foreldreperioden_body')}
            </TypografiBase>
            <Kalkulator />
        </div>
    );
};

export default FarOgMor;
