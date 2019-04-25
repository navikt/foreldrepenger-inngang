import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Innhold, { getSource } from '../../../../utils/innhold/Innhold';

const SelvstendigNaringsdrivendeEllerFrilanser: React.StatelessComponent<InjectedIntlProps> = ({
    intl
}) => {
    return (
        <Innhold
            source={getSource(
                'svangerskapspenger/slik-soker-du/selv-stendigNaringsdrivende-eller-frilanser',
                intl
            )}
        />
    );
};

export default injectIntl(SelvstendigNaringsdrivendeEllerFrilanser);
