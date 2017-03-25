import React from 'react';
import Title from '../components/Title';
import Section from '../components/Section';
import Example from '../components/Example';
import CodeBlock from '../components/CodeBlock';

const LessonFour = () => (
    <div>
        <Title>Lesson 4 - Higher Order Components</Title>
        <Section title="Extending Behaviors" defaultOpen>
            <ul>
                <li>React is based on a lot of functional concepts, so when you need to modify an existing component it is usually preferable to create a <em>higher order component</em> that modifies aspects of the underlying component without actually extending it.</li>
                <li>Granted, there are some situations in which this may not be possible, but it is still good to think of components as compositions of other components.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`const Button = (props) => (
    <button type="button" onClick={props.onClick}>
        {props.children}
    </button>
);

const ImageButton = (props) => (
    <Button onClick={props.onClick}>
        <Icon type={props.icon} />
        {props.children}
    </Button>
);

const Parent = () => (
    <ImageButton onClick={myHandler} icon="user">
        Click here
    </ImageButton>
);
`}
                </CodeBlock>
                <div>In this example we could have created a new low-level component that renders an HTML button with the image data, but instead we created a component that wraps the existing <em>Button</em> component and changes the props in order to accomplish what we wanted, i.e. rendering an image along with the text inside of the button.</div>
            </Example>
        </Section>
    </div>
);

export default LessonFour;