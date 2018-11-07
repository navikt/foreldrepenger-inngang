import { Foreldresituasjon } from 'app/utils/foreldresituasjon';
import { OmForeldrepengerState } from '.';

type Action =
    | { type: 'SELECTED_SITUASJON'; payload: { valgtSituasjon: Foreldresituasjon } }
    | { type: 'SELECTED_UNDERSITUASJON'; payload: { valgtUndersituasjon: string } };

const INITIAL_STATE: OmForeldrepengerState = {
    valgtSituasjon: 'far_og_mor',
    valgtUndersituasjon: 'Som mor'
};

const omForeldrepenger = (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case 'SELECTED_SITUASJON':
            return {
                ...state,
                valgtSituasjon: action.payload.valgtSituasjon
            };

        case 'SELECTED_UNDERSITUASJON':
            return {
                ...state,
                valgtUndersituasjon: action.payload.valgtUndersituasjon
            };

        default:
            return state;
    }
};

export default omForeldrepenger;
