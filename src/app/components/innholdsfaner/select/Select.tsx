import React from 'react';
import BEMHelper from '../../../utils/bem';
import { Innholdsfane } from '../fane/Fane';
import { injectIntl, IntlShape } from 'react-intl';
import Panel from 'nav-frontend-paneler';
import TypografiBase from 'nav-frontend-typografi';
import Chevron from 'nav-frontend-chevron';
import classnames from 'classnames';
import getTranslation from 'app/utils/i18nUtils';

import './select.less';

const cls = BEMHelper('select');

interface OwnProps {
    selected: Innholdsfane;
    onChoiceSelect: (choice: number) => void;
    choices: Innholdsfane[];
}

interface InjectedProps {
    intl: IntlShape;
}

type SelectProps = OwnProps & InjectedProps;

interface SelectState {
    open: boolean;
}

class Select extends React.Component<SelectProps, SelectState> {
    mounted: boolean;
    selectRef: any;
    node: any;

    constructor(props: SelectProps) {
        super(props);

        this.state = {
            open: false,
        };
    }

    componentDidMount = () => {
        this.mounted = true;
        this.selectRef = React.createRef();
        this.node = React.createRef<HTMLDivElement>();

        document.addEventListener('keydown', this.handleKeyPressEvent, false);
        document.addEventListener('click', this.handleDocumentClick, false);
    };

    componentWillUnmount = () => {
        this.mounted = false;

        document.removeEventListener('keydown', this.handleKeyPressEvent, false);
        document.removeEventListener('click', this.handleDocumentClick, false);
    };

    focusOnSelf = () => {
        const node = this.selectRef.current;
        if (node) {
            node.focus();
        }
    };

    closePopup = () => {
        this.setState({
            open: false,
        });
    };

    handleKeyPressEvent = (e: any) => {
        if (e.keyCode === 27) {
            this.closePopup();
        }
    };

    handleDocumentClick = (e: any) => {
        if (this.mounted) {
            if (this.node && !this.node.contains(e.target)) {
                this.closePopup();
            }
        }
    };

    onChoiceClick = (index: number) => {
        this.focusOnSelf();
        this.closePopup();
        this.props.onChoiceSelect(index);
    };

    onClick = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    render = () => (
        <div style={{ position: 'relative' }} ref={(node) => (this.node = node)}>
            <div
                role="menu"
                aria-haspopup={true}
                aria-expanded={this.state.open}
                tabIndex={0}
                ref={this.selectRef}
                onClick={this.onClick}
                onKeyPress={this.onClick}
                className={classnames(cls.block, {
                    [cls.modifier('open')]: this.state.open,
                })}
            >
                <div className={cls.element('selected')}>
                    <div className={cls.element('selectedIcon')}>{this.props.selected.icon}</div>
                    <TypografiBase type="normaltekst">
                        {getTranslation(this.props.selected.label, this.props.intl)}
                    </TypografiBase>
                </div>
                <Chevron type={this.state.open ? 'opp' : 'ned'} />
            </div>
            <div className={this.state.open ? cls.element('popUp', 'open') : cls.element('popUp')}>
                {this.state.open && (
                    <div className={cls.element('shadow')}>
                        {this.props.choices.map((choice, index) => (
                            <Panel
                                role="menuitem"
                                key={choice.label}
                                border={true}
                                onClick={() => {
                                    this.onChoiceClick(index);
                                }}
                                onKeyPress={() => {
                                    this.onChoiceClick(index);
                                }}
                                className={classnames(cls.element('choice'), {
                                    [cls.element('choice', 'selected')]: this.props.selected.label === choice.label,
                                })}
                                tabIndex={0}
                            >
                                <TypografiBase type="normaltekst">
                                    {getTranslation(choice.label, this.props.intl)}
                                </TypografiBase>
                            </Panel>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default injectIntl(Select);
