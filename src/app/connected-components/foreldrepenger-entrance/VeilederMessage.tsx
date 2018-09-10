import * as React from 'react';
import moment from 'moment';
import Veilederpanel from 'nav-frontend-veilederpanel';
import CustomSVG from '../../utils/CustomSVG';
import translate from '../../utils/translate';
import BEMHelper from '../../utils/bem';

const foreldrepengerCls = BEMHelper('foreldrepengerEntrance');

const createDateErrorMessage = (date: Date) => {
    const sixWeeksEarlier = moment(date)
        .subtract(6, 'weeks')
        .format('dddd D. MMMM');

    return `${translate(
        'ugyldig_dato_for_foreldrepenger'
    )} ${sixWeeksEarlier}.`;
};

const VeilederMessage = ({ selectedDate }: { selectedDate: Date }) => {
    const saraSvg = require(`./sara.svg`).default;
    const sara = (
        <CustomSVG
            className={foreldrepengerCls.element('frida')}
            iconRef={saraSvg}
            size={64}
        />
    );

    return (
        <Veilederpanel
            kompakt={true}
            type="normal"
            svg={sara}
            fargetema="advarsel">
            {createDateErrorMessage(selectedDate)}
        </Veilederpanel>
    );
};

export default VeilederMessage;
