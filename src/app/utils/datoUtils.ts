import moment from 'moment';

export const datoForUttakErGyldig = (dato: Date) => {
    const valgtDato = moment(dato).startOf('day');

    // Alle datoer i 2018 er gyldige
    const førsteJanuar2019 = moment('01.01.2019', 'DD.MM.YYYY');
    if (valgtDato.isBefore(førsteJanuar2019)) {
        return true;
    }

    // Dato er ugyldig hvis den er lenger enn seks uker frem i tid
    const omSeksUker = moment().add(6, 'weeks');
    return valgtDato.isBefore(omSeksUker);
};

export const detErJul = () => {
    const now = moment();
    return now.month() === 11 && now.date() < 27;
};
