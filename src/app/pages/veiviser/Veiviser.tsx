import React from 'react';
import './veiviser.less'
import BEMHelper from "../../utils/bem";
import Sidebanner from "../../components/sidebanner/Sidebanner";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { getTranslation, IntlProps, withIntl } from '../../intl/intl';
import Header from './komponenter/header/Header';
import Valg from "./komponenter/valg/Valg";

const cls = BEMHelper('veiviser');

interface Props {
    location: any;
}

const Veiviser: React.StatelessComponent<Props & IntlProps> = ({location, lang}) =>  {

    return (
        <div className={cls.className}>
            <div className={cls.element('header')} >
               <Sidebanner text={getTranslation('veiviser.sidebanner.tittel', lang)}/>
            </div>
            <div className={cls.element('body')}>
                <div className={cls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <Header/>
                    <Valg/>
                </div>
            </div>
        </div>
    );
};

export default withIntl(Veiviser);