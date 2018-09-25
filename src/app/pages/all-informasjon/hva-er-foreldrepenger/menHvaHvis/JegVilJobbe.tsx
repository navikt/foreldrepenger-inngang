import React from 'react'

const JegVilJobbe = (props: any) => (
    <svg width={109} height={109} tabIndex="0" {...props}>
        <title>Jeg vil jobbe?</title>
        <g transform="translate(5 5)" fill="none" fillRule="evenodd">
            <circle stroke="#0067C5" cx={49.5} cy={49.5} r={53.5} />
            <text
                fontFamily="SourceSansPro-Regular, Source Sans Pro"
                fontSize={16}
                fill="#0067C5"
                transform="translate(12 14)"
            >
                <tspan x={18.26} y={44}>
                    jeg vil
                </tspan>
                <tspan x={15.028} y={66}>
                    jobbe?
                </tspan>
            </text>
            <g stroke="#0067C5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M48.5 37.5h-11v-14h11zM46.5 17.5h-7v6h7zM42.5 17.5v-3M60.5 37.5h-9v-18h9zM53.5 21.5h5M53.5 23.5h5M53.5 25.5h5M53.5 27.5h5M53.5 29.5h5M53.5 31.5h5M53.5 33.5h5M39.5 26.5h7M39.5 29.5h7M39.5 32.5h7M41.5 19.5h3M41.5 21.5h3" />
                <path d="M44 35.5h-2v2h2zM57.5 35.5h-2v2h2z" />
            </g>
        </g>
    </svg>
)

export default JegVilJobbe;
