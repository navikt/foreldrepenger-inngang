import * as React from 'react';
import moment from 'moment';
import { getTranslation, Language, IntlProps, withIntl } from '../../intl/intl';
import { BEMWrapper } from '../../utils/bem';
import Veileder from 'app/components/veileder/Veileder';

const createDateErrorMessage = (date: Date, lang: Language) => {
    const sixWeeksEarlier = moment(date)
        .subtract(6, 'weeks')
        .format('dddd D. MMMM');

    return `${getTranslation('søk_foreldrepenger.advarselmelding', lang)} ${sixWeeksEarlier}.`;
};

interface Props {
    selectedDate: Date;
    parentCls: BEMWrapper;
}

const Veiledermelding: React.StatelessComponent<Props & IntlProps> = ({
    selectedDate,
    parentCls,
    lang
}) => {
    return (
        <div role="alert">
            <Veileder className={parentCls} ansikt="undrende" fargetema="advarsel" kompakt={true}>
                {createDateErrorMessage(selectedDate, lang)}
            </Veileder>
        </div>
    );
};

export default withIntl(Veiledermelding);
