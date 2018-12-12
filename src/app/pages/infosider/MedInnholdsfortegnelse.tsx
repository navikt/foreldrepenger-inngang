import * as React from 'react';
import classnames from 'classnames';
import './infosider.less';
import BEMHelper from 'app/utils/bem';
import Innholdsfortegnelse from './innholdsfortegnelse/Innholdsfortegnelse';
import MediaQuery from 'react-responsive';
import Mobilmeny from './mobilmeny/Mobilmeny';

const cls = BEMHelper('infosider');

interface MedInnholdsfortegnelseProps {
    sections: string[];
    button: {
        label: string;
        url: string;
    };
    children: React.ReactNode;
}

const MedInnholdsfortegnelse = ({ sections, button, children }: MedInnholdsfortegnelseProps) => (
    <div className={classnames(cls.element('container'), cls.modifier('medInnholdsfortegnelse'))}>
        <MediaQuery minWidth={1072}>
            <aside className={cls.element('sidebar')}>
                <Innholdsfortegnelse
                    sections={sections}
                    button={{
                        label: button.label
                    }}
                    buttonUrl={button.url}
                />
            </aside>
        </MediaQuery>
        <MediaQuery maxWidth={1071}>
            <Mobilmeny sections={sections} />
        </MediaQuery>
        {children}
        <div className={cls.element('filler')} />
    </div>
);

export default MedInnholdsfortegnelse;
