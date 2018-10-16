import React from 'react';

interface Props {
    color: string;
}

const CakeSvg: React.StatelessComponent<Props> = ({ color, ...props }) => {
    return (
        <svg width={28} height={26} xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
            <title>Kvote</title>
            <defs>
                <path id="cake-svg-a" d="M11 18V0l18 12.762z" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <g transform="translate(1 -4)">
                    <path
                        d="M10 29c5.523 0 10-4.477 10-10a9.969 9.969 0 0 0-.781-3.882 10.034 10.034 0 0 0-3.268-4.155A9.955 9.955 0 0 0 10 9C4.477 9 0 13.477 0 19s4.477 10 10 10z"
                        stroke={color}
                        strokeWidth={1}
                    />
                    <mask id="cake-svg-b" fill="#fff">
                        <use xlinkHref="#cake-svg-a" />
                    </mask>
                    <circle fill={color} mask="url(#cake-svg-b)" cx={11.5} cy={17.5} r={13.5} />
                </g>
                <path stroke="#FFF" strokeWidth={2} d="M11 0v15.13l16.587-4.832" />
            </g>
        </svg>
    );
};

export default CakeSvg;
