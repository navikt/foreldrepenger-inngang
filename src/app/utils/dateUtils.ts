import moment from 'moment';

export const dateIsInLessThanSixWeeks = (date: Date) => {
    const omSeksUker = moment().add(6, 'weeks');
    const valgtDato = moment(date);

    console.warn('Om seks uker:', omSeksUker.format());
    console.warn('Valgt dato:', valgtDato.format());
    return valgtDato.isBefore(omSeksUker);
};
