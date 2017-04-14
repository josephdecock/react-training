import React from 'react';

const Example = (props) => {
    return (
        <div className="example">
            <div>
                <strong>Example</strong>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
};

export default Example;