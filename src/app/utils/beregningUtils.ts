import moment from 'moment';

const AVVIKSGRENSE = 0.25;

export const computeAverage = (numbers: number[]) => {
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
};

const computeDeviation = (value: number, average: number) => {
    const deviation = average - value;
    return Math.abs(deviation / average);
};

export const forStortAvvik = (values: number[]) => {
    const average = computeAverage(values);

    for (const value of values) {
        const avvik = computeDeviation(value, average);
        if (avvik > AVVIKSGRENSE) {
            return true;
        }
    }

    return false;
};

export const lastThreeYears = () => {
    return [1, 2, 3].map((i) =>
        moment()
            .subtract(i, 'year')
            .year()
    );
};

export const lastThreeMonths = () => {
    return [1, 2, 3].map((i) => {
        const date = moment().subtract(i, 'month');
        return {
            monthNumber: date.month() + 1,
            monthName: date.format('MMMM'),
            year: date.year()
        };
    });
};
