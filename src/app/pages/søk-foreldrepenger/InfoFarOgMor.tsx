import React from 'react';
import Veileder from 'nav-frontend-veileder';
import CustomSVGFromSprite from 'app/utils/CustomSVG';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';

const InfoFarOgMor = () => {
    const svg = require('../../components/panel-med-bilde/img/hvor-lenge.svg').default;

    return (
        <div>
            <Veileder
                fargetema="normal"
                posisjon="høyre"
                storrelse="M"
                center={true}
                tekst={
                    <div className="infoContainer">
                        <Ekspanderbartpanel tittel="Planlegg tiden hjemme med barnet">
                            Testing testing testing Testing testing testing Testing testing testing
                            Testing testing testing Testing testing testing
                        </Ekspanderbartpanel>
                    </div>
                }>
                <CustomSVGFromSprite className="infoSvg" iconRef={svg} size={48} />
            </Veileder>
        </div>
    );
};

export default InfoFarOgMor;
