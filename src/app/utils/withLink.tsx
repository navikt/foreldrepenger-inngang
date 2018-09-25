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
    noStyling,
    className,
    children
}: {
    url: string;
    urlIsExternal?: boolean;
    noStyling?: boolean;
    className?: string;
    children: ReactNode;
}) => {
    if (urlIsExternal) {
        if (noStyling) {
            return (
                <a className={className} href={url}>
                    {children}
                </a>
            );
        }
        return (
            <Lenke className={className} href={url}>
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
