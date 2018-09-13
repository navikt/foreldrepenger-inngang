import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

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

export default withLink;
