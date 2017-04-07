import React from 'react';
import CodeBlock from '../../../components/CodeBlock';
import Example from '../../../components/Example';

const LifecycleLesson = () => {
    return (
        <div>
            <ul>
                <li>Components are not always pure functions and sometimes you need to leverage lifecycle hooks</li>
                <li>
                    React provides several lifecycle hook points
                    <ul>
                        <li><strong>constructor</strong> - This is called at the very beginning and is passed in the props.  This is a good place to set up your state object, but your component is not attached to the DOM at this point.  You may see code examples reference <em>componentWillMount</em>, but if you are using classes then the preference is to use your constructor.</li>
                        <li><strong>componentDidMount</strong> - This is called once a component is attached to the DOM.  This is only called once and additional re-renders will not call this method.  This is the first place where you can perform initialization that requires DOM nodes to be present.  This is also a good place to issue network requests that are needed by your component.</li>
                        <li><strong>componentWillReceiveProps</strong> - This is called every time that the parent component re-renders its tree.  That does not mean that this will be called only when properties actually change, so be sure to compare the newProps with the currentProps to see if props that you care about actually changed.  This is NOT called the first time that a component is rendered though, so you would need to use the constructor or componentDidMount for that.</li>
                        <li><strong>shouldComponentUpdate</strong> - This is called before re-rendering the component to determine if the component and its nested tree needs to be re-rendered.  Since this defaults to true, if you have components that are expensive then it can help to supply this hook point and manually determine when the component should re-render.  One common approach is to do a shallow compare of props and state to see if they have changed and only update if they are different.</li>
                        <li><strong>componentDidUpdate</strong> - This is called after a component has updated and it is passed the previous props.  This allows you to check to see if specific props changed and perform network requests or perform DOM interaction.</li>
                        <li><strong>componentWillUnmount</strong> - This is called immediately prior to unmounting the component from the DOM.  If you need to clean up any event listeners or cancel pending actions then do it here.</li>
                        <li><strong>render</strong> - This is called whenever a component's state or props changed and it is responsible for returning the component tree for this component.  Your render function can also return null, which is the equivalent of a component hiding itself from rendering even though the lifecycle methods are still firing.</li>
                        <li><strong>setState</strong> - This will update the local state for the component and trigger an update for this component.  This updates the state in an asynchronous manner and you can pass a callback that will be called once the state is updated if you need to chain additional updates.</li>
                    </ul>
                </li>
            </ul>
            <Example>
                <CodeBlock>
                    {`import networkRequest from 'my-network-module';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timesUpdated: 0,
        };

        this.onScroll = this.onScroll.bind(this);
    }

    onScroll() {

    }

    componentDidMount() {
        networkRequest();
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.refreshData && !this.props.refreshData) {
            this.setState({
                timesUpdated: this.state.timesUpdated + 1,
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.refreshData && !prevProps.refreshData) {
            networkRequest();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps !== this.props || nextState !== this.state) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <div />
        );
    }
}`}
                </CodeBlock>
            </Example>
        </div>
    );
};

export default LifecycleLesson;