import * as React from 'react';
import PanelBase from 'nav-frontend-paneler';
import BEMHelper from '../../../utils/bem';
import { getTranslation } from '../../../intl/intl';
import './hurtiglenker.less';
import TypografiBase from 'nav-frontend-typografi';
import { WithLink } from '../../../utils/withLink';

const cls = BEMHelper('hurtiglenker');

const Hurtiglenker = ({ links }: { links: string[] }) => {
    return (
        <PanelBase className={cls.className}>
            {links.map((link) => {
                const stringToTranslate = link.replace(new RegExp('-', 'g'), '_');

                return (
                    <TypografiBase key={link} type="normaltekst">
                        <WithLink className={cls.element('lenke')} url={`#${link}`}>
                            {getTranslation(`hurtiglenke.${stringToTranslate}`)}
                        </WithLink>
                    </TypografiBase>
                );
            })}
        </PanelBase>
    );
};

export default Hurtiglenker;
