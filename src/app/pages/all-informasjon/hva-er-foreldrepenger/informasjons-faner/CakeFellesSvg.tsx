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
            width={29}
            height={31}
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}>
            <title>Group 5</title>
            <defs>
                <path
                    id="a"
                    d="M20.244 0L0 13.07l9.658 21.928L31 36 20.295 19.697z"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <g transform="translate(1 -4)">
                    <circle
                        stroke={color}
                        strokeWidth={0.5}
                        cx={10}
                        cy={19}
                        r={10}
                    />
                    <g transform="matrix(-1 0 0 1 34 0)">
                        <mask id="b" fill="#fff">
                            <use xlinkHref="#a" />
                        </mask>
                        <g mask="url(#b)">
                            <g transform="translate(6 4)">
                                <circle fill={color} cx={15} cy={15} r={15} />
                                <ellipse
                                    fill={color}
                                    cx={15.281}
                                    cy={15.271}
                                    rx={1}
                                    ry={1}
                                />
                            </g>
                        </g>
                    </g>
                </g>
                <path stroke="#FFF" strokeWidth={2} d="M6 30l9-14.227V0" />
            </g>
        </svg>
    );
};

export default CakeFellesSvg;
