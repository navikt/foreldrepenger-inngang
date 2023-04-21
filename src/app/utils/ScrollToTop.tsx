import { Component } from 'react';

// Scroll restoration
// Som beskrevet i dokumentasjonen til react-router:
// https://reacttraining.com/react-router/web/guides/scroll-restoration

class ScrollToTop extends Component<any> {
    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
            // Gå til riktig seksjon basert på hash i URL
            if (this.props.location.hash.includes('#')) {
                const sectionNode = document.getElementById(this.props.location.hash.slice(1));

                if (sectionNode) {
                    window.scrollTo(0, sectionNode.offsetTop);
                }
            } else {
                window.scrollTo(0, 0);
            }
        }
    }

    render() {
        return this.props.children;
    }
}

export default ScrollToTop;
