import React from 'react';

const HjemmeSamtidig = (props : any) => (
    <svg width={109} tabIndex="0" height={109} {...props}>
        <title>Hjemme samtidig?</title>
        <g transform="translate(5 5)" fill="none" fillRule="evenodd">
            <circle stroke="#0067C5" cx={49.5} cy={49.5} r={53.5} />
            <text
                fontFamily="SourceSansPro-Regular, Source Sans Pro"
                fontSize={16}
                fill="#0067C5"
                transform="translate(12 14)">
                <tspan x={9.972} y={44}>
                    hjemme
                </tspan>
                <tspan x={5.26} y={66}>
                    samtidig?
                </tspan>
            </text>
            <g stroke="#0067C5" strokeLinejoin="round">
                <path
                    d="M37.5 36.5h23M57.5 26.5h-17v10h17zM49 18l-11.5 8.5h23z"
                    strokeLinecap="round"
                />
                <path d="M57.5 24.291V20h-3v2.078M46.5 29.5h-3v5h3zM54.5 32.5h-5v-3h5zM47.5 36.5h-5v-2h5z" />
            </g>
        </g>
    </svg>
);

export default HjemmeSamtidig;
