import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';

const FerieforskyvningMobil = ({ intl }: InjectedIntlProps) => (
    <svg height="65px" width="100%" version="1.1" viewBox="0 0 375 65">
        <g fill="none" stroke="none" strokeWidth="1">
            <rect height="65" width="375" fill="none" x="0" y="0" />
            <rect height="27" width="97" rx="8" stroke="#634887" strokeWidth="1" x="30" y="37" />
            <rect height="27" width="48" rx="8" stroke="#634887" strokeWidth="1" x="206" y="37" />
            <rect
                height="27"
                width="104"
                rx="8"
                stroke="#634887"
                strokeWidth="1"
                strokeDasharray="3,3"
                x="254"
                y="37"
            />
            <rect height="27" width="28" rx="8" stroke="#634887" strokeWidth="1" x="0" y="37" />
            <rect height="26" width="74" fill="#159345" rx="8" stroke="#159345" x="129.5" y="37.5" />
            <text fill="#159345" fontFamily="SourceSansPro-Bold, Source Sans Pro" fontSize="12">
                <tspan x="154.204" y="11">
                    {getTranslation('om_foreldrepenger.ferie.illustrasjon', intl)}
                </tspan>
                <tspan fontFamily="SourceSansPro-Regular, Source Sans Pro" x="180.796" y="11" />
                <tspan fontFamily="SourceSansPro-Regular, Source Sans Pro" x="148.498" y="26">
                    {getTranslation('om_foreldrepenger.sykdom.illustrasjon.ferievarighet', intl)}
                </tspan>
            </text>
            <path
                d="M35.6773506,19.2993848 C33.914108,17.5673274 31.0444899,17.5673274 29.2808994,19.2993848 C29.1831347,19.3954204 29.0895451,19.4965824 29.0001305,19.602529 C28.9107158,19.4962406 28.8171262,19.3954204 28.7190137,19.2990431 C26.9557711,17.5669856 24.0861529,17.5669856 22.3225624,19.2990431 C20.5589719,21.0311005 20.5593198,23.8499658 22.3225624,25.582365 L28.7538053,31.8998633 C28.8216491,31.9665072 28.9107158,32 28.9997826,32 C29.0888493,32 29.177916,31.9665072 29.2457598,31.8998633 L35.6770027,25.582365 C37.4409411,23.8503076 37.4409411,21.0314422 35.6773506,19.2993848 Z"
                stroke="#4A4A4A"
            />
            <text fill="#3E3832" fontFamily="SourceSansPro-Bold, Source Sans Pro" fontSize="12">
                <tspan x="300.66" y="11">
                    {getTranslation('om_foreldrepenger.sykdom.illustrasjon.sluttdato', intl)}
                </tspan>
                <tspan fontFamily="SourceSansPro-Regular, Source Sans Pro" x="281.742" y="26">
                    {getTranslation('om_foreldrepenger.sykdom.illustrasjon.forskyves', intl)}
                </tspan>
            </text>
            <polygon
                fill="#4A4A4A"
                points="328.5 30 332 35 325 35"
                transform="translate(328.500000, 32.500000) rotate(180.000000) translate(-328.500000, -32.500000) "
            />
            <polygon
                fill="#4A4A4A"
                points="253.5 30 257 35 250 35"
                transform="translate(253.500000, 32.500000) rotate(180.000000) translate(-253.500000, -32.500000) "
            />
            <g transform="translate(4.000000, 41.000000)">
                <path
                    d="M7.6916556,-3.10752092e-16 L12.3083444,3.10752092e-16 C14.9829006,-1.80555915e-16 15.9527593,0.278476833 16.9305371,0.801398111 C17.9083149,1.32431939 18.6756806,2.09168511 19.1986019,3.06946289 C19.7215232,4.04724067 20,5.01709938 20,7.6916556 L20,11.3083444 C20,13.9829006 19.7215232,14.9527593 19.1986019,15.9305371 C18.6756806,16.9083149 17.9083149,17.6756806 16.9305371,18.1986019 C15.9527593,18.7215232 14.9829006,19 12.3083444,19 L7.6916556,19 C5.01709938,19 4.04724067,18.7215232 3.06946289,18.1986019 C2.09168511,17.6756806 1.32431939,16.9083149 0.801398111,15.9305371 C0.278476833,14.9527593 1.2037061e-16,13.9829006 -2.07168062e-16,11.3083444 L2.07168062e-16,7.6916556 C-1.2037061e-16,5.01709938 0.278476833,4.04724067 0.801398111,3.06946289 C1.32431939,2.09168511 2.09168511,1.32431939 3.06946289,0.801398111 C4.04724067,0.278476833 5.01709938,1.80555915e-16 7.6916556,-3.10752092e-16 Z"
                    fill="#634689"
                />
                <path
                    d="M17.2535246,1.74647536 L1.74647536,17.2535246 C1.37099893,16.8780482 1.0517873,16.446307 0.793050214,15.9625107 C0.275576033,14.9949181 3.2412681e-16,14.0351621 0,11.3884658 L4.10020122e-16,7.61153419 C8.58933117e-17,4.96483793 0.275576033,4.00508191 0.793050214,3.03748932 C1.3105244,2.06989672 2.06989672,1.3105244 3.03748932,0.793050214 C4.00508191,0.275576033 4.96483793,4.86190215e-16 7.61153419,0 L11.3884658,6.15030183e-16 C14.0351621,1.28839967e-16 14.9949181,0.275576033 15.9625107,0.793050214 C16.446307,1.0517873 16.8780482,1.37099893 17.2535246,1.74647536 Z"
                    fill="#634689"
                />
                <g fill="#FFFFFF" transform="translate(4.000000, 4.000000)">
                    <path d="M1.57357373,4.23076918 C1.42354895,3.28280089 0.882373433,2.64035569 0.25767706,2.64035569 C0.119605872,2.64035569 0.00767705968,2.52842687 0.00767705968,2.39035569 C0.00767705968,2.2522845 0.119605872,2.14035569 0.25767706,2.14035569 C1.18517625,2.14035569 1.91162086,3.01946713 2.07853935,4.23072413 C4.40245109,4.2303894 10.1645322,4.22836988 11.9565217,4.23076923 C11.9565217,6.30262124 10.7585887,8 8.6050924,8 L4.26335223,8 C2.71203911,8 1.45445135,6.67407407 1.45445135,5.03846154 C1.45445135,4.75845514 1.49130778,4.48752481 1.56018475,4.23076923 C1.56461933,4.23076923 1.56908237,4.23076922 1.57357373,4.23076918 Z M8.75,10.5 C8.05964406,10.5 7.5,9.94035594 7.5,9.25 C7.5,8.55964406 8.05964406,8 8.75,8 C9.44035594,8 10,8.55964406 10,9.25 C10,9.94035594 9.44035594,10.5 8.75,10.5 Z M8.75,9.5 C8.88807119,9.5 9,9.38807119 9,9.25 C9,9.11192881 8.88807119,9 8.75,9 C8.61192881,9 8.5,9.11192881 8.5,9.25 C8.5,9.38807119 8.61192881,9.5 8.75,9.5 Z M4.25,10.5 C3.55964406,10.5 3,9.94035594 3,9.25 C3,8.55964406 3.55964406,8 4.25,8 C4.94035594,8 5.5,8.55964406 5.5,9.25 C5.5,9.94035594 4.94035594,10.5 4.25,10.5 Z M4.25,9.5 C4.38807119,9.5 4.5,9.38807119 4.5,9.25 C4.5,9.11192881 4.38807119,9 4.25,9 C4.11192881,9 4,9.11192881 4,9.25 C4,9.38807119 4.11192881,9.5 4.25,9.5 Z M8.33169499,0.5 C10.5717236,0.5 11.9565217,2.20158825 11.9565217,3.73076923 C10.8557091,3.73076923 9.04673502,3.72816364 6.65210935,3.72816364 L8.33169499,0.5 Z" />
                </g>
            </g>
            <g transform="translate(34.000000, 41.000000)">
                <path
                    d="M7.6916556,-3.10752092e-16 L12.3083444,3.10752092e-16 C14.9829006,-1.80555915e-16 15.9527593,0.278476833 16.9305371,0.801398111 C17.9083149,1.32431939 18.6756806,2.09168511 19.1986019,3.06946289 C19.7215232,4.04724067 20,5.01709938 20,7.6916556 L20,11.3083444 C20,13.9829006 19.7215232,14.9527593 19.1986019,15.9305371 C18.6756806,16.9083149 17.9083149,17.6756806 16.9305371,18.1986019 C15.9527593,18.7215232 14.9829006,19 12.3083444,19 L7.6916556,19 C5.01709938,19 4.04724067,18.7215232 3.06946289,18.1986019 C2.09168511,17.6756806 1.32431939,16.9083149 0.801398111,15.9305371 C0.278476833,14.9527593 1.2037061e-16,13.9829006 -2.07168062e-16,11.3083444 L2.07168062e-16,7.6916556 C-1.2037061e-16,5.01709938 0.278476833,4.04724067 0.801398111,3.06946289 C1.32431939,2.09168511 2.09168511,1.32431939 3.06946289,0.801398111 C4.04724067,0.278476833 5.01709938,1.80555915e-16 7.6916556,-3.10752092e-16 Z"
                    fill="#634689"
                />
                <path
                    d="M17.2535246,1.74647536 L1.74647536,17.2535246 C1.37099893,16.8780482 1.0517873,16.446307 0.793050214,15.9625107 C0.275576033,14.9949181 3.2412681e-16,14.0351621 0,11.3884658 L4.10020122e-16,7.61153419 C8.58933117e-17,4.96483793 0.275576033,4.00508191 0.793050214,3.03748932 C1.3105244,2.06989672 2.06989672,1.3105244 3.03748932,0.793050214 C4.00508191,0.275576033 4.96483793,4.86190215e-16 7.61153419,0 L11.3884658,6.15030183e-16 C14.0351621,1.28839967e-16 14.9949181,0.275576033 15.9625107,0.793050214 C16.446307,1.0517873 16.8780482,1.37099893 17.2535246,1.74647536 Z"
                    fill="#634689"
                />
                <g fill="#FFFFFF" transform="translate(4.000000, 4.000000)">
                    <path d="M1.57357373,4.23076918 C1.42354895,3.28280089 0.882373433,2.64035569 0.25767706,2.64035569 C0.119605872,2.64035569 0.00767705968,2.52842687 0.00767705968,2.39035569 C0.00767705968,2.2522845 0.119605872,2.14035569 0.25767706,2.14035569 C1.18517625,2.14035569 1.91162086,3.01946713 2.07853935,4.23072413 C4.40245109,4.2303894 10.1645322,4.22836988 11.9565217,4.23076923 C11.9565217,6.30262124 10.7585887,8 8.6050924,8 L4.26335223,8 C2.71203911,8 1.45445135,6.67407407 1.45445135,5.03846154 C1.45445135,4.75845514 1.49130778,4.48752481 1.56018475,4.23076923 C1.56461933,4.23076923 1.56908237,4.23076922 1.57357373,4.23076918 Z M8.75,10.5 C8.05964406,10.5 7.5,9.94035594 7.5,9.25 C7.5,8.55964406 8.05964406,8 8.75,8 C9.44035594,8 10,8.55964406 10,9.25 C10,9.94035594 9.44035594,10.5 8.75,10.5 Z M8.75,9.5 C8.88807119,9.5 9,9.38807119 9,9.25 C9,9.11192881 8.88807119,9 8.75,9 C8.61192881,9 8.5,9.11192881 8.5,9.25 C8.5,9.38807119 8.61192881,9.5 8.75,9.5 Z M4.25,10.5 C3.55964406,10.5 3,9.94035594 3,9.25 C3,8.55964406 3.55964406,8 4.25,8 C4.94035594,8 5.5,8.55964406 5.5,9.25 C5.5,9.94035594 4.94035594,10.5 4.25,10.5 Z M4.25,9.5 C4.38807119,9.5 4.5,9.38807119 4.5,9.25 C4.5,9.11192881 4.38807119,9 4.25,9 C4.11192881,9 4,9.11192881 4,9.25 C4,9.38807119 4.11192881,9.5 4.25,9.5 Z M8.33169499,0.5 C10.5717236,0.5 11.9565217,2.20158825 11.9565217,3.73076923 C10.8557091,3.73076923 9.04673502,3.72816364 6.65210935,3.72816364 L8.33169499,0.5 Z" />
                </g>
            </g>
            <g transform="translate(210.000000, 41.000000)">
                <path
                    d="M7.6916556,-3.10752092e-16 L12.3083444,3.10752092e-16 C14.9829006,-1.80555915e-16 15.9527593,0.278476833 16.9305371,0.801398111 C17.9083149,1.32431939 18.6756806,2.09168511 19.1986019,3.06946289 C19.7215232,4.04724067 20,5.01709938 20,7.6916556 L20,11.3083444 C20,13.9829006 19.7215232,14.9527593 19.1986019,15.9305371 C18.6756806,16.9083149 17.9083149,17.6756806 16.9305371,18.1986019 C15.9527593,18.7215232 14.9829006,19 12.3083444,19 L7.6916556,19 C5.01709938,19 4.04724067,18.7215232 3.06946289,18.1986019 C2.09168511,17.6756806 1.32431939,16.9083149 0.801398111,15.9305371 C0.278476833,14.9527593 1.2037061e-16,13.9829006 -2.07168062e-16,11.3083444 L2.07168062e-16,7.6916556 C-1.2037061e-16,5.01709938 0.278476833,4.04724067 0.801398111,3.06946289 C1.32431939,2.09168511 2.09168511,1.32431939 3.06946289,0.801398111 C4.04724067,0.278476833 5.01709938,1.80555915e-16 7.6916556,-3.10752092e-16 Z"
                    fill="#634689"
                />
                <path
                    d="M17.2535246,1.74647536 L1.74647536,17.2535246 C1.37099893,16.8780482 1.0517873,16.446307 0.793050214,15.9625107 C0.275576033,14.9949181 3.2412681e-16,14.0351621 0,11.3884658 L4.10020122e-16,7.61153419 C8.58933117e-17,4.96483793 0.275576033,4.00508191 0.793050214,3.03748932 C1.3105244,2.06989672 2.06989672,1.3105244 3.03748932,0.793050214 C4.00508191,0.275576033 4.96483793,4.86190215e-16 7.61153419,0 L11.3884658,6.15030183e-16 C14.0351621,1.28839967e-16 14.9949181,0.275576033 15.9625107,0.793050214 C16.446307,1.0517873 16.8780482,1.37099893 17.2535246,1.74647536 Z"
                    fill="#634689"
                />
                <g fill="#FFFFFF" transform="translate(4.000000, 4.000000)">
                    <path d="M1.57357373,4.23076918 C1.42354895,3.28280089 0.882373433,2.64035569 0.25767706,2.64035569 C0.119605872,2.64035569 0.00767705968,2.52842687 0.00767705968,2.39035569 C0.00767705968,2.2522845 0.119605872,2.14035569 0.25767706,2.14035569 C1.18517625,2.14035569 1.91162086,3.01946713 2.07853935,4.23072413 C4.40245109,4.2303894 10.1645322,4.22836988 11.9565217,4.23076923 C11.9565217,6.30262124 10.7585887,8 8.6050924,8 L4.26335223,8 C2.71203911,8 1.45445135,6.67407407 1.45445135,5.03846154 C1.45445135,4.75845514 1.49130778,4.48752481 1.56018475,4.23076923 C1.56461933,4.23076923 1.56908237,4.23076922 1.57357373,4.23076918 Z M8.75,10.5 C8.05964406,10.5 7.5,9.94035594 7.5,9.25 C7.5,8.55964406 8.05964406,8 8.75,8 C9.44035594,8 10,8.55964406 10,9.25 C10,9.94035594 9.44035594,10.5 8.75,10.5 Z M8.75,9.5 C8.88807119,9.5 9,9.38807119 9,9.25 C9,9.11192881 8.88807119,9 8.75,9 C8.61192881,9 8.5,9.11192881 8.5,9.25 C8.5,9.38807119 8.61192881,9.5 8.75,9.5 Z M4.25,10.5 C3.55964406,10.5 3,9.94035594 3,9.25 C3,8.55964406 3.55964406,8 4.25,8 C4.94035594,8 5.5,8.55964406 5.5,9.25 C5.5,9.94035594 4.94035594,10.5 4.25,10.5 Z M4.25,9.5 C4.38807119,9.5 4.5,9.38807119 4.5,9.25 C4.5,9.11192881 4.38807119,9 4.25,9 C4.11192881,9 4,9.11192881 4,9.25 C4,9.38807119 4.11192881,9.5 4.25,9.5 Z M8.33169499,0.5 C10.5717236,0.5 11.9565217,2.20158825 11.9565217,3.73076923 C10.8557091,3.73076923 9.04673502,3.72816364 6.65210935,3.72816364 L8.33169499,0.5 Z" />
                </g>
            </g>
            <g stroke="#FFFFFF" strokeLinecap="round" transform="translate(133.000000, 43.000000)">
                <path d="M15.6666667,10.9896 L11.6666667,10.9896 C10.0326667,10.9896 8.586,11.5149333 7.67333333,12.3229333" />
                <path d="M11.6666667,11 L9.456,5.422" />
                <path d="M7.737,1.083 L7.491,0.463666667" />
                <path d="M7.737,1.083 C4.485,2.37166667 2.37366667,4.74033333 3.323,7.13566667 L3.56833333,7.75566667 L5.11766667,7.141 L5.49233333,6.27566667 L6.35766667,6.65033333 L12.555,4.19366667 L12.929,3.329 L13.7943333,3.70233333 L15.3436667,3.08833333 L15.0983333,2.46833333 C14.1483333,0.0723333333 10.9883333,-0.205666667 7.737,1.083 L7.737,1.083 Z" />
                <path d="M15.6666667,15 C15,15 14.3333333,14.4026667 14.3333333,13.6666667 C14.3333333,14.4026667 13.6666667,15 13,15 C12.3333333,15 11.6666667,14.4026667 11.6666667,13.6666667 C11.6666667,14.4026667 11,15 10.3333333,15 C9.66666667,15 9,14.4026667 9,13.6666667 C9,14.4026667 8.33333333,15 7.66666667,15 C7,15 6.33333333,14.4026667 6.33333333,13.6666667 C6.33333333,14.4026667 5.66666667,15 5,15 C4.33333333,15 3.66666667,14.4026667 3.66666667,13.6666667 C3.66666667,14.4026667 3,15 2.33333333,15 C1.66666667,15 1,14.4026667 1,13.6666667 C1,14.1266667 0.691333333,14.5326667 0.333333333,14.7726667" />
            </g>
        </g>
    </svg>
);

export default injectIntl(FerieforskyvningMobil);
