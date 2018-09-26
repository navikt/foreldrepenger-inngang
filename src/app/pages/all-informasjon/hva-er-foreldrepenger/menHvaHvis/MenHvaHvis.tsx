import * as React from 'react';
import BEMHelper from '../../../../utils/bem';
import translate from '../../../../utils/translate';
import TypografiBase from 'nav-frontend-typografi';
import NoenVilPaFerie from './NoenVilPaFerie';
import JegVilJobbe from './JegVilJobbe';
import EnAvOssBlirSyk from './EnAvOssBlirSyk';
import HjemmeSamtidig from './HjemmeSamtidig';

import './MenHvaHvis.less';

const cls = BEMHelper('menHvaHvis');

const MenHvaHvis = () => {
    return (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <TypografiBase type="element">
                {translate('menHvaHvis')}
                </TypografiBase>
            </div>
            <div className={cls.element('body')}>
                <NoenVilPaFerie />
                <JegVilJobbe />
                <EnAvOssBlirSyk />
                <HjemmeSamtidig />
            </div>
        </div>
    );
};

export default MenHvaHvis;
