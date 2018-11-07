import { combineReducers } from 'redux';
import omForeldrepenger from './omForeldrepenger';
import { Foreldresituasjon } from 'app/utils/foreldresituasjon';

export interface OmForeldrepengerState {
    valgtSituasjon: Foreldresituasjon;
    valgtUndersituasjon: string;
}

export interface AppState {
    omForeldrepenger: OmForeldrepengerState;
}

const rootReducer = combineReducers({
    omForeldrepenger
});

export default rootReducer;
