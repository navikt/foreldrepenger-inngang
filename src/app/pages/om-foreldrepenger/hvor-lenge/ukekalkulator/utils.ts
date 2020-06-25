import { Foreldresituasjon, Kvote } from 'app/utils/foreldresituasjon';

export interface Utbetalingsalternativ {
    100: number;
    80: number;
}

const UKER_FAR_OG_MOR = [
    { 100: 49, 80: 59 },
    { 100: 66, 80: 80 },
    { 100: 95, 80: 115 },
];
const UKER_FAR_OG_FAR = [
    { 100: 46, 80: 56 },
    { 100: 63, 80: 77 },
    { 100: 92, 80: 112 },
];
const UKER_BARE_FAR_HAR_RETT = [
    { 100: 40, 80: 50 },
    { 100: 57, 80: 71 },
    { 100: 86, 80: 106 },
];
const UKER_MOR_OG_MOR = UKER_FAR_OG_MOR;
const UKER_ALENEOMSORG_MOR = UKER_FAR_OG_MOR;
const UKER_BARE_MOR_HAR_RETT = UKER_FAR_OG_MOR;
const UKER_ALENEOMSORG_FAR = UKER_FAR_OG_FAR;

export const getAntallUtbetalingsuker = (
    situasjon: Foreldresituasjon,
    undersituasjon?: Kvote
): Utbetalingsalternativ[] => {
    switch (situasjon) {
        case 'farOgMor':
            return UKER_FAR_OG_MOR;
        case 'farOgFar':
            return UKER_FAR_OG_FAR;
        case 'morOgMor':
            return UKER_MOR_OG_MOR;
        case 'bareFarHarRett':
            return UKER_BARE_FAR_HAR_RETT;
        case 'bareMorHarRett':
            return UKER_BARE_MOR_HAR_RETT;
        case 'aleneomsorg':
            return undersituasjon === 'mødrekvote' ? UKER_ALENEOMSORG_MOR : UKER_ALENEOMSORG_FAR;
        default:
            return UKER_FAR_OG_MOR;
    }
};
