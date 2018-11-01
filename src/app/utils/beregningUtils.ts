import moment from 'moment';

const AVVIKSGRENSE = 0.25;

export const computeAverage = (numbers: Array<number | undefined>, fallback: number) => {
    let accumulator = 0;
    for (const num of numbers) {
        accumulator += num === undefined ? fallback : num;
    }

    return accumulator / numbers.length;
};

const computeDeviation = (value: number, average: number): number => {
    const deviation = average - value;
    return Math.abs(deviation / average);
};

export const forStortAvvik = (
    average: number,
    values: Array<number | undefined>,
    fallback: number
): boolean => {
    for (const value of values) {
        const avvik = computeDeviation(value === undefined ? fallback : value, average);
        if (avvik > AVVIKSGRENSE) {
            return true;
        }
    }

    return false;
};

export const lastThreeYears = (): string[] => {
    return [1, 2, 3].map((i) =>
        moment()
            .subtract(i, 'year')
            .year()
            .toString()
    );
};

export const lastThreeMonths = (): string[] => {
    return [1, 2, 3].map((i) => {
        const date = moment().subtract(i, 'month');
        const monthName = date.format('MMMM');
        const year = date.year();
        return `${monthName} ${year}`;
    });
};
