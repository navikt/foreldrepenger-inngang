import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import { BEMWrapper } from '../../../../utils/bem';
import { FlexibleSvg } from 'app/utils/CustomSVG';

const icon = require('../../../../assets/icons/tåteflaske.svg').default;

const AntallBarn = ({
    parentCls,
    childCount,
    label
}: {
    parentCls: BEMWrapper;
    childCount: number;
    label: string;
}) => {
    const childCountIllustration = [];
    for (let i = 0; i < childCount; i++) {
        childCountIllustration.push(
            <span key={i} className={parentCls.element('childContainer')}>
                <FlexibleSvg iconRef={icon} height={27} width={18} />
            </span>
        );
    }

    return (
        <div className={parentCls.element('numberOfChildren')}>
            <div>{childCountIllustration}</div>
            <TypografiBase type="normaltekst">{label}</TypografiBase>
        </div>
    );
};

export default AntallBarn;
