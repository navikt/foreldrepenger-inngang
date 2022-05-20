import moment from 'moment';

const AVVIKSGRENSE = 0.25;
export const GRUNNBELØPET = 111477;
export const ENGANGSSUM_PER_BARN = 90300;
export const MÅNEDSLØNN_EKSEMPEL = 25000;
export const ÅRSLØNN_EKSEMPEL = 250000;
export const MAKS_ANTALL_SIFFER = 7;

export const computeAverage = (numbers: number[]) => {
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
};

const computeDeviation = (value: number, average: number): number => {
    const deviation = average - value;
    return Math.abs(deviation / average);
};

export const getUtbetalingsgrense = () => GRUNNBELØPET * 6;
export const getGrunnbeløpet = () => GRUNNBELØPET;
export const getEnHalvG = () => GRUNNBELØPET / 2;

export const getEnHalvGFormatert = () => {
    return Math.ceil(GRUNNBELØPET / 2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const tjenerOverUtbetalingsgrensen = (månedslønn: number): boolean => {
    return månedslønn * 12 > getUtbetalingsgrense();
};

export const tjenerForLiteForForeldrepenger = (månedslønn: number): boolean => {
    return månedslønn * 12 < getEnHalvG();
};

export const forStortAvvik = (average: number, values: number[]): boolean => {
    for (const value of values) {
        const avvik = computeDeviation(value, average);
        if (avvik > AVVIKSGRENSE) {
            return true;
        }
    }

    return false;
};

export const lastThreeYears = (): string[] => {
    return [3, 2, 1].map((i) => moment().subtract(i, 'year').year().toString());
};

export const lastThreeMonths = (): string[] => {
    return [3, 2, 1].map((i) => {
        const date = moment().subtract(i, 'month');
        const monthName = date.format('MMMM');
        const year = date.year();
        return `${monthName[0].toUpperCase() + monthName.slice(1)} ${year}`;
    });
};

export const getLastYear = (): string => {
    return moment().subtract(1, 'year').year().toString();
};

export const getDailyPayment = (monthlyWage: number) => (monthlyWage * 12) / 260;
