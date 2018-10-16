import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import { getTranslation, IntlProps, withIntl, Language } from '../../intl/intl';
import BEMHelper from '../../utils/bem';
import { withRouter } from 'react-router';
import './blindside.less';
import { VenstreChevron } from 'nav-frontend-chevron';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import Veileder from 'app/components/veileder/Veileder';

const cls = BEMHelper('blindside');

interface Props {
    history: any;
}

const Blindside: React.StatelessComponent<Props & IntlProps> = ({ history, lang }) => {
    return (
        <div className={cls.className}>
            <Sidebanner text={getTranslation('blindside.tittel', lang)} />
            <main className={cls.element('body')}>
                <Tilbakeknapp goBack={history.goBack} />
                <Veileder ansikt="glad">
                    <TypografiBase type="normaltekst">
                        {getTranslation('blindside.veileder', lang)}
                    </TypografiBase>
                </Veileder>
            </main>
        </div>
    );
};

const Tilbakeknapp = withIntl(({ goBack, lang }: { goBack: any; lang: Language }) => {
    return (
        <div
            tabIndex={0}
            className={cls.element('tilbake')}
            onClick={() => {
                goBack();
            }}>
            <VenstreChevron />
            <TypografiBase type="element">{getTranslation('tilbake', lang)}</TypografiBase>
        </div>
    );
});

export default withRouter(withIntl(Blindside));
