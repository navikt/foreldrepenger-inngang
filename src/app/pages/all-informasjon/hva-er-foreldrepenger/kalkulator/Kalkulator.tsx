import * as React from 'react';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';

import BEMHelper from '../../../../utils/bem';
import translate from '../../../../utils/translate';
import './kalkulator.less';

const cls = BEMHelper('kalkulator');

class Kalkulator extends React.Component {
    state: {
        selectedNumberOfWeeks: number;
    };

    constructor(props: {}) {
        super(props);

        this.state = {
            selectedNumberOfWeeks: 49
        };
    }

    onNumberOfWeeksSelect = (numberOfWeeks: number) => {
        console.warn('Hei:', numberOfWeeks);
        this.setState({
            selectedNumberOfWeeks: numberOfWeeks
        });
    };

    render = () => {
        const AntallUkerWrapper = addAntallUkerAttributes(
            this.state.selectedNumberOfWeeks,
            this.onNumberOfWeeksSelect
        );

        return (
            <div className={cls.className}>
                <div className={cls.element('antallUkerOgBarn')}>
                    <div />
                    <TypografiBase type="normaltekst">100%</TypografiBase>
                    <TypografiBase type="normaltekst">80%</TypografiBase>
                    <AntallBarn childCount={1} label={translate('ett_barn')} />
                    <AntallUkerWrapper numberOfWeeks={49} />
                    <AntallUkerWrapper numberOfWeeks={59} />
                    <AntallBarn
                        childCount={2}
                        label={translate('tvillinger')}
                    />
                    <AntallUkerWrapper numberOfWeeks={54} />
                    <AntallUkerWrapper numberOfWeeks={66} />
                    <AntallBarn
                        childCount={3}
                        label={translate('flere_barn')}
                    />
                    <AntallUkerWrapper numberOfWeeks={95} />
                    <AntallUkerWrapper numberOfWeeks={115} />
                </div>
                <div className={cls.element('dinLønn')}>Sann</div>
            </div>
        );
    };
}

const addAntallUkerAttributes = (
    selectedNumberOfWeeks: number,
    onSelect: (numberOfWeeks: number) => void
) => ({ numberOfWeeks }: { numberOfWeeks: number }) => {
    return (
        <AntallUker
            numberOfWeeks={numberOfWeeks}
            isSelected={selectedNumberOfWeeks === numberOfWeeks}
            onSelect={() => {
                onSelect(numberOfWeeks);
            }}
        />
    );
};

const AntallBarn = ({
    childCount,
    label
}: {
    childCount: number;
    label: string;
}) => {
    const childCountIllustration = [];
    for (let i = 0; i < childCount; i++) {
        childCountIllustration.push(<span key={i}>👶</span>);
    }

    return (
        <div className={cls.element('centerItems')}>
            <div>{childCountIllustration}</div>
            <TypografiBase type="normaltekst">{label}</TypografiBase>
        </div>
    );
};

const AntallUker = ({
    numberOfWeeks,
    isSelected,
    onSelect
}: {
    numberOfWeeks: number;
    isSelected: boolean;
    onSelect: () => void;
}) => {
    return (
        <div className={cls.element('centerItems')}>
            <div
                role="button"
                tabIndex={0}
                onClick={onSelect}
                onKeyPress={onSelect}
                className={classnames(
                    cls.element('flexDownwards'),
                    cls.element('antallUker'),
                    {
                        [cls.element('antallUker--selected')]: isSelected
                    }
                )}>
                <TypografiBase type="element">{numberOfWeeks}</TypografiBase>
                {isSelected && (
                    <TypografiBase type="undertekst">
                        {translate('uker')}
                    </TypografiBase>
                )}
            </div>
        </div>
    );
};

export default Kalkulator;
