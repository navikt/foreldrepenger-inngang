import * as React from 'react';
import NavDatovelger from 'nav-datovelger';
import TypografiBase from 'nav-frontend-typografi';

import { BEMWrapper } from '../../utils/bem';
import { useIntl } from 'react-intl';
import CustomSVGFromSprite from 'app/utils/CustomSVG';
import getTranslation from 'app/utils/i18nUtils';

const okIcon = require('nav-frontend-ikoner-assets/assets/ok-sirkel.svg').default;

interface Props {
    date: any;
    dateIsValid: boolean;
    onChange: (date: Date) => void;
    parentCls: BEMWrapper;
}

const Datovelger: React.FunctionComponent<Props> = ({ date, dateIsValid, onChange, parentCls }) => {
    const intl = useIntl();

    return (
        <div aria-label="Datovelger" aria-haspopup={true} className={parentCls.element('datovelger')}>
            <TypografiBase type="element">
                {getTranslation('søk_foreldrepenger.første_dag_spørsmål', intl)}
            </TypografiBase>
            <div className={parentCls.element('container')}>
                <NavDatovelger.Datepicker
                    
                    aria-label="datovelger"
                    allowInvalidDateSelection
                    inputId="foreldrepenger-startdato"
                    locale="nb"
                    value={date}
                    onChange={(datoString: string) => {
                        const nyDato = datoString && datoString !== 'Invalid date' ? new Date(datoString) : undefined;
                        if (date !== nyDato && nyDato !== undefined) {
                            onChange(nyDato);
                        }
                    }}
                    inputProps={{
                        placeholder: 'dd.mm.åååå',
                    }}
                />
                {dateIsValid && <CustomSVGFromSprite iconRef={okIcon} size={24} />}
            </div>
        </div>
    );
};

export default Datovelger;
