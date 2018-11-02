import React from 'react';
import Helmet from 'react-helmet';

const HeaderInformasjon = ({
    title,
    siteDescription,
    propTitle,
    propDescription,
    siteUrl,
}: {
    title: string;
    siteDescription: string;
    propTitle: string;
    propDescription: string;
    siteUrl: string;
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="description" content={siteDescription} />
            <meta property="og:title" content={propTitle} />
            <meta property="og:description" content={propDescription} />
            <meta property="og:url" content={siteUrl} />
        </Helmet>
    );
};

export default HeaderInformasjon;
