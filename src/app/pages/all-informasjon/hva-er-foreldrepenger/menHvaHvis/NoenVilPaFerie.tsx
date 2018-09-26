import React from 'react';

const NoenVilPaFerie = (props: any) => (
    <svg width={109} height={109} tabIndex="0" {...props}>
        <title>Noen vil på ferie?</title>
        <g transform="translate(5 5)" fill="none" fillRule="evenodd">
            <circle stroke="#0067C5" cx={49.5} cy={49.5} r={53.5} />
            <text
                fontFamily="SourceSansPro-Regular, Source Sans Pro"
                fontSize={16}
                fill="#0067C5"
                transform="translate(12 14)">
                <tspan x={1.14} y={44}>
                    noen vil på
                </tspan>
                <tspan x={19.22} y={66}>
                    ferie?
                </tspan>
            </text>
            <g stroke="#0067C5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M60.5 30.484h-6c-2.451 0-4.621.788-5.99 2M54.5 30.5l-3.316-8.367M48.605 15.624l-.368-.929M48.605 15.624c-4.877 1.933-8.044 5.486-6.62 9.08l.367.93 2.325-.923.561-1.297 1.298.561 9.296-3.685.561-1.297 1.298.56 2.324-.92-.368-.93c-1.425-3.595-6.165-4.012-11.042-2.079zM60.5 36.5c-1 0-2-.896-2-2 0 1.104-1 2-2 2s-2-.896-2-2c0 1.104-1 2-2 2s-2-.896-2-2c0 1.104-1 2-2 2s-2-.896-2-2c0 1.104-1 2-2 2s-2-.896-2-2c0 1.104-1 2-2 2s-2-.896-2-2c0 .69-.463 1.299-1 1.659" />
            </g>
        </g>
    </svg>
);

export default NoenVilPaFerie;
