import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Lenke from 'nav-frontend-lenker';
import CustomSVGFromSprite from './CustomSVG';

const externalLinkIcon = require('../assets/icons/external.svg').default;

const withLink = (url: string, componentToRender: ReactNode, urlIsExternal?: boolean) => {
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
    addExternalIcon,
    noStyling,
    className,
    children
}: {
    url: string;
    urlIsExternal?: boolean;
    addExternalIcon?: boolean;
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
                {addExternalIcon && (
                    <span
                        style={{
                            marginLeft: '0.5rem',
                            position: 'relative',
                            top: '4px'
                        }}>
                        <CustomSVGFromSprite size={18} iconRef={externalLinkIcon} />
                    </span>
                )}
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
