import React from 'react';

class Timer extends React.Component {
    state = {
        time: 0
    };

    timer = () => {
        let intervalTimer = setInterval(() => {
            this.setState((prevState) => ({ time: prevState.time - 1 }));
            console.log(this.state.time);
            if (this.state.time === 0) {
                clearInterval(intervalTimer);
            }
        }, 1000)
    };

    onSubmit = (e) => {
        e.preventDefault();

        const time = parseInt(e.target.elements.seconds.value);
        this.setState(() => ({ time }));
        this.timer();
    };

    render() {
        return (
            <div>
                <p>{this.state.time}</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="seconds"/>
                    <button>Start!</button>
                </form>
            </div>
        );
    }
}

export default Timer;