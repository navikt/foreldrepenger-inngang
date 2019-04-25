import React, { useState } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';
import Lenke from 'nav-frontend-lenker';
import Lukknapp from 'nav-frontend-lukknapp';
import Modal from 'nav-frontend-modal';
import TypografiBase from 'nav-frontend-typografi';

import BEMHelper from '../../../utils/bem';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

import './popUpModal.less';

const cls = BEMHelper('engangs-modal');

interface OwnProps {
    modalIsOpen: boolean;
}

type Props = OwnProps & InjectedIntlProps;

const PopUpModal = ({ intl, modalIsOpen }: Props) => {
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
                <Lenke id="engangsstonadModal" href={''} onClick={openModal}>
                    {getTranslation('hva_søker_du.engangsstønad_modal', intl)}
                </Lenke>
            </TypografiBase>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                closeButton={false}
                contentLabel={getTranslation('hva_søker_du.engangsstønad_modal', intl)}>
                <div className={cls.element('body')}>
                    <div className={cls.element('knapp')}>
                        <Lukknapp onClick={closeModal} />
                    </div>
                    <Innhold source={getSource('hva-søker-du/engangsstonad-modal', intl)} />
                </div>
            </Modal>
        </div>
    );
};

export default injectIntl(PopUpModal);
