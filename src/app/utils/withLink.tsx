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

const cls = BEMHelper('withLink');

interface Props {
    url: string;
    urlIsExternal?: boolean;
    addExternalIcon?: boolean;
    noStyling?: boolean;
    noTabbing?: boolean;
    className?: string;
    style?: any;
    bypassNavlab?: boolean;
    ariaLabel?: string;
    children: ReactNode;
}

const SCROLL_OFFSET = 90;

export class WithLink extends React.Component<Props> {
    goToSection = (url: string) => (event: any) => {
        event.preventDefault();
        window.history.replaceState(null, '', url);

        // Remove hash to retrieve ID
        const id = url.slice(1);
        const sectionNode = document.getElementById(id);

        if (sectionNode) {
            window.scroll({
                top: sectionNode.offsetTop - SCROLL_OFFSET,
                behavior: 'smooth'
            });
        }
    };

    render = () => {
        const {
            urlIsExternal,
            url,
            addExternalIcon,
            noStyling,
            noTabbing,
            className,
            style,
            ariaLabel,
            children
        } = this.props;
        const classNames = classnames(cls.className, className, {
            [cls.element('noStyling')]: noStyling
        });

        if (urlIsExternal) {
            if (noStyling) {
                return (
                    <a
                        tabIndex={noTabbing ? -1 : 0}
                        target="_blank"
                        className={className}
                        href={url}>
                        {children}
                    </a>
                );
            } else {
                return (
                    <Lenke target="_blank" className={classNames} href={url}>
                        {children}
                        {addExternalIcon && (
                            <span className={cls.element('icon')}>
                                <CustomSVGFromSprite size={15} iconRef={externalLinkIcon} />
                            </span>
                        )}
                    </Lenke>
                );
            }
        } else if (url.charAt(0) === '#') {
            if (noStyling) {
                return (
                    <span
                        role="link"
                        aria-label={ariaLabel}
                        className={className + ' anchorLink'}
                        style={style}
                        onClick={this.goToSection(url)}>
                        {children}
                    </span>
                );
            } else {
                return (
                    <Lenke
                        className={className + ' anchorLink'}
                        style={style}
                        onClick={this.goToSection(url)}
                        href={url}>
                        {children}
                    </Lenke>
                );
            }
        } else {
            return (
                <Link style={style} tabIndex={noTabbing ? -1 : 0} className={classNames} to={url}>
                    {children}
                </Link>
            );
        }
    };
}

export default withLink;
