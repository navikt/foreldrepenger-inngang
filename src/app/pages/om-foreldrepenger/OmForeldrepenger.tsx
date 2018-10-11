import * as React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import { getTranslation, IntlProps, withIntl } from '../../intl/intl';
import HvaErForeldrepenger from './hva-er-foreldrepenger/HvaErForeldrepenger';
import NyeRegler from './nye-regler/NyeRegler';
import ForÅFåForeldrepenger from './for-å-få-foreldrepenger/ForÅFåForeldrepenger';
import JegHarHattInntekt from './jeg-har-hatt-inntekt/JegHarHattInntekt';
import JegVilJobbe from './jeg-vil-jobbe/JegVilJobbe';
import Sykdom from './sykdom/Sykdom';
import Ferie from './ferie/Ferie';
import Adopsjon from './adopsjon/Adopsjon';
import './omForeldrepenger.less';
import Arbeidsgiver from './arbeidsgiver/Arbeidsgiver';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import Beregning from './beregning/Beregning';

const cls = BEMHelper('infosider');

interface Props {
    location: any;
}

const sections = [
    'for-å-få-foreldrepenger',
    'hvor-lenge-kan-jeg-få-foreldrepenger',
    'ferie',
    'jeg-vil-jobbe',
    'sykdom',
    'hjemme-samtidig',
    'jeg-har-hatt-inntekt',
    'hva-kan-jeg-fa',
    'adopsjon',
    'arbeidsgiver-og-deg'
];

const OmForeldrepenger: React.StatelessComponent<Props & IntlProps> = ({ location, lang }) => {
    return (
        <div className={cls.className}>
            <Sidebanner text={getTranslation('om_foreldrepenger.tittel', lang)} />
            <main className={cls.element('body')}>
                <article className={cls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    {/* <Hurtiglenker links={sections} /> */}
                    <ForÅFåForeldrepenger id={sections[0]} />
                    <NyeRegler />
                    <HvaErForeldrepenger id={sections[1]} />
                    <Ferie id={sections[2]} />
                    <JegVilJobbe id={sections[3]} />
                    <Sykdom id={sections[4]} />
                    {/* <HjemmeSamtidig id={sections[5]} /> */}
                    <JegHarHattInntekt id={sections[6]} />
                    <Beregning id={sections[7]} />
                    <Adopsjon id={sections[8]} />
                    <Arbeidsgiver id={sections[9]} />
                </article>
            </main>
        </div>
    );
};

export default withIntl(OmForeldrepenger);
