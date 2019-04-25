import React from 'react';
import ReactDOM from 'react-dom';
import './select.less';
import BEMHelper from '../../../utils/bem';
import { Innholdsfane } from '../fane/Fane';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Panel } from 'nav-frontend-paneler';
import TypografiBase from 'nav-frontend-typografi';
import Chevron from 'nav-frontend-chevron';
import classnames from 'classnames';
import getTranslation from 'app/utils/i18nUtils';

const cls = BEMHelper('select');

interface OwnProps {
    selected: Innholdsfane;
    onChoiceSelect: (choice: number) => void;
    choices: Innholdsfane[];
}

type SelectProps = OwnProps & InjectedIntlProps;

interface SelectState {
    open: boolean;
}

class Select extends React.Component<SelectProps, SelectState> {
    mounted: boolean;
    selectRef: any;

    constructor(props: SelectProps) {
        super(props);

        this.state = {
            open: false
        };
    }

    componentDidMount = () => {
        this.mounted = true;
        this.selectRef = React.createRef();

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
            open: false
        });
    };

    handleKeyPressEvent = (e: any) => {
        if (e.keyCode === 27) {
            this.closePopup();
        }
    };

    handleDocumentClick = (e: any) => {
        if (this.mounted) {
            const node = ReactDOM.findDOMNode(this);
            if (node && !node.contains(e.target)) {
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
            open: !this.state.open
        });
    };

    render = () => (
        <div style={{ position: 'relative' }}>
            <div
                role="menu"
                aria-haspopup={true}
                aria-expanded={this.state.open}
                tabIndex={0}
                ref={this.selectRef}
                onClick={this.onClick}
                onKeyPress={this.onClick}
                className={classnames(cls.block, {
                    [cls.modifier('open')]: this.state.open
                })}>
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
                                    [cls.element('choice', 'selected')]:
                                        this.props.selected.label === choice.label
                                })}
                                tabIndex={0}>
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
