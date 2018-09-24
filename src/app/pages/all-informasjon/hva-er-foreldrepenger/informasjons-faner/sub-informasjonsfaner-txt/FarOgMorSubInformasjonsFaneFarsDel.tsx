import * as React from 'react';
import BEMHelper from '../../../../../utils/bem';
import translate from '../../../../../utils/translate';
import TypografiBase from 'nav-frontend-typografi';

const cls = BEMHelper('FarOgMorSubInformasjonsFaneFellesDel');

interface Props {}

const FarOgMorSubInformasjonsFaneFellesDel: React.StatelessComponent<
    Props
> = ({}) => {
    return (
        <div className={cls.className}>
            <TypografiBase tag="div" type="normaltekst">
                <div className={cls.element('linje')}>
                    {translate('farOgMor.subFaner.fellesDel.linjeEn')}
                </div>
                <div className={cls.element('linje')}>
                    {translate('farOgMor.subFaner.fellesDel.linjeTo')}
                </div>
                <div className={cls.element('List')}>
                    <div className={cls.element('tittel')}>
                        <span className={cls.element('bold')}>
                            {translate(
                                'farOgMor.subFaner.fellesDel.linjeTreDelEn'
                            )}
                        </span>
                        <span>
                            {translate(
                                'farOgMor.subFaner.fellesDel.linjeTreDelTo'
                            )}
                        </span>
                    </div>
                    <ul>
                        <li>
                            {translate('farOgMor.subFaner.fellesDel.punktEn')}
                        </li>
                        <li>
                            {translate('farOgMor.subFaner.fellesDel.punktTo')}
                        </li>
                        <li>
                            {translate('farOgMor.subFaner.fellesDel.punktTre')}
                        </li>
                        <li>
                            {translate('farOgMor.subFaner.fellesDel.punktFire')}
                        </li>
                        <li>
                            {translate('farOgMor.subFaner.fellesDel.punktFem')}
                        </li>
                        <li>
                            <span>
                                {translate(
                                    'farOgMor.subFaner.fellesDel.punktSeks'
                                )}
                            </span>
                            <span>
                                <a href="#">
                                    {translate(
                                        'farOgMor.subFaner.fellesDel.punktSeksLink'
                                    )}
                                </a>
                            </span>
                        </li>
                        <li>
                            {translate('farOgMor.subFaner.fellesDel.punktSyv')}
                        </li>
                    </ul>
                </div>
            </TypografiBase>
        </div>
    );
};

export default FarOgMorSubInformasjonsFaneFellesDel;
