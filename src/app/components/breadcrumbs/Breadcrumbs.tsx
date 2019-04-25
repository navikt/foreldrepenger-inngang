import React, { ReactNodeArray } from 'react';
import { injectIntl, InjectedIntl, InjectedIntlProps } from 'react-intl';
import { Link } from 'react-router-dom';
import BEMHelper from '../../utils/bem';
import classnames from 'classnames';
import getTranslation from 'app/utils/i18nUtils';
import NavFrontendChevron from 'nav-frontend-chevron';
import TypografiBase from 'nav-frontend-typografi';
import './breadcrumbs.less';
import useWindowSize from 'app/hooks/useWindowSize';

const cls = BEMHelper('breadcrumbs');

const parsePath = (path: string, intl: InjectedIntl) => {
    const parts = path.split('/');

    // Remove any trailing slash ("/")
    if (parts.length > 1 && parts[parts.length - 1] === '') {
        parts.pop();
    }

    return parts.map((part, index) => {
        const recombinedParts = parts.slice(0, index + 1);
        const url = recombinedParts.length === 1 ? '/' : recombinedParts.join('/');

        return {
            url,
            label: getTranslation(`route.${part}`, intl)
        };
    });
};

interface OwnProps {
    path: string;
}

type Props = OwnProps & InjectedIntlProps;

const Breadcrumbs = (props: Props) => {
    const { width } = useWindowSize();
    const { path, intl } = props;

    const breadcrumbChain: ReactNodeArray = [];
    const parsedPath = parsePath(path, intl);

    if (width && width < 576) {
        const routeLength = parsedPath.length;
        const lastUrl = parsedPath[routeLength - 2].url;

        breadcrumbChain.push(
            <div key="chevron" aria-hidden={true}>
                <NavFrontendChevron type="venstre" />
            </div>
        );

        breadcrumbChain.push(
            <TypografiBase
                aria-label="Gå til forrige side"
                key="tilbake"
                type="normaltekst"
                className={cls.element('item')}>
                <Link to={lastUrl}>{getTranslation('tilbake', intl)}</Link>
            </TypografiBase>
        );
    } else {
        parsedPath.forEach((part, index) => {
            if (index !== 0) {
                breadcrumbChain.push(
                    <div key={`chevron${index}`} aria-hidden={true}>
                        <NavFrontendChevron type="høyre" />
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
                    className={classnames(cls.element('item'), {
                        [cls.element('current')]: current
                    })}>
                    {current ? part.label : <Link to={part.url}>{part.label}</Link>}
                </TypografiBase>
            );
        });
    }

    return (
        <nav aria-label="Du er her" className={cls.block}>
            {breadcrumbChain}
        </nav>
    );
};

export default injectIntl(Breadcrumbs);
