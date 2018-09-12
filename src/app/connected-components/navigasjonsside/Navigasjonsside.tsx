import * as React from 'react';
//import TypografiBase from 'nav-frontend-typografi';

import BEMHelper from '../../utils/bem';


/*
const dirRoute = [
    {
        label: 'foreldrepenger-navigasjon',
        url: 'Navigasjonsside.tsx'
    }

];
*/

const BEMname = BEMHelper('navigation-page');

const Navigasjonsside = () => {

    return (

        <div className={BEMname.className}>

              <div className={BEMname.element('header')}>
                  {/*  <navigationBanner BEMname={BEMname} /> */}
              </div>

            <div className={BEMname.element('main')}>
                {/*
                <navigasjonskort svgfile=""

                */}

            </div>

        </div>

    );
};

export default Navigasjonsside;