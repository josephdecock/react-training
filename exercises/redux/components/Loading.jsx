import React from 'react';

const Loading = (props) => {
    if (props.isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    return (
        <div>
            {props.children}
        </div>
    );
};

export default Loading;