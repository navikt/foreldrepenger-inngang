import * as React from 'react';
import BEMHelper from '../../utils/bem';

const cls = BEMHelper('informasjonstavle');

const UnderProduksjon = ({
    group
}: {
    group: string;
}) => {
    return (
        <svg
            className={cls.element('underArbeid-ikon' + group)}
            width="102px"
            height="102px"
            viewBox="0 0 102 102"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>Group 24</title>
            <desc>Created with Sketch.</desc>
            <g id="NAV.no" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group-24">
                    <g id="Group-23" fillRule="nonzero">
                        <polygon
                            id="Path"
                            fill="#3E3832"
                            points="44.9203102 0 102 57.0796898 102 100.92031 1.07968978 2.13162821e-14"
                        />
                        <polygon
                            id="Path"
                            fill="#FDBC6D"
                            points="102 101.766231 0.347848954 1.42108547e-14 1.76126963 0 102 100.351224"
                        />
                        <polygon
                            id="Path"
                            fill="#FDBC6D"
                            points="102 57.5219482 44.7285348 0 46.1396658 7.10542736e-15 102 56.1046454"
                        />
                    </g>
                    <text
                        id="KOMMER"
                        transform="translate(71.984542, 48.691649) rotate(45.000000) translate(-71.984542, -48.691649) "
                        fontFamily="SourceSansPro-Bold, Source Sans Pro"
                        fontSize="16"
                        fontWeight="bold"
                        fill="#FDBC6D">
                        <tspan x="40.3365417" y="54.6916485">
                            KOMMER
                        </tspan>
                    </text>
                    <g
                        id="helmet-construction"
                        transform="translate(38.194174, 15.194174) rotate(45.000000) translate(-38.194174, -15.194174) translate(28.194174, 7.694174)"
                        stroke="#FDBC6D"
                        strokeLinejoin="round">
                        <path
                            d="M19.5833333,10.6578947 L1.25166667,10.6578947 C0.791158991,10.6578956 0.417585844,10.3046906 0.416666667,9.86842105 L0.416666667,9.07894737 C0.416666224,8.86929207 0.50469234,8.6682467 0.66133331,8.52014619 C0.81797428,8.37204568 1.0303643,8.28905437 1.25166667,8.28947368 L9.58333333,8.28947368 M1.25166667,8.28947368 C1.25166667,4.58335234 4.42298302,1.57894737 8.335,1.57894737 C10.9511989,1.57805315 13.3548987,2.94339539 14.5866667,5.13"
                            id="Shape"
                            strokeLinecap="round"
                        />
                        <path
                            d="M17.0833333,10.6578947 L17.0833333,8.28947368 C17.0833333,4.08631579 13.7825,0.615 9.50333333,0.0726315789 C8.81011273,-0.0144410812 8.11003908,0.177056249 7.5725,0.600789474 L5.78166667,2.03368421"
                            id="Path"
                        />
                        <path
                            d="M2.08333333,10.6578947 L2.08333333,13.4210526 C2.08333333,14.0755101 2.64335049,14.6060526 3.33416667,14.6060526 C4.02498284,14.6060526 4.585,14.0755101 4.585,13.4210526 C4.585,12.7670312 5.14464406,12.2368421 5.835,12.2368421 L14.585,12.2368421 C15.5051491,12.2364062 16.2508334,11.5296151 16.2508333,10.6578947"
                            id="Path"
                            strokeLinecap="round"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default UnderProduksjon;
