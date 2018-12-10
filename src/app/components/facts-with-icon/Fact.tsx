import * as React from 'react';
import './factsWithIcon.less';
import BEMHelper from 'app/utils/bem';
import { StrukturertTekst as StrukturertTekstType } from 'app/utils/strukturertTekst';
import StrukturertTekst from '../strukturert-tekst/StrukturertTekst';

const cls = BEMHelper('factsWithIcon');

interface Props {
    icon: React.ReactNode;
    content: StrukturertTekstType;
}

const Fact = ({ icon, content }: Props) => (
    <div className={cls.element('fact')}>
        <div className={cls.element('svgContainer')}>{icon}</div>
        <StrukturertTekst tekst={content} />
    </div>
);

export default Fact;
