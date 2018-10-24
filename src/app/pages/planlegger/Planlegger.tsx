import * as React from 'react';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import { withIntl, IntlProps, getTranslation } from 'app/intl/intl';
import Breadcrumbs from 'app/components/breadcrumbs/Breadcrumbs';
import KnappBase from 'nav-frontend-knapper';
import PanelMedTittel from 'app/components/panel-med-tittel/PanelMedTittel';
import BEMHelper from 'app/utils/bem';
import { WithLink } from 'app/utils/withLink';
import externalUrls from 'app/utils/externalUrls';

const cls = BEMHelper('infosider');

const Planlegger = ({ lang }: IntlProps) => {
    return (
        <div className={cls.className}>
            <Sidebanner text={getTranslation('planlegger.tittel', lang)} />
            <div className={cls.element('body')}>
                <div className={cls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <PanelMedTittel title={getTranslation('planlegger.beregning_tittel', lang)}>
                        <KnappBase type="hoved">
                            {getTranslation('planlegger.beregning_knapp')}
                        </KnappBase>
                    </PanelMedTittel>
                    <PanelMedTittel title={getTranslation('planlegger.planlegger_tittel', lang)}>
                        <WithLink
                            urlIsExternal={true}
                            noStyling={true}
                            bypassNavlab={true}
                            url={externalUrls.foreldrepengeplanlegger}>
                            <KnappBase type="hoved">
                                {getTranslation('planlegger.planlegger_knapp')}
                            </KnappBase>
                        </WithLink>
                    </PanelMedTittel>
                </div>
            </div>
        </div>
    );
};

export default withIntl(Planlegger);
