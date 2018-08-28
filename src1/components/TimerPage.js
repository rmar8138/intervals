import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Timer from './Timer';

class TimerPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p>This is the Timer Page</p>
                <Timer
                    sets={this.props.sets}
                    work={this.props.work}
                    rest={this.props.rest}
                    isWork={this.props.isWork}
                    isRest={this.props.isRest}
                />
                <Link to="/" exact>Go to home page</Link>
            </React.Fragment>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

export default connect(mapStateToProps)(TimerPage);

