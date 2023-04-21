import * as React from 'react';
import moment from 'moment';
import { IntlShape, useIntl } from 'react-intl';
import { BEMWrapper } from '../../utils/bem';
import Veileder from 'app/components/veileder/Veileder';
import getTranslation from 'app/utils/i18nUtils';

const createDateErrorMessage = (date: Date, intl: IntlShape) => {
    const sixWeeksEarlier = moment(date).subtract(6, 'weeks').format('dddd D. MMMM');

    return `${getTranslation('søk_foreldrepenger.advarselmelding', intl)} ${sixWeeksEarlier}.`;
};

interface Props {
    selectedDate: Date;
    parentCls: BEMWrapper;
}

const Veiledermelding: React.FunctionComponent<Props> = ({ selectedDate, parentCls }) => {
    const intl = useIntl();

    return (
        <div role="alert">
            <Veileder className={parentCls} ansikt="undrende" fargetema="advarsel" kompakt={true}>
                {createDateErrorMessage(selectedDate, intl)}
            </Veileder>
        </div>
    );
};

export default Veiledermelding;
