import BEMHelper from '../../../utils/bem';
import { getTranslation, IntlProps, Language, withIntl } from '../../../intl/intl';
import Modal from 'nav-frontend-modal';
import TypografiBase from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import Lukknapp from 'nav-frontend-lukknapp';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../utils/getContent';
import React from 'react';
import KnappBase from 'nav-frontend-knapper';
import './engangsstonad-modal.less';
import { FlexibleSvg } from '../../../utils/CustomSVG';
import WithLink from '../../../components/with-link/WithLink';

const cls = BEMHelper('engangs-modal-sokPapir');

interface Props {
    modalIsOpen: boolean;
    linktxt: string;
    lang: Language;
}

class EngangsstonadModal extends React.Component<Props & IntlProps> {
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
                        this.props.lang
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
                        <StrukturertTekst
                            tekst={getContent(
                                'hva-søker-du/engangsstonad-modal-sok-papir',
                                this.props.lang
                            )}
                        />
                        <div className={cls.element('knapper')}>
                            <WithLink
                                url={
                                    'https://www.nav.no/no/Person/Skjemaer-for-privatpersoner/Skjemaer/Familie/foreldrepenger-og-engangsstonad/Foreldrepenger+og+engangsst%C3%B8nad?method=mail&veiledertype=privatperson'
                                }
                                urlIsExternal={true}
                                noStyling={false}>
                                <KnappBase type={'standard'}>
                                    <TypografiBase type={'normaltekst'}>
                                        {getTranslation(
                                            'hva_søker_du.engangsstønad.sokPapir.modal.knapp.standard',
                                            this.props.lang
                                        )}
                                    </TypografiBase>
                                </KnappBase>
                            </WithLink>
                            <WithLink
                                url={'https://engangsstonad.nav.no'}
                                urlIsExternal={true}
                                noStyling={false}>
                                <KnappBase type={'hoved'}>
                                    <TypografiBase type={'normaltekst'}>
                                        {getTranslation(
                                            'hva_søker_du.engangsstønad.sokPapir.modal.knapp.hoved',
                                            this.props.lang
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

export default withIntl(EngangsstonadModal);
