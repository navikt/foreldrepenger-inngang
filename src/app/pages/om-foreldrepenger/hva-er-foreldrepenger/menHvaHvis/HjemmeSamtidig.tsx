import React from 'react';

interface Props {
    size: string;
}

const HjemmeSamtidig: React.StatelessComponent<Props> = ({ size }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 109 109"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>Vi er hjemme samtidig</title>
            <defs />
            <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Fakta-hvaer/komponent/periode/1"
                    transform="translate(-462.000000, -49.000000)">
                    <g id="Group-3" transform="translate(74.000000, -5.000000)">
                        <g id="Stacked-Group" transform="translate(0.000000, 59.000000)">
                            <g id="Toggle/av" transform="translate(393.000000, 0.000000)">
                                <circle stroke="#0067C5" cx="49.5" cy="49.5" r="53.5" />
                                <g
                                    id="Group"
                                    fillRule="evenodd"
                                    transform="translate(12.000000, 14.000000)">
                                    <text
                                        id="Text"
                                        fontFamily="SourceSansPro-Regular, Source Sans Pro"
                                        fontSize="16"
                                        fontWeight="normal"
                                        line-spacing="22"
                                        fill="#0067C5">
                                        <tspan x="9.972" y="44">
                                            Hjemme{' '}
                                        </tspan>
                                        <tspan x="5.26" y="66">
                                            samtidig?
                                        </tspan>
                                    </text>
                                    <g
                                        id="Icons/house/outline/blue"
                                        transform="translate(25.000000, 0.000000)"
                                        stroke="#0067C5"
                                        strokeLinejoin="round">
                                        <path
                                            d="M0.5,22.5 L23.5,22.5"
                                            id="Stroke-8071"
                                            strokeLinecap="round"
                                        />
                                        <polygon
                                            id="Stroke-8072"
                                            strokeLinecap="round"
                                            points="20.5 12.4995 3.5 12.4995 3.5 22.4995 20.5 22.4995"
                                        />
                                        <polygon
                                            id="Stroke-8073"
                                            strokeLinecap="round"
                                            points="12 4 0.5 12.5 23.5 12.5"
                                        />
                                        <polyline
                                            id="Stroke-8074"
                                            points="20.5 10.291 20.5 6 17.5 6 17.5 8.078"
                                        />
                                        <polygon
                                            id="Stroke-8075"
                                            points="9.5 15.4995 6.5 15.4995 6.5 20.4995 9.5 20.4995"
                                        />
                                        <polygon
                                            id="Stroke-8076"
                                            points="17.5 18.4995 12.5 18.4995 12.5 15.4995 17.5 15.4995"
                                        />
                                        <polygon
                                            id="Stroke-8077"
                                            points="10.5 22.4995 5.5 22.4995 5.5 20.4995 10.5 20.4995"
                                        />
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
export default HjemmeSamtidig;
