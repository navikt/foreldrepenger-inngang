import BEMHelper from '../../../utils/bem';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import Modal from 'nav-frontend-modal';
import TypografiBase from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import Lukknapp from 'nav-frontend-lukknapp';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

import React from 'react';
import './engangsstonad-modal.less';
import { FlexibleSvg } from '../../../utils/CustomSVG';
import getTranslation from 'app/utils/i18nUtils';
import Lenkeknapp from 'app/components/lenkeknapp/Lenkeknapp';

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

        const papirSøknadUrl =
            'https://www.nav.no/no/Person/Skjemaer-for-privatpersoner/Skjemaer/Familie/foreldrepenger-og-engangsstonad/Foreldrepenger+og+engangsst%C3%B8nad?method=mail&veiledertype=privatperson';
        const papirSøknadKnapp = getTranslation(
            'hva_søker_du.engangsstønad.sokPapir.modal.knapp.standard',
            this.props.intl
        );

        const søknadUrl = 'https://engangsstonad.nav.no';
        const søknadKnapp = getTranslation(
            'hva_søker_du.engangsstønad.sokPapir.modal.knapp.hoved',
            this.props.intl
        );

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
                            <Lenkeknapp urlIsExternal={true} url={papirSøknadUrl}>
                                {papirSøknadKnapp}
                            </Lenkeknapp>
                            <Lenkeknapp type="hoved" url={søknadUrl} urlIsExternal={true}>
                                {søknadKnapp}
                            </Lenkeknapp>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default injectIntl(EngangsstonadModal);
