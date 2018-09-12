import React, {ReactNode} from 'react';
import PanelBase from 'nav-frontend-paneler';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../utils/bem';
import CustomSVG from "../../utils/CustomSVG";
import './kort.less';

const cls = BEMHelper('kort');

const Kort = ({
                  title,
                  filepath,
                  children
              }: {
    title: string;
    filepath: string;
    children: ReactNode;
}) => {
    return (

        <div className={cls.className}>
            <div className="kortSvg">
                <CustomSVG
                    className="kort__svg"
                    iconRef={require(`./${filepath}.svg`).default}
                    size={120}
                />
            </div>

            <PanelBase>
                <div className={cls.element('title')}>
                    <TypografiBase type="systemtittel">{title}</TypografiBase>
                </div>
                {children}
            </PanelBase>
        </div>
    );
};

export default Kort;

