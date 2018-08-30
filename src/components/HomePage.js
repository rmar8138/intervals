import React from 'react';
import Form from './Form';

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Form setTimer={this.props.setTimer}/>
            </React.Fragment>
        );
    }
}

export default HomePage;