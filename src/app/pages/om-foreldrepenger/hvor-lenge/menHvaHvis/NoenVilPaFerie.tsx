import React from 'react';

interface Props {
    size: string;
}

const NoenVilPaFerie: React.StatelessComponent<Props> = ({ size }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 109 109"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>Noen vil på ferie</title>
            <defs />
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-69.000000, -49.000000)">
                    <g transform="translate(74.000000, -5.000000)">
                        <g transform="translate(0.000000, 59.000000)">
                            <g>
                                <circle stroke="#0067C5" cx="49.5" cy="49.5" r="53.5" />
                                <g fillRule="evenodd" transform="translate(12.000000, 14.000000)">
                                    <text
                                        fontFamily="SourceSansPro-Regular, Source Sans Pro"
                                        fontSize="16"
                                        fontWeight="normal"
                                        line-spacing="22"
                                        fill="#0067C5">
                                        <tspan x="7.14" y="44">
                                            Jeg vil på{' '}
                                        </tspan>
                                        <tspan x="19.22" y="66">
                                            ferie?
                                        </tspan>
                                    </text>
                                    <g
                                        transform="translate(25.000000, 0.000000)"
                                        stroke="#0067C5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M23.5,16.4844 L17.5,16.4844 C15.049,16.4844 12.879,17.2724 11.51,18.4844" />
                                        <path d="M17.5,16.5 L14.184,8.133" />
                                        <path d="M11.6055,1.6245 L11.2365,0.6955" />
                                        <path d="M11.6055,1.6245 C6.7275,3.5575 3.5605,7.1105 4.9845,10.7035 L5.3525,11.6335 L7.6765,10.7115 L8.2385,9.4135 L9.5365,9.9755 L18.8325,6.2905 L19.3935,4.9935 L20.6915,5.5535 L23.0155,4.6325 L22.6475,3.7025 C21.2225,0.1085 16.4825,-0.3085 11.6055,1.6245 L11.6055,1.6245 Z" />
                                        <path d="M23.5,22.5 C22.5,22.5 21.5,21.604 21.5,20.5 C21.5,21.604 20.5,22.5 19.5,22.5 C18.5,22.5 17.5,21.604 17.5,20.5 C17.5,21.604 16.5,22.5 15.5,22.5 C14.5,22.5 13.5,21.604 13.5,20.5 C13.5,21.604 12.5,22.5 11.5,22.5 C10.5,22.5 9.5,21.604 9.5,20.5 C9.5,21.604 8.5,22.5 7.5,22.5 C6.5,22.5 5.5,21.604 5.5,20.5 C5.5,21.604 4.5,22.5 3.5,22.5 C2.5,22.5 1.5,21.604 1.5,20.5 C1.5,21.19 1.037,21.799 0.5,22.159" />
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
export default NoenVilPaFerie;
