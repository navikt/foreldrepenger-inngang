import * as React from 'react';
import moment from 'moment';
import Veilederpanel from 'nav-frontend-veilederpanel';
import CustomSVG from '../../utils/CustomSVG';
import { getTranslation, Language, IntlProps, withIntl } from '../../intl/intl';
import { BEMWrapper } from '../../utils/bem';

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
    const saraSvg = require(`../../assets/sara.svg`).default;
    const sara = <CustomSVG className={parentCls.className} iconRef={saraSvg} size={64} />;

    return (
        <div role="alert">
            <Veilederpanel kompakt={true} type="normal" svg={sara} fargetema="advarsel">
                {createDateErrorMessage(selectedDate, lang)}
            </Veilederpanel>
        </div>
    );
};

export default withIntl(Veiledermelding);
