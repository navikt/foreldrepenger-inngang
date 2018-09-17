import  * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import translate from '../../utils/translate';

import "./Foreldrekalkulator.less";

const cls = BEMHelper('foreldrekalkulator');

interface Props {
    location: any;
}

const Kalkulator: React.StatelessComponent<Props> = ({ location }) => {
  return (
      <div className={cls.className}>
          <div className={cls.element('header')}>
              <TypografiBase type="systemtittel">
                  {translate("foreldrepenger_Header")}
              </TypografiBase>
          </div>
          <div className={cls.element('content')}>
              <Breadcrumbs path={location.pathname}/>
          </div>
      </div>

  );
};

export default Kalkulator;