import React from 'react';
import HomePage from './HomePage';
import TimerPage from './TimerPage';

class IntervalsApp extends React.Component {
    initialState = {
        sets: 0,
        work: 0,
        rest: 0,
        isWork: false,
        isRest: false
    };

    state = this.initialState;

    setTimer = (timerSettings) => {
        this.setState(() => ({ 
            ...timerSettings,
            isWork: true
         }));
    }
    
    returnHome = () => {
        this.setState(() => ({
            isWork: false,
            isRest: false
        }))
    }

    render() {
        return (
            <React.Fragment>
                {this.state.isWork || this.state.isRest === true ? 
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