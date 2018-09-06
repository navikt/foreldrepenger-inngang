import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import './frontpageHeader.less';

const FrontpageHeader = () => {
    return (
        <div className="frontPageHeader">
            <TypografiBase type="systemtittel">
                Hva vil du søke om?
            </TypografiBase>
        </div>
    );
};

export default FrontpageHeader;
