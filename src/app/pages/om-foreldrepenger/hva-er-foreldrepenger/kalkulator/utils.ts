import translate from '../../../../utils/translate';

export const validerMånedslønn = (monthlyWage: number) => {
    if (monthlyWage < 5000) {
        return translate('for_lav_lønn_feilmelding');
    } else {
        return '';
    }
};

export const antallUtbetalingsuker = {
    1: {
        100: 49,
        80: 59
    },
    2: {
        100: 54,
        80: 66
    },
    3: {
        100: 95,
        80: 115
    }
};
