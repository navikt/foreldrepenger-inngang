import React, { useState } from 'react';
import { RadioPanel } from 'nav-frontend-skjema';
import BEMHelper from 'app/utils/bem';
import { Undertittel } from 'nav-frontend-typografi';
import InfoAleneomsorgFar from './InfoAleneomsorgFar';
import InfoAleneomsorgMor from './InfoAleneomsorgMor';

const cls = BEMHelper('søkForeldrepenger');

const InfoAleneomsorg = () => {
    const [valgtForelder, setValgtForelder] = useState<string | undefined>(undefined);

    return (
        <div>
            <Undertittel>Er du far eller mor</Undertittel>
            <div className={cls.element('radioWrapper')}>
                <RadioPanel
                    checked={valgtForelder === 'mor'}
                    name={'mor'}
                    onChange={(e) => setValgtForelder((e.target as HTMLInputElement).value)}
                    label={'Mor'}
                    value={'mor'}
                />
                <RadioPanel
                    checked={valgtForelder === 'far'}
                    name={'far'}
                    onChange={(e) => setValgtForelder((e.target as HTMLInputElement).value)}
                    label={'Far'}
                    value={'far'}
                />
            </div>
            {valgtForelder !== undefined &&
                (valgtForelder === 'far' ? <InfoAleneomsorgFar /> : <InfoAleneomsorgMor />)}
        </div>
    );
};

export default InfoAleneomsorg;
