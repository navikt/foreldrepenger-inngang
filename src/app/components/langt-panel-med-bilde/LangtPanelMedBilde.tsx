import * as React from 'react';
import { HoyreChevron } from 'nav-frontend-chevron';
import { Undertittel, Normaltekst } from 'nav-frontend-typografi';
import BEMHelper from 'app/utils/bem';
import classnames from 'classnames';
import CustomSvg, { IconRef } from 'app/utils/CustomSVG';
import MediaQuery from 'react-responsive';
import WithLink from 'app/components/with-link/WithLink';
import './langtPanelMedBilde.less';

const cls = BEMHelper('langtPanelMedBilde');

interface Props {
    svg: IconRef;
    url: string;
    title: string;
    body: string;
}

const LangtPanelMedBilde: React.FunctionComponent<Props> = ({ svg, url, title, body }) => (
    <WithLink url={url} noStyling={true} className={classnames(cls.block)}>
        <MediaQuery minWidth={576}>
            <Desktopversjon svg={svg} title={title} body={body} />
        </MediaQuery>
        <MediaQuery maxWidth={575}>
            <Mobilversjon svg={svg} title={title} body={body} />
        </MediaQuery>
        <div className={cls.element('chevron')}>
            <HoyreChevron />
        </div>
    </WithLink>
);

const Mobilversjon = ({ svg: _svg, title, body }: { svg: IconRef; title: string; body: string }) => (
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
