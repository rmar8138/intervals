import React from 'react';
import moment from 'moment';

class TimerPage extends React.Component {
    state = {
            sets: this.props.timerSettings.sets,
            work: this.props.timerSettings.work,
            rest: this.props.timerSettings.rest,
            isWork: false,
            isRest: false,
            countdown: 3,
            message: '',
    }

    componentDidMount() {
        this.startCountdown();
    }

    startCountdown = () => {
        // 3 sec countdown
        this.setState(({
            countdown: 3,
            isWork: true
        }));
        this.state.countdownTimer = setInterval(() => {
            this.setState((prevState) => ({
                countdown: prevState.countdown - 1
            }));

            if (this.state.countdown === 0) {
                this.setState({ message: 'Go!' });
                clearInterval(this.state.countdownTimer);

                this.startTimer();
            }
        }, 1000);
    }

    startTimer = () => {
        // work timer
        this.state.workTimer = setInterval(() => {
            this.setState((prevState) => ({
                work: prevState.work - 1
            }));

            // if work timer finishes on the last set, end timer
            if (this.state.work === 0 && this.state.sets === 1) {
                clearInterval(this.state.workTimer);
                this.setState(() => ({
                    sets: this.props.timerSettings.sets,
                    work: this.props.timerSettings.work,
                    rest: this.props.timerSettings.rest,
                    isWork: false,
                    isRest: false,
                    message: 'Good job!'
                }));
                // if work timer finishes, move to rest timer
            } else if (this.state.work === 0) {
                clearInterval(this.state.workTimer);
                this.setState(() => ({
                    work: this.props.timerSettings.work,
                    isWork: false,
                    isRest: true,
                    message: 'Rest'
                }));

                // rest timer
                this.state.restTimer = setInterval(() => {
                    this.setState((prevState) => ({
                        rest: prevState.rest - 1
                    }));

                    // if rest timer finishes, minus 1 set, start timer again
                    if (this.state.rest === 0) {
                        clearInterval(this.state.restTimer);
                        this.setState((prevState) => ({
                            sets: prevState.sets - 1,
                            rest: this.props.timerSettings.rest,
                            isWork: true,
                            isRest: false,
                            message: 'Go!'
                        }));
                        this.startTimer();
                    }
                }, 1000);
            }
        }, 1000);
    }

    clearTimer = () => {
        // clear all timers when returning to home page
        clearInterval(this.state.countdownTimer);
        clearInterval(this.state.workTimer);
        clearInterval(this.state.restTimer);
        this.props.returnHome();
    }

    render() {
        return (
            <React.Fragment>
                <h1>This is the timer page</h1>
                <p>Sets left: {this.state.sets}</p>
                <p>{this.state.countdown ? this.state.countdown : this.state.message}</p>
                <p>{
                    this.state.isWork ? 
                    moment(moment.duration(this.state.work, 'seconds')._milliseconds).format('mm:ss') : 
                    moment(moment.duration(this.state.rest, 'seconds')._milliseconds).format('mm:ss')
                }</p>
                {!this.state.isWork && !this.state.isRest && 
                    <button onClick={this.startCountdown}>Go again?</button>
                }
                <button onClick={this.clearTimer}>Go back</button>
            </React.Fragment>
        );
    }
}

export default TimerPage;