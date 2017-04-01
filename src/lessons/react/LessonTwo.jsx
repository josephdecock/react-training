import React from 'react';
import { withRouter } from 'react-router';
import Title from '../../components/Title';
import Section from '../../components/Section';
import JsxLesson from './lessonTwo/JsxLesson';
import ElementLesson from './lessonTwo/ElementLesson';
import PropsLesson from './lessonTwo/PropsLesson';
import LifecycleLesson from './lessonTwo/LifecycleLesson';
import StateLesson from './lessonTwo/StateLesson';
import ClassLesson from './lessonTwo/ClassLesson';
import StatelessFunctionalComponentsLesson from './lessonTwo/StatelessFunctionalComponentsLesson';
import ClassesVersusSFCLesson from './lessonTwo/ClassesVersusSFCLesson';

const LessonTwo = (props) => (
    <div>
        <Title>Lesson 2 - React Components</Title>
        <Section title="Elements" defaultOpen={props.params.section === 'elements' || !props.params.section}>
            <ElementLesson />
        </Section>
        <Section title="JSX" defaultOpen={props.params.section === 'jsx'}>
            <JsxLesson />
        </Section>
        <Section title="Props" defaultOpen={props.params.section === 'props'}>
            <PropsLesson />
        </Section>
        <Section title="Classes" defaultOpen={props.params.section === 'classes'}>
            <ClassLesson />
        </Section>
        <Section title="State" defaultOpen={props.params.section === 'state'}>
            <StateLesson />
        </Section>
        <Section title="Lifecycle" defaultOpen={props.params.section === 'lifecycle'}>
            <LifecycleLesson />
        </Section>
        <Section title="Stateless Functional Components" defaultOpen={props.params.section === 'sfc'}>
            <StatelessFunctionalComponentsLesson />
        </Section>
        <Section title="Classes versus Stateless Functional Components" defaultOpen={props.params.section === 'classesVsfc'}>
            <ClassesVersusSFCLesson />
        </Section>
    </div>
);

export default withRouter(LessonTwo);