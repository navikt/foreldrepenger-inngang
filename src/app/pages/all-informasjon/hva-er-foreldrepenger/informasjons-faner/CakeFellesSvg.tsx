import React from 'react';

interface Props {
    color: string;
}

const CakeFellesSvg: React.StatelessComponent<Props> = ({
    color,
    ...props
}) => {
    return (
        <svg
            width="29px"
            height="30px"
            viewBox="0 0 29 30"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}>
            <title>Group 38</title>
            <desc>Created with Sketch.</desc>
            <defs>
                <polygon
                    id="path-1"
                    points="20.243554 0 0 13.0696607 9.65769879 34.9984326 31 36 20.2952974 19.696961"
                />
            </defs>
            <g
                id="Symbols"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd">
                <g
                    id="Fakta-hvaer/komponent/morsdel"
                    transform="translate(-518.000000, -100.000000)">
                    <g
                        id="Group-8"
                        transform="translate(500.000000, 96.000000)">
                        <g
                            id="Group-5"
                            transform="translate(19.000000, 0.000000)">
                            <g id="Group-38">
                                <circle
                                    id="Oval-2-Copy-15"
                                    stroke={color}
                                    strokeWidth="0.5"
                                    cx="10"
                                    cy="19"
                                    r="10"
                                />
                                <g
                                    id="Group-37-Copy-5"
                                    transform="translate(18.500000, 18.000000) scale(-1, 1) translate(-18.500000, -18.000000) translate(3.000000, 0.000000)">
                                    <mask id="mask-2" fill="white">
                                        <use xlinkHref="#path-1" />
                                    </mask>
                                    <g id="Mask" />
                                    <g id="Group-37-Copy-2" mask="url(#mask-2)">
                                        <g transform="translate(6.000000, 4.000000)">
                                            <circle
                                                id="Oval-2"
                                                fill={color}
                                                cx="15"
                                                cy="15"
                                                r="15"
                                            />
                                            <ellipse
                                                id="Oval-5"
                                                fill="#3E3832"
                                                cx="15.28125"
                                                cy="15.2713358"
                                                rx="1"
                                                ry="1"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default CakeFellesSvg;
