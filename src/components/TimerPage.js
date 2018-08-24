import React from 'react';
import { Link } from 'react-router-dom';

class TimerPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p>This is the Timer Page</p>
                <Link to="/" exact>Go to home page</Link>
            </React.Fragment>
        );
    }
};

export default TimerPage;

