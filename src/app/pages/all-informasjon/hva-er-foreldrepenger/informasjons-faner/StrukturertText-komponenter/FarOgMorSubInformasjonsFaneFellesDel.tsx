import * as React from 'react';
import BEMHelper from '../../../../../utils/bem';
import translate from '../../../../../utils/translate';
import TypografiBase from 'nav-frontend-typografi';

const cls = BEMHelper('FarOgMorSubInformasjonsFaneFarsDel');

interface Props {}

const FarOgMorSubInformasjonsFaneFarsDel: React.StatelessComponent<
    Props
> = ({}) => {
    return (
        <div className={cls.className}>
            <TypografiBase tag="div" type="normaltekst">
                <div className={cls.element('linje')}>
                    <span>
                        {translate('farOgMor.subFaner.farsDel.linjeEnDelEn')}
                    </span>
                    <span className={cls.element('bold')}>
                        {translate('farOgMor.subFaner.farsDel.linjeEnBold')}
                    </span>
                    <span>
                        {translate('farOgMor.subFaner.farsDel.linjeEnDelTre')}
                    </span>
                </div>
                <div className={cls.element('linje')}>
                    <span>
                        {translate('farOgMor.subFaner.farsDel.linjeTo')}
                    </span>
                    <span>
                        <a href="#">
                            {translate('farOgMor.subFaner.farsDel.linjeToLink')}
                        </a>
                    </span>
                </div>
                <div className={cls.element('linje')}>
                    <span>
                        {translate('farOgMor.subFaner.farsDel.linjeTreDelEn')}
                    </span>
                    <span className={cls.element('bold')}>
                        {translate('farOgMor.subFaner.farsDel.linjeTreBold')}
                    </span>
                    <span>
                        {translate('farOgMor.subFaner.farsDel.LinjeTreDelTre')}
                    </span>
                </div>
            </TypografiBase>
        </div>
    );
};

export default FarOgMorSubInformasjonsFaneFarsDel;
