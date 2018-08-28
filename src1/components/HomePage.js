import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import TimerForm from './TimerForm';
import { setSets } from '../actions/actions';

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <TimerForm 
                    onSubmit={(exercise) => {
                        this.props.dispatch(setSets(exercise));
                        this.props.history.push('/timer');
                    }}
                    history={this.props.history}
                />
            </React.Fragment>
        );
    }
};

export default connect()(HomePage);