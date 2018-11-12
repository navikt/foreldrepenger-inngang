import * as React from 'react';
import {IntlProps, withIntl} from "../../../../intl/intl";

export interface Tabs {
    label: string;
    icon: string;
}


const Tab: React.StatelessComponent<Tabs & IntlProps> = (
    {

    }
) => {
    return (
      <div>
        tab
      </div>
    );
};

export default withIntl(Tab);