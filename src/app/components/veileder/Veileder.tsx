import * as React from 'react';
import Veilederpanel from 'nav-frontend-veilederpanel';
import classnames from 'classnames';
import VeilederSvg from './VeilederSvg';
import './veileder.less';

interface VeilederProps {
    fargetema?: 'normal' | 'suksess' | 'advarsel' | 'feilmelding';
    ansikt?: 'glad' | 'undrende' | 'skeptisk';
    kompakt?: boolean;
    children: React.ReactChild;
    className?: any;
}

const Veileder = (props: VeilederProps) => {
    const { fargetema = 'normal', ansikt = 'glad', kompakt = true, children, className } = props;

    const svgProps = {
        className: classnames(className, 'veileder', `veileder--${ansikt}`)
    };

    return (
        <Veilederpanel
            svg={<VeilederSvg svgProps={svgProps} />}
            fargetema={fargetema}
            kompakt={kompakt}>
            {children}
        </Veilederpanel>
    );
};

export default Veileder;
