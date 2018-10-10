import moment from 'moment';

export const datoErOmMindreEnnSeksUker = (dato: Date) => {
    const omSeksUker = moment().add(6, 'weeks');
    const valgtDato = moment(dato);

    return valgtDato.isBefore(omSeksUker);
};
