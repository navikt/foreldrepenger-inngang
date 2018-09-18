import * as React from 'react';
import classnames from 'classnames';
import BEMHelper from '../../../../utils/bem';
import TypografiBase from 'nav-frontend-typografi';

import './kalkulator.less';
import translate from '../../../../utils/translate';

const cls = BEMHelper('kalkulator');

const Kalkulator = () => {
    return (
        <div className={cls.className}>
            <div className={cls.element('antallUkerOgBarn')}>
                <div />
                <TypografiBase type="normaltekst">100%</TypografiBase>
                <TypografiBase type="normaltekst">80%</TypografiBase>
                <AntallBarn childCount={1} label={translate('ett_barn')} />
                <AntallUker
                    numberOfWeeks={49}
                    isSelected={true}
                    onSelect={() => {}}
                />
                <AntallUker
                    numberOfWeeks={59}
                    isSelected={false}
                    onSelect={() => {}}
                />
                <AntallBarn childCount={2} label={translate('tvillinger')} />
                <AntallUker
                    numberOfWeeks={54}
                    isSelected={false}
                    onSelect={() => {}}
                />
                <AntallUker
                    numberOfWeeks={66}
                    isSelected={false}
                    onSelect={() => {}}
                />
                <AntallBarn childCount={3} label={translate('flere_barn')} />
                <AntallUker
                    numberOfWeeks={95}
                    isSelected={false}
                    onSelect={() => {}}
                />
                <AntallUker
                    numberOfWeeks={115}
                    isSelected={false}
                    onSelect={() => {}}
                />
            </div>
            <div className={cls.element('dinLønn')}>Sann</div>
        </div>
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
        childCountIllustration.push(<span>👶</span>);
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
