import React from 'react';
import BEMHelper from '../../../../utils/bem';
import './valg.less';
import StorToggle from '../../../../components/stor-toggle/StorToggle';
const cls = BEMHelper('valg');

interface Props {}
class Valg extends React.Component<Props> {
    parentToggled = [false, false, false];
    toggled = null;

    constructor(props: Props) {
        super(props);
    }
    updateToggle(nr: any): void {
        if(this.toggled !== nr) {
            this.toggled = nr;
            this.clearCards();
            for (var i = 0; i < 3; i++) {
                if (i === nr) {
                    this.parentToggled[i] = true;
                } else this.parentToggled[i] = false;
            }
            this.appendCard();
        }
    }
    clearCards () {

    }

    appendCard() {

    }

    render = () => (
        <div className={cls.className}>
            <StorToggle
                isToggled={this.parentToggled[1]}
                onToggle={() => this.updateToggle(1)}
            >
                test
            </StorToggle>

            <table className={ cls.element('table')}>
              <tbody>
              {

              }

              </tbody>
            </table>
        </div>
    );
}

export default Valg;
