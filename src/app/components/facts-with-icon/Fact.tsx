import * as React from 'react';
import './factsWithIcon.less';
import BEMHelper from 'app/utils/bem';
import { IconRef, FlexibleSvg } from 'app/utils/CustomSVG';
import { StrukturertTekst as StrukturertTekstType } from 'app/utils/strukturertTekst';
import StrukturertTekst from '../strukturert-tekst/StrukturertTekst';

const cls = BEMHelper('factsWithIcon');

interface Props {
    icon: IconRef;
    content: StrukturertTekstType;
}

const Fact = ({ icon, content }: Props) => (
    <div className={cls.element('fact')}>
        <div className={cls.element('svgContainer')}>
            <FlexibleSvg width={40} height={56} iconRef={icon} />
        </div>
        <StrukturertTekst tekst={content} />
    </div>
);

export default Fact;
