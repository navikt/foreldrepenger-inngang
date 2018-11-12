import * as React from 'react';
import './tableOfContents.less';
import BEMHelper from 'app/utils/bem';
import { Panel } from 'nav-frontend-paneler';
import { Normaltekst } from 'nav-frontend-typografi';
import { WithLink } from 'app/utils/withLink';
import { getTranslation } from 'app/intl/intl';
import { Hovedknapp } from 'nav-frontend-knapper';

const cls = BEMHelper('tableOfContents');

interface Props {
    sections: string[];
}

class TableOfContents extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render = () => (
        <Panel className={cls.className}>
            {this.props.sections.map((section) => {
                const stringToTranslate = section.replace(new RegExp('-', 'g'), '_');

                return (
                    <Normaltekst className={cls.element('lenke')} key={section}>
                        <WithLink url={`#${section}`}>
                            {getTranslation(`hurtiglenke.${stringToTranslate}`)}
                        </WithLink>
                    </Normaltekst>
                );
            })}
            <WithLink url="/hva-soker-du/foreldrepenger" noStyling={true}>
                <Hovedknapp className={cls.element('søkNå')}>Søk nå</Hovedknapp>
            </WithLink>
        </Panel>
    );
}

export default TableOfContents;
