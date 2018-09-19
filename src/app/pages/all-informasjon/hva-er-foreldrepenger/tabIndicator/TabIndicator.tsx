import * as React from 'react';
import BEMHelper from '../../../../utils/bem';
import './TabIndicator.less';

const cls = BEMHelper('tabIndicator');

interface Props {
classTab: number,
    totalNumberOfTabs: number;
}

function mapclass(key: number) {

    switch (key) {
        case 0:
            return 12;
        case 1:
            return 30;
        case 2:
            return 49;
        case 3:
            return 66.5;
        case 4:
            return 85;
        default:
            return 12;
    }
}

class TabIndicator extends React.Component<Props> {



    render = () => {


        return (
            <div className={cls.className} style={{
                paddingLeft: `${mapclass(this.props.classTab)}%`,
            }}>

            <span>
         <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" fill="#efefef" />
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>

            </span>
            </div>
        )
    }
}

export default TabIndicator;