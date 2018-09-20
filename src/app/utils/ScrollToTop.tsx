import { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

// Scroll restoration
// Som beskrevet i dokumentasjonen til react-router:
// https://reacttraining.com/react-router/web/guides/scroll-restoration

class ScrollToTop extends Component<RouteComponentProps> {
    componentDidUpdate(prevProps: RouteComponentProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);
