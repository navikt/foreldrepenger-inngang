import * as React from 'react';
import BEMHelper from '../../utils/bem';

const cls = BEMHelper('informasjonstavle');

const UnderProduksjon = ({ group }: { group: string }) => {
    return (
        <svg
            className={cls.element('underArbeid-ikon' + group)}
            height="102px"
            width="102px"
            version="1.1"
            viewBox="0 0 102 102"
        >
            <g fill="none" stroke="none" strokeWidth="1">
                <g transform="translate(-658.000000, -429.000000)">
                    <g transform="translate(0.000000, 177.000000)">
                        <g transform="translate(240.000000, 250.000000)">
                            <g transform="translate(280.000000, 0.000000)">
                                <g transform="translate(138.000000, 0.000000)">
                                    <g transform="translate(0.000000, 2.000000)">
                                        <polygon
                                            fill="#3E3832"
                                            points="44.9203102 0 102 57.0796898 102 100.92031 1.07968978 2.13162821e-14"
                                        />
                                        <polygon
                                            fill="#FDBC6D"
                                            points="102 101.766231 0.347848954 1.42108547e-14 1.76126963 0 102 100.351224"
                                        />
                                        <polygon
                                            fill="#FDBC6D"
                                            points="102 57.5219482 44.7285348 0 46.1396658 7.10542736e-15 102 56.1046454"
                                        />
                                    </g>
                                    <text
                                        fill="#FDBC6D"
                                        fontFamily="SourceSansPro-Bold, Source Sans Pro"
                                        fontSize="16"
                                        transform="translate(60.669048, 40.669048) rotate(45.000000) translate(-60.669048, -40.669048) "
                                    >
                                        <tspan x="29.0210476" y="46.6690476">
                                            KOMMER
                                        </tspan>
                                    </text>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default UnderProduksjon;
