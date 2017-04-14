import React from 'react';

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: this.props.defaultOpen,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultOpen !== this.props.defaultOpen) {
            this.setState({
                isOpen: nextProps.defaultOpen,
            });
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        const classes = this.state.isOpen ? 'section section-open' : 'section section-closed';
        return (
            <div className={classes}>
                <h2 onClick={() => this.toggle()}>{this.props.title}</h2>
                <div className="section-body">
                    {this.state.isOpen && this.props.children}
                </div>
            </div>
        );
    }
}

Section.propTypes = {
    defaultOpen: React.PropTypes.bool,
    title: React.PropTypes.string.isRequired,
};

export default Section;