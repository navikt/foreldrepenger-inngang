import React from 'react';

interface Props {
    size: string;
}

const JegVilJobbe: React.StatelessComponent<Props> = ({ size }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 109 109"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>Jeg vil jobbe</title>
            <defs />
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-200.000000, -49.000000)">
                    <g transform="translate(74.000000, -5.000000)">
                        <g transform="translate(0.000000, 59.000000)">
                            <g transform="translate(131.000000, 0.000000)">
                                <circle stroke="#0067C5" cx="49.5" cy="49.5" r="53.5" />
                                <g fillRule="evenodd" transform="translate(12.000000, 14.000000)">
                                    <text
                                        fontFamily="SourceSansPro-Regular, Source Sans Pro"
                                        fontSize="16"
                                        fontWeight="normal"
                                        line-spacing="22"
                                        fill="#0067C5"
                                    >
                                        <tspan x="14.26" y="44">
                                            Jeg vil{' '}
                                        </tspan>
                                        <tspan x="15.028" y="66">
                                            jobbe?
                                        </tspan>
                                    </text>
                                    <g
                                        transform="translate(25.000000, 0.000000)"
                                        stroke="#0067C5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polygon points="11.5 23.5 0.5 23.5 0.5 9.5 11.5 9.5" />
                                        <polygon points="9.5 3.5 2.5 3.5 2.5 9.5 9.5 9.5" />
                                        <path d="M5.5,3.5 L5.5,0.5" />
                                        <polygon points="23.5 23.5 14.5 23.5 14.5 5.5 23.5 5.5" />
                                        <path d="M16.5,7.5 L21.5,7.5" />
                                        <path d="M16.5,9.5 L21.5,9.5" />
                                        <path d="M16.5,11.5 L21.5,11.5" />
                                        <path d="M16.5,13.5 L21.5,13.5" />
                                        <path d="M16.5,15.5 L21.5,15.5" />
                                        <path d="M16.5,17.5 L21.5,17.5" />
                                        <path d="M16.5,19.5 L21.5,19.5" />
                                        <path d="M2.5,12.5 L9.5,12.5" />
                                        <path d="M2.5,15.5 L9.5,15.5" />
                                        <path d="M2.5,18.5 L9.5,18.5" />
                                        <path d="M4.5,5.5 L7.5,5.5" />
                                        <path d="M4.5,7.5 L7.5,7.5" />
                                        <polygon points="7 21.5 5 21.5 5 23.5 7 23.5" />
                                        <polygon points="20.5 21.5 18.5 21.5 18.5 23.5 20.5 23.5" />
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

export default JegVilJobbe;
