import React from 'react';
import Title from '../components/Title';
import Section from '../components/Section';

const LessonSix = () => (
    <div>
        <Title>Lesson 6 - Component Libraries</Title>
        <Section title="Building on top of a component library" defaultOpen>
            <ul>
                <li>Realistically you probably will want to build on top of a component library instead of rolling your own, especially once you start dealing with modals, fly-out menus, etc...</li>
                <li>
                    There are several popular ones that are available for use.
                    <ul>
                        <li><em><a href="https://github.com/callemall/material-ui" target="_blank">Material UI</a></em> is the gorilla in this fight. It is very widely used and has a log of features.  However, it also has a lot of open issues (>600), and it has a history of making huge breaking changes.</li>
                        <li><em><a href="https://github.com/ant-design/ant-design" target="_blank">Ant Design</a></em> is a large component and layout library.  They even have their own CLI and state management system if you want, otherwise you can just use the components.  The big catch is that the main developers are Chinese so the documentation is not always clear or even available in English.</li>
                        <li><em><a href="https://github.com/react-component/" target="_blank">React Components</a></em> is the library that Ant design builds on top of.  If you don't want all of what Ant offers then you can use the individual lower level components.</li>
                    </ul>
                </li>
            </ul>
        </Section>
    </div>
);

export default LessonSix;