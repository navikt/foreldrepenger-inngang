import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Lenke from 'nav-frontend-lenker';

const withLink = (
    url: string,
    componentToRender: ReactNode,
    urlIsExternal?: boolean
) => {
    if (urlIsExternal) {
        return (
            <a href={url} aria-label="This is a link">
                {componentToRender}
            </a>
        );
    } else {
        return <Link to={url}>{componentToRender}</Link>;
    }
};

export const WithLink = ({
    url,
    urlIsExternal,
    className,
    children
}: {
    url: string;
    urlIsExternal?: boolean;
    className?: string;
    children: ReactNode;
}) => {
    if (urlIsExternal) {
        return (
            <Lenke className={className} href={url} aria-label="Lenke">
                {children}
            </Lenke>
        );
    } else {
        return (
            <Link className={className} to={url}>
                {children}
            </Link>
        );
    }
};

export default withLink;
