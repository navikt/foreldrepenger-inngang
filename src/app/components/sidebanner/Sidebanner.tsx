import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../utils/bem';
import translate from '../../utils/translate';
import './sidebanner.less';

const cls = BEMHelper('sidebanner');

const Sidebanner = ({ text }: { text: string }) => {
    return (
        <div role="header" className={cls.className}>
            <TypografiBase type="undertittel">
                {translate('all_informasjon_engangsstønad')}
            </TypografiBase>
        </div>
    );
};

export default Sidebanner;
