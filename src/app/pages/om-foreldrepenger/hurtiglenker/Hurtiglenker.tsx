import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import PanelBase from 'nav-frontend-paneler';
import TypografiBase from 'nav-frontend-typografi';
import WithLink from '../../../components/with-link/WithLink';
import './hurtiglenker.less';

const cls = BEMHelper('hurtiglenker');

interface OwnProps {
    links: string[];
}

type Props = OwnProps & InjectedIntlProps;

const Hurtiglenker = ({ links, intl }: Props) => (
    <PanelBase className={cls.className}>
        {links.map((link) => {
            const stringToTranslate = link.replace(new RegExp('-', 'g'), '_');

            return (
                <TypografiBase key={link} type="normaltekst">
                    <WithLink className={cls.element('lenke')} url={`#${link}`}>
                        {getTranslation(`hurtiglenke.${stringToTranslate}`, intl)}
                    </WithLink>
                </TypografiBase>
            );
        })}
    </PanelBase>
);

export default injectIntl(Hurtiglenker);
