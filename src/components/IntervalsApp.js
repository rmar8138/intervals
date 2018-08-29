import React from 'react';
import HomePage from './HomePage';
import TimerPage from './TimerPage';

class IntervalsApp extends React.Component {
    initialState = {
        sets: 0,
        work: 0,
        rest: 0,
        timerIsSet: false
    };

    state = this.initialState;

    setTimer = (timerSettings) => {
        this.setState(() => ({ 
            ...timerSettings,
            timerIsSet: true
         }));
    }
    
    returnHome = () => {
        this.setState(() => ({ ...this.initialState }));
    }

    render() {
        return (
            <React.Fragment>
                {this.state.timerIsSet === true ? 
                    <TimerPage 
                        timerSettings={this.state}
                        returnHome={this.returnHome}
                    /> :
                    <HomePage setTimer={this.setTimer}/>}
            </React.Fragment>
        );
    }
}

export default IntervalsApp;