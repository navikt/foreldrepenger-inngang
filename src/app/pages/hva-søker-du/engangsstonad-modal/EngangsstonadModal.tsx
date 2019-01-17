import BEMHelper from '../../../utils/bem';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import Modal from 'nav-frontend-modal';
import TypografiBase from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import Lukknapp from 'nav-frontend-lukknapp';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

import React from 'react';
import KnappBase from 'nav-frontend-knapper';
import './engangsstonad-modal.less';
import { FlexibleSvg } from '../../../utils/CustomSVG';
import WithLink from '../../../components/with-link/WithLink';
import getTranslation from 'app/utils/i18nUtils';

const cls = BEMHelper('engangs-modal-sokPapir');

interface OwnProps {
    modalIsOpen: boolean;
    linktxt: string;
}

type Props = OwnProps & InjectedIntlProps;

class EngangsstonadModal extends React.Component<Props> {
    state: {
        modalIsOpen: boolean;
    };

    constructor(props: Props & InjectedIntlProps) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            modalIsOpen: false
        });
    }

    openModal = (e: any) => {
        e.preventDefault();
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    render() {
        if (typeof window !== 'undefined') {
            Modal.setAppElement('body');
        }
        return (
            <div className={cls.className}>
                <TypografiBase type="normaltekst">
                    <Lenke id="engangsstonadModal" href={'#'} onClick={this.openModal}>
                        {this.props.linktxt}
                    </Lenke>
                </TypografiBase>
                <Modal
                    className={'modal--overflow-visible'}
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    closeButton={false}
                    contentLabel={getTranslation(
                        'hva_søker_du.engangsstønad_modal',
                        this.props.intl
                    )}>
                    <div className={cls.element('topIconContainer')}>
                        <FlexibleSvg
                            className={cls.element('icon')}
                            iconRef={
                                require('../../../assets/icons/check_circle_filled.svg').default
                            }
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className={cls.element('body')}>
                        <div className={cls.element('knappRad')}>
                            <Lukknapp onClick={this.closeModal} />
                        </div>
                        <Innhold
                            source={getSource(
                                'hva-søker-du/engangsstonad-modal-sok-papir',
                                this.props.intl
                            )}
                        />
                        <div className={cls.element('knapper')}>
                            <WithLink
                                url={
                                    'https://www.nav.no/no/Person/Skjemaer-for-privatpersoner/Skjemaer/Familie/foreldrepenger-og-engangsstonad/Foreldrepenger+og+engangsst%C3%B8nad?method=mail&veiledertype=privatperson'
                                }
                                urlIsExternal={true}
                                noStyling={false}>
                                <KnappBase
                                    type={'standard'}
                                    className={cls.element('knappen gaTilSoknad')}>
                                    <TypografiBase type={'normaltekst'}>
                                        {getTranslation(
                                            'hva_søker_du.engangsstønad.sokPapir.modal.knapp.standard',
                                            this.props.intl
                                        )}
                                    </TypografiBase>
                                </KnappBase>
                            </WithLink>
                            <WithLink
                                url={'https://engangsstonad.nav.no'}
                                urlIsExternal={true}
                                noStyling={false}>
                                <KnappBase type={'hoved'} className={cls.element('knappen')}>
                                    <TypografiBase type={'normaltekst'}>
                                        {getTranslation(
                                            'hva_søker_du.engangsstønad.sokPapir.modal.knapp.hoved',
                                            this.props.intl
                                        )}
                                    </TypografiBase>
                                </KnappBase>
                            </WithLink>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default injectIntl(EngangsstonadModal);
