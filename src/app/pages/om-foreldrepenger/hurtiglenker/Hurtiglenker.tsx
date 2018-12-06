import * as React from 'react';
import PanelBase from 'nav-frontend-paneler';
import BEMHelper from '../../../utils/bem';
import { getTranslation, withIntl, Language } from '../../../intl/intl';
import './hurtiglenker.less';
import TypografiBase from 'nav-frontend-typografi';
import WithLink from '../../../components/with-link/WithLink';

const cls = BEMHelper('hurtiglenker');

interface Props {
    links: string[];
    lang: Language;
}

const Hurtiglenker = ({ links, lang }: Props) => (
    <PanelBase className={cls.className}>
        {links.map((link) => {
            const stringToTranslate = link.replace(new RegExp('-', 'g'), '_');

            return (
                <TypografiBase key={link} type="normaltekst">
                    <WithLink className={cls.element('lenke')} url={`#${link}`}>
                        {getTranslation(`hurtiglenke.${stringToTranslate}`, lang)}
                    </WithLink>
                </TypografiBase>
            );
        })}
    </PanelBase>
);

export default withIntl(Hurtiglenker);
