import * as React from 'react';
import moment from 'moment';
import Veilederpanel from 'nav-frontend-veilederpanel';
import CustomSVG from '../../utils/CustomSVG';
import translate from '../../utils/translate';
import { BEMWrapper } from '../../utils/bem';

const createDateErrorMessage = (date: Date) => {
    const sixWeeksEarlier = moment(date)
        .subtract(6, 'weeks')
        .format('dddd D. MMMM');

    return `${translate('søk_foreldrepenger.advarselmelding')} ${sixWeeksEarlier}.`;
};

const Veiledermelding = ({
    selectedDate,
    parentCls
}: {
    selectedDate: Date;
    parentCls: BEMWrapper;
}) => {
    const saraSvg = require(`../../assets/sara.svg`).default;
    const sara = <CustomSVG className={parentCls.className} iconRef={saraSvg} size={64} />;

    return (
        <div role="alert">
            <Veilederpanel kompakt={true} type="normal" svg={sara} fargetema="advarsel">
                {createDateErrorMessage(selectedDate)}
            </Veilederpanel>
        </div>
    );
};

export default Veiledermelding;
