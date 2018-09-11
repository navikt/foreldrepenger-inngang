import React, { Component, ReactNodeArray } from 'react';
import TypografiBase from 'nav-frontend-typografi';
import NavFrontendChevron from 'nav-frontend-chevron';
import BEMHelper from '../../utils/bem';
import { Link } from 'react-router-dom';
import './breadcrumbs.less';

const cls = BEMHelper('breadcrumbs');

interface BreadcrumbsProps {
    route: Array<{ url: string; label: string }>;
}

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
        this.setState(
            {
                windowWidth: window.innerWidth
            },
            () => {
                console.warn('Window:', this.state.windowWidth);
            }
        );
    };

    render() {
        const breadcrumbChain: ReactNodeArray = [];

        if (this.state.windowWidth && this.state.windowWidth < 576) {
            const routeLength = this.props.route.length;
            const lastUrl = this.props.route[routeLength - 2].url;
            console.warn('Current route:', this.props.route, routeLength);

            breadcrumbChain.push(
                <NavFrontendChevron key="chevron" type="venstre" />
            );
            breadcrumbChain.push(
                <TypografiBase
                    key="tilbake"
                    type="normaltekst"
                    className={cls.element('item')}>
                    <Link to={lastUrl}>Tilbake</Link>
                </TypografiBase>
            );
        } else {
            this.props.route.forEach((path, index) => {
                if (index !== 0) {
                    breadcrumbChain.push(
                        <NavFrontendChevron
                            key={`chevron${index}`}
                            type="høyre"
                        />
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
        }

        return <div className={cls.className}>{breadcrumbChain}</div>;
    }
}

export default Breadcrumbs;
