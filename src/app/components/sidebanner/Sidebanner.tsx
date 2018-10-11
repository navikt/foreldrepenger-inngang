import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../utils/bem';
import './sidebanner.less';

const cls = BEMHelper('sidebanner');

const Sidebanner = ({ text }: { text: string }) => {
    return (
        <header className={cls.className}>
            <TypografiBase type="sidetittel">{text}</TypografiBase>
        </header>
    );
};

export default Sidebanner;
