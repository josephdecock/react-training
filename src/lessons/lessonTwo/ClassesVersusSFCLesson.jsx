import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Example from '../../components/Example';

const ClassesVersusSFC = () => {
    return (
        <div>
            <ul>
                <li>My opinion is to always start with a stateless functional component.</li>
                <li>Only when you need state or lifecycle hooks should you consider using the full class approach.</li>
                <li>It also helps reinforce functional programming concepts when the components are just a function.</li>
                <li>However, these are just my opinions and not requirements so you are free to discover your own preferences.</li>
            </ul>
        </div>
    );
};

export default ClassesVersusSFC;