import React from 'react';
import Title from '../../components/Title';
import Section from '../../components/Section';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';

const LessonThree = () => (
    <div>
        <Title>Lesson 3 - Forms</Title>
        <Section title="Building Forms" defaultOpen>
            <ul>
                <li>Due to the one way data flow in React, UI forms are going to be fundamentally different than something in Angular or jQuery.</li>
                <li>Input elements are either going to be considered <em>controlled</em> or <em>uncontrolled</em></li>
            </ul>
            <h3>Controlled Input Elements</h3>
            <ul>
                <li>A controlled input element is going to have its value explicitly set by React so that the user cannot change the value directly.</li>
                <li>This is intended to be used with <em>input</em>, <em>select</em>, and <em>textarea</em> elements.</li>
                <li>These elements will need to have <em>onChange</em> or other HTML event handlers attached that grab the change requested by the user and push that new value into the component's state.</li>
                <li>This state update will trigger a re-render of the component and the input field will be updated with the new value.</li>
                <li>This means that if the user types 10 characters in an input field, the component will have re-rendered 10 different times with the different values.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
        };

        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(event) {
        this.setState({
            inputValue: event.target.value,
        });
    }

    render() {
        return (
            <input type="text" value={this.state.inputValue} onChange={this.handleUpdate} />
        );
    }
}`}
                </CodeBlock>
            </Example>
            <ul>
                <li>If you set the <em>value</em> programmatically and forget to handle the <em>onChange</em> events, if the user types in the input field it will appear as if the field is readonly because it will not update.</li>
                <li>This is generally the recommended way to handle forms in React although it can be annoying to write all of that boilerplate code.</li>
            </ul>

            <h3>Uncontrolled Components</h3>
            <ul>
                <li>In some cases you may not want to have React control the value of your form inputs.</li>
                <li>There are many possible reasons for this, but dealing with file inputs would be a pretty common one.</li>
                <li>In these cases you can opt to not set the value of your input and instead grab a reference.</li>
                <li>It is important when using <em>refs</em> that you handle them appropriately since you are saving a reference to the DOM element itself and that can cause memory leaks.</li>
                <li>The recommended way is to add a function handler to the <em>ref</em> property on your input elements to save off the reference.</li>
                <li>This is a safe approach because when unmounting the component React will call all of the <em>ref</em> functions with null values to automatically null out the references.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.input = null;
        this.alertValue = this.alertValue.bind(this);
    }

    alertValue() {
        alert(this.input.value);
    }

    render() {
        return (
            <input type="text" ref={(input) => this.input = input} />
            <button type="button" onClick={this.alertValue}>Click</button>
        );
    }
}`}
                </CodeBlock>
                <div>In this example, <em>this.input</em> is a reference to the actual DOM input element so you have full access to all of the standard DOM methods and properties.</div>
            </Example>
            <h3>Form Submission</h3>
            <ul>
                <li>A common approach is to wrap your form fields inside of a <em>form</em> and then attach an <em>onSubmit</em> handler to the form to manually perform the submission.</li>
                <li>You could also wire up an <em>onClick</em> to a button if you would like</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.input = null;
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm() {
        // pull the form values and POST it to your API
        alert(this.input.value);
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input type="text" ref={(input) => this.input = input} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}`}
                </CodeBlock>
            </Example>
        </Section>
    </div>
);

export default LessonThree;