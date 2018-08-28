import React from 'react';

class TimerPage extends React.Component {
    state = {
            sets: this.props.timerSettings.sets,
            work: this.props.timerSettings.work,
            rest: this.props.timerSettings.rest,
            isWork: this.props.timerSettings.isWork,
            isRest: this.props.timerSettings.isRest,
            countdown: 3,
            message: ''
    }

    componentDidMount() {
        this.startCountdown();
    }

    startCountdown = () => {
        // 3 sec countdown
        this.setState(({ countdown: 3 }));
        let countDown = setInterval(() => {
            this.setState((prevState) => ({
                isWork: true,
                countdown: prevState.countdown - 1
            }));

            if (this.state.countdown === 0) {
                this.setState({ message: 'Go!' });
                clearInterval(countDown);

                this.startTimer();
            }
        }, 1000);
    }

    startTimer = () => {
        let workTimer = setInterval(() => {
            this.setState((prevState) => ({
                work: prevState.work - 1
            }));

            if (this.state.work === 0 && this.state.sets === 1) {
                clearInterval(workTimer);
                this.setState(() => ({
                    sets: this.props.timerSettings.sets,
                    work: this.props.timerSettings.work,
                    rest: this.props.timerSettings.rest,
                    isWork: false,
                    isRest: false,
                    message: 'Good job!'
                }));
            } else if (this.state.work === 0) {
                clearInterval(workTimer);
                this.setState(() => ({
                    work: this.props.timerSettings.work,
                    isWork: false,
                    isRest: true,
                    message: 'Rest'
                }));

                let restTimer = setInterval(() => {
                    this.setState((prevState) => ({
                        rest: prevState.rest - 1
                    }));

                    if (this.state.rest === 0) {
                        clearInterval(restTimer);
                        this.setState((prevState) => ({
                            sets: prevState.sets - 1,
                            rest: this.props.timerSettings.rest,
                            isWork: true,
                            isRest: false,
                            message: 'Go!'
                        }));

                        if (this.state.sets > 0) {
                            this.startTimer();
                        } else {
                            this.setState(() => ({
                                sets: this.props.timerSettings.sets,
                                work: this.props.timerSettings.work,
                                rest: this.props.timerSettings.rest,
                                isWork: false,
                                isRest: false,
                                countdown: 3,
                                message: 'Good job!'
                            }));
                        }
                    }
                }, 1000);
            }
        }, 1000);
    }

    render() {
        return (
            <React.Fragment>
                <h1>This is the timer page</h1>
                <p>Sets left: {this.state.sets}</p>
                <p>{this.state.countdown ? this.state.countdown : this.state.message}</p>
                <p>{this.state.isWork ? this.state.work : this.state.rest}</p>
                {!this.state.isWork && !this.state.isRest && 
                    <React.Fragment>
                        <button onClick={this.startCountdown}>Go again?</button>
                        <button onClick={this.props.returnHome}>Go back</button>
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }
}

export default TimerPage;