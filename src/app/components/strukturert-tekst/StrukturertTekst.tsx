import React, { StatelessComponent, ReactNode } from 'react';
import TypografiBase from 'nav-frontend-typografi';
import { StrukturertTekst, MarkDefinition, Avsnitt, Tekstsnutt, Definisjoner } from '../../utils/strukturertTekst';
import WithLink from '../with-link/WithLink';
import BEMHelper from '../../utils/bem';
import './strukturertTekst.less';

interface Props {
    tekst: StrukturertTekst;
    definisjoner?: Definisjoner;
}

const cls = BEMHelper('strukturertTekst');

const StrukturertTekst: StatelessComponent<Props> = ({ tekst, definisjoner }) => {
    return <div className={cls.block}>{tekst ? tekst.map(renderAvsnitt(definisjoner)) : null}</div>;
};

const renderAvsnitt = (definisjoner?: Definisjoner) => (avsnitt: Avsnitt, index: number) => {
    const { type = 'avsnitt', style = 'normaltekst', markDefs = [], children = [], listItem, level = 0 } = avsnitt;

    if (level > 0) {
        const renderListElement = renderTekstsnutt(markDefs, definisjoner);
        const itemToRender = (
            <li>
                <TypografiBase type={style}>
                    {children.map((tekstsnutt, childIndex) => {
                        return renderListElement(tekstsnutt, childIndex);
                    })}
                </TypografiBase>
            </li>
        );

        return listItem === 'number' ? (
            <div key={index} className={cls.element('navFont')}>
                <ol start={index}>{itemToRender}</ol>
            </div>
        ) : (
            <div key={index} className={cls.element('navFont')}>
                <ul>{itemToRender}</ul>
            </div>
        );
    } else {
        return (
            <TypografiBase key={index} className={cls.element(type)} type={style}>
                {children.map(renderTekstsnutt(markDefs, definisjoner))}
            </TypografiBase>
        );
    }
};

const renderTekstsnutt = (markDefs: MarkDefinition[], variabler?: Definisjoner) => (
    tekstsnutt: Tekstsnutt,
    index: number
) => {
    let snuttype = 'span';
    let text = '';
    let marks: string[] = [];

    if (typeof tekstsnutt !== 'string') {
        snuttype = tekstsnutt.type || 'span';
        text = tekstsnutt.text;
        marks = tekstsnutt.marks || [];
    } else {
        text = tekstsnutt;
    }

    const variablesAvailable = variabler && variabler[text] && marks && marks.includes('variable');
    let toRender: ReactNode = variabler && variablesAvailable ? variabler[text] : text;

    switch (snuttype) {
        case 'span': {
            toRender = <span>{toRender}</span>;
            break;
        }
        case 'span_nowrap': {
            toRender = <span className={cls.element('unbreakable')}>{toRender}</span>;
            break;
        }
        default: {
            toRender = <span>{toRender}</span>;
        }
    }

    marks.forEach((mark) => {
        switch (mark) {
            case 'bold': {
                toRender = <b>{toRender}</b>;
                break;
            }

            case 'italic': {
                toRender = <i>{toRender}</i>;
                break;
            }

            case 'variable': {
                break;
            }

            default: {
                if (markDefs) {
                    const markDefinition = markDefs.find((m) => m.key === mark);
                    if (markDefinition) {
                        toRender = (
                            <MarkWrapper mark={markDefinition} otherMarks={marks}>
                                {toRender}
                            </MarkWrapper>
                        );
                    }
                }
            }
        }
    });

    return addKeyToComponent(index, toRender);
};

const MarkWrapper = ({
    mark,
    otherMarks,
    children
}: {
    mark: MarkDefinition;
    otherMarks: string[];
    children: ReactNode;
}) => {
    switch (mark.type) {
        case 'link': {
            const external = otherMarks.includes('external_link');

            return (
                <WithLink urlIsExternal={external} addExternalIcon={external} url={mark.href || '/#'}>
                    {children}
                </WithLink>
            );
        }
    }
};

const addKeyToComponent = (key: any, component: any) => React.cloneElement(component, { key });

export default StrukturertTekst;
