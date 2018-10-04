import React from 'react';
import ReactDOM from 'react-dom';
import './select.less';
import BEMHelper from '../../../utils/bem';
import { Innholdsfane } from '../fane/Fane';
import translate from '../../../intl/translate';
import { Panel } from 'nav-frontend-paneler';
import TypografiBase from 'nav-frontend-typografi';
import Chevron from 'nav-frontend-chevron';
import classnames from 'classnames';

const cls = BEMHelper('select');

interface SelectProps {
    selected: string;
    label: string;
    onChoiceSelect: (choice: number) => void;
    choices: Innholdsfane[];
}

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
                role="select"
                tabIndex={0}
                ref={this.selectRef}
                onClick={this.onClick}
                onKeyPress={this.onClick}
                className={classnames(cls.className, {
                    [cls.modifier('open')]: this.state.open
                })}>
                <TypografiBase type="normaltekst">{translate(this.props.selected)}</TypografiBase>
                <Chevron type={this.state.open ? 'opp' : 'ned'} />
            </div>
            <div
                className={
                    this.state.open
                        ? cls.element('popUp', 'open')
                        : cls.element('popUp')
                }>
                {this.state.open && (
                    <div className={cls.element('shadow')}>
                        {this.props.choices.map((choice, index) => (
                            <Panel
                                role="option"
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
                                        this.props.selected === choice.label
                                })}
                                tabIndex={0}>
                                <TypografiBase type="normaltekst">
                                    {translate(choice.label)}
                                </TypografiBase>
                            </Panel>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Select;
