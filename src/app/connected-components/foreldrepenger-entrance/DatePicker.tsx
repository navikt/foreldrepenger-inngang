import * as React from 'react';
import NavDatovelger from 'nav-datovelger';
import TypografiBase from 'nav-frontend-typografi';

import BEMHelper from '../../utils/bem';
import translate from '../../utils/translate';

const foreldrepengerCls = BEMHelper('foreldrepengerEntrance');

const DatePicker = ({
    date,
    onChange
}: {
    date: any;
    onChange: (date: Date) => void;
}) => {
    return (
        <div className={foreldrepengerCls.element('datovelger')}>
            <TypografiBase type="element">
                {translate('når_starter_du')}
            </TypografiBase>
            <NavDatovelger.Datovelger
                kanVelgeUgyldigDato={true}
                id="foreldrepenger-startdato"
                locale="no"
                dato={date}
                onChange={(newDate: Date) => onChange(newDate)}
                input={{
                    placeholder: 'dd.mm.åååå'
                }}
            />
            {}
        </div>
    );
};

export default DatePicker;
