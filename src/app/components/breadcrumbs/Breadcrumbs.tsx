import React, { ReactNodeArray } from 'react';
import TypografiBase from 'nav-frontend-typografi';
import NavFrontendChevron from 'nav-frontend-chevron';
import BEMHelper from '../../utils/bem';
import { Link } from 'react-router-dom';
import './breadcrumbs.less';

const cls = BEMHelper('breadcrumbs');

const Breadcrumbs = ({
    route
}: {
    route: Array<{ url: string; label: string }>;
}) => {
    const breadcrumbChain: ReactNodeArray = [];
    route.forEach((path, index) => {
        if (index !== 0) {
            breadcrumbChain.push(
                <NavFrontendChevron key={`chevron${index}`} type="høyre" />
            );
        }

        breadcrumbChain.push(
            <TypografiBase
                key={`crumb${index}`}
                type="normaltekst"
                className={cls.element('item')}>
                <Link to={path.url}>{path.label}</Link>
            </TypografiBase>
        );
    });

    return <div className={cls.className}>{breadcrumbChain}</div>;
};

export default Breadcrumbs;
