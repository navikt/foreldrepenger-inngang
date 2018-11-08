import * as React from 'react';
import BEMHelper from './../../../../utils/bem';

const cls = BEMHelper('arbeidstaker');

const ArbeidstakerIkon = () => {
    return (
        <div className={cls.className}>
            <svg
                width="36px"
                height="36px"
                viewBox="0 0 45 44"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>Arbeidstaker eller frilanser</title>
                <defs />
                <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="square">
                    <g
                        transform="translate(-137.000000, -319.000000)"
                        stroke="#3E3832"
                        strokeWidth="2">
                        <g transform="translate(70.000000, 40.000000)">
                            <g transform="translate(0.000000, 172.000000)">
                                <g transform="translate(34.000000, 108.000000)">
                                    <g>
                                        <g transform="translate(34.199831, 0.000000)">
                                            <polyline points="14.5646827 6 14.5646827 0 28.1583866 0 28.1583866 6" />
                                            <path d="M16.5066404,28 L0,28 L0,8 C0,6.895 0.86902607,6 1.9419577,6 L40.7811117,6 C41.8540433,6 42.7230694,6.895 42.7230694,8 L42.7230694,28 L26.2164289,28" />
                                            <path d="M40.7811117,33 L40.7811117,40 C40.7811117,41.105 39.9120856,42 38.839154,42 L3.8839154,42 C2.81098377,42 1.9419577,41.105 1.9419577,40 L1.9419577,33" />
                                            <rect
                                                x="16.5066404"
                                                y="24"
                                                width="9.70978849"
                                                height="8"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};
export default ArbeidstakerIkon;
