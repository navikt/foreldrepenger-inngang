import React from 'react';
import Helmet from 'react-helmet';

const HeaderInformasjon = ({
    title,
    description,
    imageUrl,
    siteUrl,
    imageLargeUrl
}: {
    title: string;
    description: string;

    imageUrl?: string;
    siteUrl: string;
    imageLargeUrl?: string;
}) => {
    const pageTitle = `${title} - www.nav.no`;

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta charSet="utf-8" />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {imageUrl && <meta property="og:image" content={imageUrl} />}
            {siteUrl && <meta property="og:url" content={siteUrl} />}
            {imageLargeUrl && <meta name="twitter:card" content={imageLargeUrl} />}
        </Helmet>
    );
};

export default HeaderInformasjon;
