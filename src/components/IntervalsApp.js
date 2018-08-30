import React from 'react';
import Header from './Header';
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
            <div className='container'>
                <Header/>
                {this.state.timerIsSet === true ? 
                <TimerPage
                    timerSettings={this.state}
                    returnHome={this.returnHome}
                /> :
                <HomePage setTimer={this.setTimer}/>}
            </div>
        );
    }
}

export default IntervalsApp;