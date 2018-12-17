import * as React from 'react';
import { Language, getTranslation, withIntl } from 'app/intl/intl';
import { Element } from 'nav-frontend-typografi';
import BEMHelper from 'app/utils/bem';

const cls = BEMHelper('informasjonsfaner')

interface Props {
    tittel: string;
    punkter: string[];
    lang: Language;
}

const Snakkeboble = (props: Props) => {
    const { tittel, punkter, lang } = props;

    return (
    <div>
        <Element>{tittel}</Element>
        <ul className={cls.element('liste')}>
            {punkter &&
                (punkter.length > 0 ? (
                    punkter.map((punkt) => {
                        return <li key={punkt}>{punkt}</li>;
                    })
                ) : (
                    <li>
                        {getTranslation(
                            'om_foreldrepenger.hvor_lenge.fordeling.krav.default',
                            lang
                        )}
                    </li>
                ))}
        </ul>
    </div>
    );
};

export default withIntl(Snakkeboble);