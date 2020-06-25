import * as React from 'react';
import moment from 'moment';
import { InjectedIntlProps, injectIntl, InjectedIntl } from 'react-intl';
import { BEMWrapper } from '../../utils/bem';
import Veileder from 'app/components/veileder/Veileder';
import getTranslation from 'app/utils/i18nUtils';

const createDateErrorMessage = (date: Date, intl: InjectedIntl) => {
    const sixWeeksEarlier = moment(date)
        .subtract(6, 'weeks')
        .format('dddd D. MMMM');

    return `${getTranslation('søk_foreldrepenger.advarselmelding', intl)} ${sixWeeksEarlier}.`;
};

interface Props {
    selectedDate: Date;
    parentCls: BEMWrapper;
}

const Veiledermelding: React.StatelessComponent<Props & InjectedIntlProps> = ({ selectedDate, parentCls, intl }) => {
    return (
        <div role="alert">
            <Veileder className={parentCls} ansikt="undrende" fargetema="advarsel" kompakt={true}>
                {createDateErrorMessage(selectedDate, intl)}
            </Veileder>
        </div>
    );
};

export default injectIntl(Veiledermelding);
