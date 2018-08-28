import React from 'react';
import Form from './Form';

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Intervals</h1>
                <Form setTimer={this.props.setTimer}/>
            </React.Fragment>
        );
    }
}

export default HomePage;