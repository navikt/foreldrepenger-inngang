import BEMHelper from "../../../utils/bem";
import {getTranslation, IntlProps, Language, withIntl} from "../../../intl/intl";
import {Component} from "react";
import Modal from "nav-frontend-modal";
import TypografiBase from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";
import Lukknapp from "nav-frontend-lukknapp";
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import {getContent} from "../../../utils/getContent";
import React from "react";

const cls = BEMHelper('engangs-modal');

interface Props {
    modalIsOpen: boolean;
    linktxt: string;
    lang: Language;
}

class EngangsstonadModal extends Component<Props & IntlProps> {
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
        console.log(this.props.linktxt, this.props.lang);
        return (
            <div className={cls.className}>
                <TypografiBase type="normaltekst">
                    <Lenke id="engangsstonadModal" href={'#'} onClick={this.openModal}>
                        {this.props.linktxt}
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

export default withIntl(EngangsstonadModal);