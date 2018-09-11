import moment from 'moment';

export const datoErOmMindreEnnSeksUker = (dato: Date) => {
    const igår = moment().subtract(1, 'days');
    const omSeksUker = moment().add(6, 'weeks');
    const valgtDato = moment(dato);

    return valgtDato.isBetween(igår, omSeksUker);
};
