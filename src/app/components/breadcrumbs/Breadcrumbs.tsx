import React, { Component, ReactNodeArray } from 'react';
import TypografiBase from 'nav-frontend-typografi';
import NavFrontendChevron from 'nav-frontend-chevron';
import BEMHelper from '../../utils/bem';
import { Link } from 'react-router-dom';
import './breadcrumbs.less';
import translate from '../../utils/translate';

const cls = BEMHelper('breadcrumbs');

interface BreadcrumbsProps {
    path: string;
}

const parsePath = (path: string) => {
    const parts = path.split('/');

    // Remove any trailing slash ("/")
    if (parts.length > 1 && parts[parts.length - 1] === '') {
        parts.pop();
    }

    return parts.map((part, index) => {
        const recombinedParts = parts.slice(0, index + 1);
        const url =
            recombinedParts.length === 1 ? '/' : recombinedParts.join('/');

        return {
            url,
            label: translate(`route.${part}`)
        };
    });
};

class Breadcrumbs extends Component<BreadcrumbsProps> {
    state: {
        windowWidth?: number;
    } = {
        windowWidth: undefined
    };

    componentWillMount = () => {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    };

    componentWillUnmount = () => {
        this.updateWindowDimensions();
        window.removeEventListener('resize', this.updateWindowDimensions);
    };

    updateWindowDimensions = () => {
        this.setState({
            windowWidth: window.innerWidth
        });
    };

    render() {
        const breadcrumbChain: ReactNodeArray = [];
        const parsedPath = parsePath(this.props.path);

        if (this.state.windowWidth && this.state.windowWidth < 576) {
            const routeLength = parsedPath.length;
            const lastUrl = parsedPath[routeLength - 2].url;

            breadcrumbChain.push(
                <div aria-hidden={true}>
                    <NavFrontendChevron key="chevron" type="venstre" />
                </div>
            );
            breadcrumbChain.push(
                <TypografiBase
                    aria-label="Gå til forrige side"
                    key="tilbake"
                    type="normaltekst"
                    className={cls.element('item')}>
                    <Link to={lastUrl}>{translate('tilbake')}</Link>
                </TypografiBase>
            );
        } else {
            parsedPath.forEach((path, index) => {
                if (index !== 0) {
                    breadcrumbChain.push(
                        <div aria-hidden={true}>
                            <NavFrontendChevron
                                key={`chevron${index}`}
                                type="høyre"
                            />
                        </div>
                    );
                }

                const current = index === parsedPath.length - 1;
                breadcrumbChain.push(
                    <TypografiBase
                        aria-label={current ? 'Denne siden' : 'Tidligere side'}
                        aria-current={current ? 'page' : ''}
                        key={`crumb${index}`}
                        type="normaltekst"
                        className={cls.element('item')}>
                        {current ? (
                            path.label
                        ) : (
                            <Link to={path.url}>{path.label}</Link>
                        )}
                    </TypografiBase>
                );
            });
        }

        return (
            <div
                role="navigation"
                aria-label="breadcrumb"
                className={cls.className}>
                {breadcrumbChain}
            </div>
        );
    }
}

export default Breadcrumbs;
