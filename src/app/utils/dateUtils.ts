import moment from 'moment';

export const dateIsInLessThanSixWeeks = (date: Date) => {
    const igaar = moment().subtract(1, 'days');
    const omSeksUker = moment().add(6, 'weeks');
    const valgtDato = moment(date);

    return valgtDato.isBetween(igaar, omSeksUker);
};
