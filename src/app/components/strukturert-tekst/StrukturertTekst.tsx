import React, { StatelessComponent, ReactNode } from 'react';
import TypografiBase from 'nav-frontend-typografi';
import {
    StrukturertTekst,
    MarkDefinition,
    Avsnitt,
    Tekstsnutt
} from '../../utils/strukturertTekst';
import { WithLink } from '../../utils/withLink';
import BEMHelper from '../../utils/bem';
import './strukturertTekst.less';

interface Props {
    tekst: StrukturertTekst;
}

const cls = BEMHelper('strukturertTekst');

const StrukturertTekst: StatelessComponent<Props> = ({ tekst }) => {
    return <div className={cls.className}>{tekst.map(renderAvsnitt)}</div>;
};

const renderAvsnitt = (avsnitt: Avsnitt, index: number) => {
    const { type, style, markDefs, children } = avsnitt;

    if (type === 'liste') {
        return (
            <TypografiBase
                key={index}
                className={cls.element('liste')}
                type={style}>
                <ul>{children.map(renderTekstsnutt(markDefs))}</ul>
            </TypografiBase>
        );
    } else {
        return (
            <TypografiBase
                key={index}
                className={cls.element(type)}
                type={style}>
                {children.map(renderTekstsnutt(markDefs))}
            </TypografiBase>
        );
    }
};

const renderTekstsnutt = (markDefs: MarkDefinition[]) => (
    tekstsnutt: Tekstsnutt,
    index: number
) => {
    const { type: snuttype, text, marks } = tekstsnutt;

    let toRender: ReactNode = text;
    switch (snuttype) {
        case 'span': {
            toRender = <span>{text}</span>;
            break;
        }

        case 'element': {
            toRender = <li>{text}</li>;
            break;
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

            case 'external_link': {
                toRender = <span>{toRender}→</span>;
                break;
            }

            default: {
                if (markDefs) {
                    const markDefinition = markDefs.find((m) => m.key === mark);
                    if (markDefinition) {
                        toRender = (
                            <MarkWrapper mark={markDefinition}>
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
    children
}: {
    mark: MarkDefinition;
    children: ReactNode;
}) => {
    switch (mark.type) {
        case 'link': {
            return (
                <WithLink urlIsExternal={true} url={mark.href || '/#'}>
                    {children}
                </WithLink>
            );
        }
    }
};

const addKeyToComponent = (key: any, component: any) =>
    React.cloneElement(component, { key });

export default StrukturertTekst;
