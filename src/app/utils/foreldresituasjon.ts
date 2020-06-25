import moment from 'moment';
import _ from 'lodash';

export type Foreldresituasjon =
    | 'farOgMor'
    | 'farOgFar'
    | 'morOgMor'
    | 'bareFarHar'
    | 'bareFarHarRett'
    | 'bareMorHarRett'
    | 'aleneomsorg';

export type Kvote = 'mødrekvote' | 'fedrekvote' | 'fellesperiode';
export type Dekningsgrad = 'dekning80' | 'dekning100';

export interface AntallUker {
    farOgMor: {
        mødrekvote: {
            dekning80: number;
            dekning100: number;
        };
        fedrekvote: {
            dekning80: number;
            dekning100: number;
        };
        fellesperiode: {
            dekning80: number;
            dekning100: number;
        };
    };
    farOgFar: {
        mødrekvote: {
            dekning80: number;
            dekning100: number;
        };
        fedrekvote: {
            dekning80: number;
            dekning100: number;
        };
        fellesperiode: {
            dekning80: number;
            dekning100: number;
        };
    };
    morOgMor: {
        mødrekvote: {
            dekning80: number;
            dekning100: number;
        };
        fedrekvote: {
            dekning80: number;
            dekning100: number;
        };
        fellesperiode: {
            dekning80: number;
            dekning100: number;
        };
    };
    bareFarHarRett: {
        fedrekvote: {
            dekning80: number;
            dekning100: number;
        };
    };
    bareMorHarRett: {
        mødrekvote: {
            dekning80: number;
            dekning100: number;
        };
    };
    aleneomsorg: {
        mødrekvote: {
            dekning80: number;
            dekning100: number;
        };
        fedrekvote: {
            dekning80: number;
            dekning100: number;
        };
    };
}

const antallUkerFør2019 = {
    farOgMor: {
        mødrekvote: {
            dekning100: 15,
            dekning80: 15,
        },
        fedrekvote: {
            dekning100: 15,
            dekning80: 15,
        },
        fellesperiode: {
            dekning100: 16,
            dekning80: 26,
        },
    },
    farOgFar: {
        mødrekvote: {
            dekning100: 15,
            dekning80: 15,
        },
        fedrekvote: {
            dekning100: 15,
            dekning80: 15,
        },
        fellesperiode: {
            dekning100: 16,
            dekning80: 26,
        },
    },
    morOgMor: {
        mødrekvote: {
            dekning100: 15,
            dekning80: 15,
        },
        fedrekvote: {
            dekning100: 15,
            dekning80: 15,
        },
        fellesperiode: {
            dekning100: 16,
            dekning80: 26,
        },
    },
    bareFarHarRett: {
        fedrekvote: {
            dekning100: 40,
            dekning80: 50,
        },
    },
    bareMorHarRett: {
        mødrekvote: {
            dekning100: 46,
            dekning80: 56,
        },
    },
    aleneomsorg: {
        mødrekvote: {
            dekning100: 46,
            dekning80: 56,
        },
        fedrekvote: {
            dekning100: 46,
            dekning80: 56,
        },
    },
};

const antallUkerFom2019 = {
    farOgMor: {
        mødrekvote: {
            dekning100: 15,
            dekning80: 19,
        },
        fedrekvote: {
            dekning100: 15,
            dekning80: 19,
        },
        fellesperiode: {
            dekning100: 16,
            dekning80: 18,
        },
    },
    farOgFar: {
        mødrekvote: {
            dekning100: 15,
            dekning80: 19,
        },
        fedrekvote: {
            dekning100: 15,
            dekning80: 19,
        },
        fellesperiode: {
            dekning100: 16,
            dekning80: 18,
        },
    },
    morOgMor: {
        mødrekvote: {
            dekning100: 15,
            dekning80: 19,
        },
        fedrekvote: {
            dekning100: 15,
            dekning80: 19,
        },
        fellesperiode: {
            dekning100: 16,
            dekning80: 18,
        },
    },
    bareFarHarRett: {
        fedrekvote: {
            dekning100: 40,
            dekning80: 50,
        },
    },
    bareMorHarRett: {
        mødrekvote: {
            dekning100: 46,
            dekning80: 56,
        },
    },
    aleneomsorg: {
        mødrekvote: {
            dekning100: 46,
            dekning80: 56,
        },
        fedrekvote: {
            dekning100: 46,
            dekning80: 56,
        },
    },
};

const oversettbareNavnForAlleKvoter = {
    farOgMor: {
        mødrekvote: 'mor',
        fedrekvote: 'far',
        fellesperiode: 'begge',
    },
    farOgFar: {
        mødrekvote: 'far2',
        fedrekvote: 'far1',
        fellesperiode: 'begge',
    },
    morOgMor: {
        mødrekvote: 'mor',
        fedrekvote: 'medmor',
        fellesperiode: 'begge',
    },
    bareFarHarRett: {
        fedrekvote: 'far',
    },
    bareMorHarRett: {
        mødrekvote: 'mor',
    },
    aleneomsorg: {
        mødrekvote: 'mor',
        fedrekvote: 'far',
    },
};

const erFør2019 = () => moment().year() < 2019;

export const getAntallUker = (foreldresituasjon: Foreldresituasjon, kvote: Kvote, dekningsgrad: Dekningsgrad) => {
    const reglement = erFør2019() ? antallUkerFør2019 : antallUkerFom2019;
    return reglement[foreldresituasjon][kvote][dekningsgrad];
};

export const getMottakersOversettbareNavn = (foreldresituasjon: Foreldresituasjon, kvote: Kvote) => {
    return oversettbareNavnForAlleKvoter[foreldresituasjon][kvote];
};
