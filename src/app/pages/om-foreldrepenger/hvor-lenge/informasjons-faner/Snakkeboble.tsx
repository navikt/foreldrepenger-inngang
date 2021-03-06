import * as React from 'react';
import { useIntl } from 'react-intl';
import { Element } from 'nav-frontend-typografi';
import BEMHelper from 'app/utils/bem';
import getTranslation from 'app/utils/i18nUtils';

const cls = BEMHelper('informasjonsfaner');

interface OwnProps {
    tittel: string;
    punkter: string[];
}

type Props = OwnProps;

const Snakkeboble = (props: Props) => {
    const intl = useIntl();
    const { tittel, punkter } = props;

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
                            {getTranslation('om_foreldrepenger.hvor_lenge.fordeling.ingen_krav', intl, {
                                subjekt: getTranslation('far', intl),
                            })}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Snakkeboble;
