import * as React from 'react';
import PanelBase from 'nav-frontend-paneler';
import Lenke from 'nav-frontend-lenker';

import BEMHelper from '../../../utils/bem';
import { getTranslation } from '../../../intl/intl';

import './hurtiglenker.less';
import TypografiBase from 'nav-frontend-typografi';

const cls = BEMHelper('hurtiglenker');

const Hurtiglenker = ({ links }: { links: string[] }) => {
    return (
        <PanelBase className={cls.className}>
            {links.map((link) => {
                const stringToTranslate = link.replace(new RegExp('-', 'g'), '_');

                return (
                    <TypografiBase key={link} type="normaltekst">
                        <Lenke href={`#${link}`}>
                            {getTranslation(`hurtiglenke.${stringToTranslate}`)}
                        </Lenke>
                    </TypografiBase>
                );
            })}
        </PanelBase>
    );
};

export default Hurtiglenker;
