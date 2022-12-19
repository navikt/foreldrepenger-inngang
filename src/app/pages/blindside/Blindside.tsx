// import * as React from 'react';
// import { useIntl } from 'react-intl';
// import { VenstreChevron } from 'nav-frontend-chevron';
// import { withRouter, RouteComponentProps } from 'react-router';
// import BEMHelper from '../../utils/bem';
// import getTranslation from 'app/utils/i18nUtils';
// import Sidebanner from '../../components/sidebanner/Sidebanner';
// import TypografiBase from 'nav-frontend-typografi';
// import Veileder from 'app/components/veileder/Veileder';
// import './blindside.less';

// const cls = BEMHelper('blindside');

// type Props = RouteComponentProps;

// const Blindside: React.StatelessComponent<Props> = ({ history }) => {
//     const intl = useIntl();

//     return (
//         <div className={cls.block}>
//             <Sidebanner text={getTranslation('blindside.tittel', intl)} />
//             <div role="main" className={cls.element('body')}>
//                 <Tilbakeknapp goBack={history.back} />
//                 <Veileder ansikt="glad">
//                     <TypografiBase type="normaltekst">{getTranslation('blindside.veileder', intl)}</TypografiBase>
//                 </Veileder>
//             </div>
//         </div>
//     );
// };

// const Tilbakeknapp = ({ goBack }: { goBack: any }) => {
//     const intl = useIntl();
//     return (
//         <div
//             tabIndex={0}
//             className={cls.element('tilbake')}
//             onClick={() => {
//                 goBack();
//             }}
//         >
//             <VenstreChevron />
//             <TypografiBase type="element">{getTranslation('tilbake', intl)}</TypografiBase>
//         </div>
//     );
// };

// export default withRouter(Blindside);
