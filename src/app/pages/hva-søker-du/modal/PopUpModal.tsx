import React, { Component } from 'react';

import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import Lenke from 'nav-frontend-lenker';
import Lukknapp from 'nav-frontend-lukknapp';
import Modal from 'nav-frontend-modal';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import TypografiBase from 'nav-frontend-typografi';
import './popUpModal.less';

const cls = BEMHelper('engangs-modal');

interface OwnProps {
    modalIsOpen: boolean;
}

type Props = OwnProps & InjectedIntlProps;

class PopUpModal extends Component<Props> {
    state: {
        modalIsOpen: boolean;
    };

    constructor(props: Props) {
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
                    <Lenke id="engangsstonadModal" href={''} onClick={this.openModal}>
                        {getTranslation('hva_søker_du.engangsstønad_modal', this.props.intl)}
                    </Lenke>
                </TypografiBase>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    closeButton={false}
                    contentLabel={getTranslation(
                        'hva_søker_du.engangsstønad_modal',
                        this.props.intl
                    )}>
                    <div className={cls.element('body')}>
                        <div className={cls.element('knapp')}>
                            <Lukknapp onClick={this.closeModal} />
                        </div>
                        <Innhold
                            source={getSource('hva-søker-du/engangsstonad-modal', this.props.intl)}
                        />
                    </div>
                </Modal>
            </div>
        );
    }
}

export default injectIntl(PopUpModal);
