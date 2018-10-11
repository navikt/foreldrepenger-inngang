import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Lenke from 'nav-frontend-lenker';
import CustomSVGFromSprite from './CustomSVG';
import BEMHelper from './bem';
import classnames from 'classnames';
import './withLink.less';

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

const navlab = process.env.NODE_ENV === 'navlab';
const cls = BEMHelper('withLink');

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
                <a className={className} href={navlab ? '/under-arbeid' : url}>
                    {children}
                </a>
            );
        } else if (navlab) {
            return (
                <span
                    title="Lenke under arbeid"
                    className={classnames(cls.className, cls.modifier('disabled'), className)}>
                    {children}
                </span>
            );
        }

        return (
            <Lenke className={classnames(cls.className, className)} href={url}>
                {children}
                {addExternalIcon && (
                    <span className={cls.element('icon')}>
                        <CustomSVGFromSprite size={15} iconRef={externalLinkIcon} />
                    </span>
                )}
            </Lenke>
        );
    } else {
        return (
            <Link className={classnames(cls.className, className)} to={url}>
                {children}
            </Link>
        );
    }
};

export default withLink;
