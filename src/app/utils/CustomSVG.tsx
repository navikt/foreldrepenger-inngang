import * as React from 'react';

export interface IconRef {
    id: string;
    viewBox: string;
}

interface Props {
    iconRef: IconRef;
    size?: number;
    className?: string;
}

const CustomSVGFromSprite: React.StatelessComponent<Props> = ({
    iconRef,
    size,
    className,
    ...other
}) => {
    const viewBox = { 'view-box': iconRef.viewBox };
    return (
        <svg
            className={className}
            height={size}
            width={size}
            {...viewBox}
            {...other}>
            <use xlinkHref={`#${iconRef.id}`} />
        </svg>
    );
};

interface FlexibleProps {
    iconRef: IconRef;
    height?: number;
    width?: number;
    className?: string;
}

export const FlexibleSvg: React.StatelessComponent<FlexibleProps> = ({
    iconRef,
    height,
    width,
    className,
    ...other
}) => {
    const viewBox = { 'view-box': iconRef.viewBox };
    return (
        <svg
            className={className}
            height={height}
            width={width}
            {...viewBox}
            {...other}>
            <use xlinkHref={`#${iconRef.id}`} />
        </svg>
    );
};

export default CustomSVGFromSprite;
