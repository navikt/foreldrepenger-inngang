import * as React from 'react';
import { WithLink } from 'app/utils/withLink';
import BEMHelper from 'app/utils/bem';
import { Undertittel, Normaltekst } from 'nav-frontend-typografi';
import CustomSvg, { IconRef } from 'app/utils/CustomSVG';
import { HoyreChevron } from 'nav-frontend-chevron';
import Panel from 'nav-frontend-paneler';
import './langtPanelMedBilde.less';
import MediaQuery from 'react-responsive';

const cls = BEMHelper('langtPanelMedBilde');

interface Props {
    svg: IconRef;
    url: string;
    title: string;
    body: string;
}

const LangtPanelMedBilde: React.StatelessComponent<Props> = ({ svg, url, title, body }) => (
    <WithLink url={url} noStyling={true}>
        <Panel className={cls.className}>
            <MediaQuery minWidth={576}>
                <Desktopversjon svg={svg} title={title} body={body} />
            </MediaQuery>
            <MediaQuery maxWidth={575}>
                <Mobilversjon svg={svg} title={title} body={body} />
            </MediaQuery>
            <div className={cls.element('chevron')}>
                <HoyreChevron />
            </div>
        </Panel>
    </WithLink>
);

const Mobilversjon = ({ svg, title, body }: { svg: IconRef; title: string; body: string }) => (
    <div className={cls.element('flexColumn')}>
        <div className={cls.element('leftAlign')}>
            <Undertittel>{title}</Undertittel>
        </div>
        <Normaltekst>{body}</Normaltekst>
    </div>
);

const Desktopversjon = ({ svg, title, body }: { svg: IconRef; title: string; body: string }) => (
    <div className={cls.element('leftAlign')}>
        <CustomSvg iconRef={svg} size={56} />
        <div>
            <Undertittel>{title}</Undertittel>
            <Normaltekst>{body}</Normaltekst>
        </div>
    </div>
);

export default LangtPanelMedBilde;
