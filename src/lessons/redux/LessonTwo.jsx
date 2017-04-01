import React from 'react';
import Title from '../../components/Title';
import Section from '../../components/Section';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';

const LessonTwo = (props) => (
    <div>
        <Title>Lesson 2 - Actions and Action Creators</Title>
        <Section title="Actions" defaultOpen={props.params.section === 'actions' || !props.params.section}>
            <ul>
                <li>Actions are intended to tell your application <em>what</em> to do but not <em>how</em>.</li>
                <li>Actions <em>must</em> contain a type which must be a string.</li>
                <li>While symbols seem like a logical fit, your actions should also be serializable and symbols do not work well with that.</li>
                <li>Most actions also contain some type of payload that indicate the parameters of the action.</li>
                <li>You should try to design your application such that if you replay the exact same actions in the same order then you end up in the exact same place.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`const action = {
    type: 'LIKE_POST',
    postId: 10,
};`}
                </CodeBlock>
                <div>Notice how this example does not say how you should accomplish liking post number 10, it just says what you should do.</div>
            </Example>
        </Section>
        <Section title="Action Creators" defaultOpen={props.params.section === 'action-creators'}>
            <ul>
                <li>An action creator is simply a function that returns an action.</li>
                <li>
                    However, your action creator must be a pure function.
                    <ul>
                        <li>When it is called with the same parameters it must always return the same result.</li>
                        <li>It must perform no side effects.</li>
                        <li>This means no AJAX requests.</li>
                        <li>This may seem pointless now, but it will make sense later.</li>
                    </ul>
                </li>
            </ul>
            <Example>
                <CodeBlock>
                    {`function likePost(postId) {
    return {
        type: 'LIKE_POST',
        postId: postId,
    };
}`}
                </CodeBlock>
            </Example>
            <ul>
                <li>Ultimately, Redux must be made aware of actions in order for them to have any effect.</li>
                <li>The method for this is to <em>dispatch</em> the action.</li>
                <li>Redux provides a dispatch function that accepts an action as a parameter, and when called it will run the action through the Redux system.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`dispatch(likePost(10));`}
                </CodeBlock>
            </Example>
        </Section>
        <Section title="Higher Order Action Creators" defaultOpen={props.params.section === 'higher-order'}>
            <ul>
                <li>Do not be afraid to get creative and use functional programming concepts to your advantage.</li>
                <li>An action creator is simply a function, and it can also be a function returned by another function (higher order action creator)</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`// maybe you have several types of things which can be "liked"
function higherOrderLikeActionCreator(type) {
    return function actionCreator(id) {
        return {
            type: type,
            id: id,
        };
    };
}

const likePost = higherOrderLikeActionCreator('LIKE_POST');
const likeBeer = higherOrderLikeActionCreator('LIKE_BEER');
const likePicture = higherOrderLikeActionCreator('LIKE_PICTURE');

dispatch(likePost(10));
dispatch(likeBeer(1));
dispatch(likePicture(100));
`}
                </CodeBlock>
            </Example>
        </Section>
    </div>
);

export default LessonTwo;