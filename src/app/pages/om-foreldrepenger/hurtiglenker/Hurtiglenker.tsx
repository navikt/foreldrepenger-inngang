import * as React from 'react';
import { useIntl } from 'react-intl';
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

type Props = OwnProps;

const Hurtiglenker = ({ links }: Props) => {
    const intl = useIntl();

    return (
        <PanelBase className={cls.block}>
            {links.map((link: string) => {
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
};

export default Hurtiglenker;
