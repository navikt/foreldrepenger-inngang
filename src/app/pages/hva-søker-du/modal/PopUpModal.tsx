import React, { Component } from 'react';
import Modal from 'nav-frontend-modal';
import Lenke from 'nav-frontend-lenker';
import BEMHelper from '../../../utils/bem';
import { getTranslation, Language, withIntl, IntlProps } from '../../../intl/intl';
import { getContent } from '../../../utils/getContent';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import Lukknapp from 'nav-frontend-lukknapp';
import './popUpModal.less';
import TypografiBase from 'nav-frontend-typografi';

const cls = BEMHelper('engangs-modal');

interface Props {
    modalIsOpen: boolean;
    lang: Language;
}

class PopUpModal extends Component<Props & IntlProps> {
    state: {
        modalIsOpen: boolean;
    };

    constructor(props: Props & IntlProps) {
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
                        {getTranslation('hva_søker_du.engangsstønad_modal', this.props.lang)}
                    </Lenke>
                </TypografiBase>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    closeButton={false}
                    contentLabel={getTranslation(
                        'hva_søker_du.engangsstønad_modal',
                        this.props.lang
                    )}>
                    <div className={cls.element('body')}>
                        <div className={cls.element('knapp')}>
                            <Lukknapp onClick={this.closeModal} />
                        </div>
                        <StrukturertTekst
                            tekst={getContent('hva-søker-du/engangsstonad-modal', this.props.lang)}
                        />
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withIntl(PopUpModal);
