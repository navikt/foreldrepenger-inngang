import * as React from 'react';
import NavDatovelger from 'nav-datovelger';
import TypografiBase from 'nav-frontend-typografi';

import { BEMWrapper } from '../../utils/bem';
import translate from '../../utils/translate';

const Datovelger = ({
    date,
    onChange,
    parentCls
}: {
    date: any;
    onChange: (date: Date) => void;
    parentCls: BEMWrapper;
}) => {
    return (
        <div className={parentCls.element('datovelger')}>
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

export default Datovelger;
