import React from 'react';
import ReactAgenda from './agendas/ReactAgenda';
import ReduxAgenda from './agendas/ReduxAgenda';

const Home = (props) => {
    console.log(props);
    return (
    <div>
        <nav className="sidebar">
            <ReactAgenda />
            <ReduxAgenda />
        </nav>
        <div className="content">
            {props.children}
        </div>
    </div>
);
};

export default Home;