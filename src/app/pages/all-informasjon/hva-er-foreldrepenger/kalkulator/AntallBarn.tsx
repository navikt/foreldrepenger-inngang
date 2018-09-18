import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import { BEMWrapper } from '../../../../utils/bem';

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
        childCountIllustration.push(<span key={i}>👶</span>);
    }

    return (
        <div className={parentCls.element('centerItems')}>
            <div>{childCountIllustration}</div>
            <TypografiBase type="normaltekst">{label}</TypografiBase>
        </div>
    );
};

export default AntallBarn;
