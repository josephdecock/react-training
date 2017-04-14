import React from 'react';

const CodeBlock = (props) => {
    return (
        <pre className="code-block">
            {props.children}
        </pre>
    );
};

export default CodeBlock;