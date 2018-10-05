import * as React from 'react';
import NavDatovelger from 'nav-datovelger';
import TypografiBase from 'nav-frontend-typografi';

import { BEMWrapper } from '../../utils/bem';
import { getTranslation, withIntl, IntlProps } from '../../intl/intl';
import { StatelessComponent } from 'enzyme';

interface Props {
    date: any;
    onChange: (date: Date) => void;
    parentCls: BEMWrapper;
}

const Datovelger: StatelessComponent<Props & IntlProps> = ({ date, onChange, parentCls, lang }) => {
    return (
        <div
            aria-label="Datovelger"
            aria-haspopup={true}
            className={parentCls.element('datovelger')}>
            <TypografiBase type="element">
                {getTranslation('søk_foreldrepenger.første_dag_spørsmål', lang)}
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

export default withIntl(Datovelger);
