import React, { ReactNodeArray } from 'react';
import TypografiBase from 'nav-frontend-typografi';
import NavFrontendChevron from 'nav-frontend-chevron';
import Lenke from 'nav-frontend-lenker';
import BEMHelper from '../../utils/bem';
import './breadcrumbs.less';

const cls = BEMHelper('breadcrumbs');

const Breadcrumbs = ({
    route
}: {
    route: Array<{ url: string; label: string }>;
}) => {
    let breadcrumbChain: ReactNodeArray = [];
    route.forEach((path, index) => {
        if (index !== 0) {
            breadcrumbChain.push(<NavFrontendChevron type="høyre" />);
        }

        breadcrumbChain.push(
            <TypografiBase type="normaltekst" className={cls.element('item')}>
                <Lenke href={path.url}>{path.label}</Lenke>
            </TypografiBase>
        );
    });

    return <div className={cls.className}>{breadcrumbChain}</div>;
};

export default Breadcrumbs;
