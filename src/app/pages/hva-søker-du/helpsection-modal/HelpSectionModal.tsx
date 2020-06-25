import BEMHelper from '../../../utils/bem';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import Modal from 'nav-frontend-modal';
import TypografiBase from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import Lukknapp from 'nav-frontend-lukknapp';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import React, { useState } from 'react';
import './helpSection-modal.less';
import { FlexibleSvg } from '../../../utils/CustomSVG';
import getTranslation from 'app/utils/i18nUtils';
import Lenkeknapp from 'app/components/lenkeknapp/Lenkeknapp';

const cls = BEMHelper('engangs-modal-sokPapir');

interface OwnProps {
    modalIsOpen: boolean;
    linktxt: string;
    papirsøknadUrl: string;
    søknadUrl: string;
}

type Props = OwnProps & InjectedIntlProps;

const HelpSectionModal = (props: Props) => {
    const { modalIsOpen, linktxt, papirsøknadUrl, søknadUrl, intl } = props;
    const [isOpen, toggle] = useState(modalIsOpen);

    const openModal = (e: any) => {
        e.preventDefault();
        toggle(true);
    };

    const closeModal = () => {
        toggle(false);
    };

    if (typeof window !== 'undefined') {
        Modal.setAppElement('body');
    }

    return (
        <div className={cls.block}>
            <TypografiBase type="normaltekst">
                <Lenke id="engangsstonadModal" href={'#'} onClick={openModal}>
                    {linktxt}
                </Lenke>
            </TypografiBase>
            <Modal
                className={'modal--overflow-visible'}
                isOpen={isOpen}
                onRequestClose={closeModal}
                closeButton={false}
                contentLabel={getTranslation('hva_søker_du.engangsstønad_modal', intl)}
            >
                <div className={cls.element('topIconContainer')}>
                    <FlexibleSvg
                        className={cls.element('icon')}
                        iconRef={require('../../../assets/icons/check_circle_filled.svg').default}
                        width={80}
                        height={80}
                    />
                </div>
                <div className={cls.element('body')}>
                    <div className={cls.element('knappRad')}>
                        <Lukknapp onClick={closeModal} />
                    </div>
                    <Innhold source={getSource('hva-søker-du/helpSection-modal', intl)} />
                    <div className={cls.element('knapper')}>
                        <Lenkeknapp urlIsExternal={true} url={papirsøknadUrl}>
                            {getTranslation('hva_søker_du.engangsstønad.sokPapir.modal.knapp.standard', intl)}
                        </Lenkeknapp>
                        <Lenkeknapp type="hoved" url={søknadUrl} urlIsExternal={true}>
                            {getTranslation('hva_søker_du.engangsstønad.sokPapir.modal.knapp.hoved', intl)}
                        </Lenkeknapp>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default injectIntl(HelpSectionModal);
