import React from 'react';
import Helmet from 'react-helmet';

const HeaderInformasjon = ({
    title,
    siteDescription,
    propTitle,
    propDescription,
    imageUrl,
    siteUrl,
    imageLargeUrl
}: {
    title?: string;
    siteDescription: string;
    propTitle: string;
    propDescription: string;
    imageUrl?: string;
    siteUrl: string;
    imageLargeUrl?: string;
}) => {
    return (
        <Helmet>
            {title && <title>{title}</title>}
            <meta charSet="utf-8" />
            <meta name="description" content={siteDescription} />
            <meta property="og:title" content={propTitle} />
            <meta property="og:description" content={propDescription} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:url" content={siteUrl} />
            <meta name="twitter:card" content={imageLargeUrl} />
        </Helmet>
    );
};

export default HeaderInformasjon;
