import * as React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import translate from '../../utils/translate';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import '../infosider.less';

const cls = BEMHelper('infosider');

interface Props {
    location: any;
}

const pageSvg = require('../../assets/page.svg').default;

const omEngangsstonad: React.StatelessComponent<Props> = ({ location }) => {
    return (
        <div className={cls.className}>
            <Sidebanner text={translate('all_informasjon_engangsstønad')} />
            <div className={cls.element('body')}>
                <div className={cls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <PanelMedIllustrasjon
                        title={translate('hva_er_engangsstønad')}
                        svg={pageSvg}>
                        <div>Placeholder</div>
                    </PanelMedIllustrasjon>
                </div>
            </div>
        </div>
    );
};

export default omEngangsstonad;
