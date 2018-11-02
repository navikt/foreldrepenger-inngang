import moment from 'moment';

const AVVIKSGRENSE = 0.25;
export const GRUNNBELØPET = 96883;

export const computeAverage = (numbers: number[]) => {
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
};

const computeDeviation = (value: number, average: number): number => {
    const deviation = average - value;
    return Math.abs(deviation / average);
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
    return [3, 2, 1].map((i) =>
        moment()
            .subtract(i, 'year')
            .year()
            .toString()
    );
};

export const lastThreeMonths = (): string[] => {
    return [3, 2, 1].map((i) => {
        const date = moment().subtract(i, 'month');
        const monthName = date.format('MMMM');
        const year = date.year();
        return `${monthName[0].toUpperCase() + monthName.slice(1)} ${year}`;
    });
};

export const getDailyPayment = (monthlyWage: number) => (monthlyWage * 12) / 260;
