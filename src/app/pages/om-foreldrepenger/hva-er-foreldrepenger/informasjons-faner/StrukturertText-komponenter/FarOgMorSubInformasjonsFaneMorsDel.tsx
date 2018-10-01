import * as React from 'react';
import BEMHelper from '../../../../../utils/bem';
import translate from '../../../../../utils/translate';
import TypografiBase from 'nav-frontend-typografi';

const cls = BEMHelper('FarOgMorSubInformasjonsFaneMorsDel');

interface Props {}

const FarOgMorSubInformasjonsFaneMorsDel: React.StatelessComponent<
    Props
> = ({}) => {
    return (
        <div className={cls.className}>
            <TypografiBase tag="div" type="normaltekst">
                <div className={cls.element('linje')}>
                    {translate('farOgMor.subFaner.Morsdel.linjeEn')}
                </div>
                <div className={cls.element('linje')}>
                    <a href="">
                        {translate('farOgMor.subFaner.Morsdel.linkEn')}
                    </a>
                    {translate('farOgMor.subFamer.Morsdel.linjeTo')}
                </div>
                <div className={cls.element('linje')}>
                    {translate('farOgMor.subFaner.Morsdel.linjeTreDelEn')}
                    <a href="">
                        {translate('farOgMor.subFaner.Morsdel.linkTo')}
                    </a>
                    {translate('farOgMor.subFaner.Morsdel.linjeTreDelTre')}
                </div>
            </TypografiBase>
        </div>
    );
};

export default FarOgMorSubInformasjonsFaneMorsDel;
