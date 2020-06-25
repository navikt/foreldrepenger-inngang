import React, { useState } from 'react';
import { RadioPanel } from 'nav-frontend-skjema';
import BEMHelper from 'app/utils/bem';
import { Undertittel } from 'nav-frontend-typografi';
import InfoAleneomsorgFar from './InfoAleneomsorgFar';
import InfoAleneomsorgMor from './InfoAleneomsorgMor';
import { injectIntl, InjectedIntl } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';

const cls = BEMHelper('søkForeldrepenger');

interface Props {
    intl: InjectedIntl;
}

const InfoAleneomsorg: React.FunctionComponent<Props> = ({ intl }) => {
    const [valgtForelder, setValgtForelder] = useState<string | undefined>(undefined);

    return (
        <div>
            <Undertittel>{getTranslation('søke_om_foreldrepenger.aleneomsorg.morEllerFar', intl)}</Undertittel>
            <div className={cls.element('radioWrapper')}>
                <RadioPanel
                    checked={valgtForelder === 'mor'}
                    name={'mor'}
                    onChange={(e) => setValgtForelder((e.target as HTMLInputElement).value)}
                    label={getTranslation('søke_om_foreldrepenger.aleneomsorg.mor', intl)}
                    value={'mor'}
                />
                <RadioPanel
                    checked={valgtForelder === 'far'}
                    name={'far'}
                    onChange={(e) => setValgtForelder((e.target as HTMLInputElement).value)}
                    label={getTranslation('søke_om_foreldrepenger.aleneomsorg.far', intl)}
                    value={'far'}
                />
            </div>
            {valgtForelder !== undefined && (valgtForelder === 'far' ? <InfoAleneomsorgFar /> : <InfoAleneomsorgMor />)}
        </div>
    );
};

export default injectIntl(InfoAleneomsorg);
