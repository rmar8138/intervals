import React from 'react';

// class Timer extends React.Component {
//     state = {
//         time: 0
//     };

//     timer = () => {
//         let intervalTimer = setInterval(() => {
//             this.setState((prevState) => ({ time: prevState.time - 1 }));
//             console.log(this.state.time);
//             if (this.state.time === 0) {
//                 clearInterval(intervalTimer);
//             }
//         }, 1000)
//     };

//     onSubmit = (e) => {
//         e.preventDefault();

//         const time = parseInt(e.target.elements.seconds.value);
//         this.setState(() => ({ time }));
//         this.timer();
//     };

//     render() {
//         return (
//             <div>
//                 <p>{this.state.time}</p>
//                 <form onSubmit={this.onSubmit}>
//                     <input type="text" name="seconds"/>
//                     <button>Start!</button>
//                 </form>
//             </div>
//         );
//     }
// }

class Timer extends React.Component {
    state = {
        sets: this.props.sets,
        work: this.props.work,
        rest: this.props.rest,
        isWork: false,
        isRest: false
    };

    timer = () => {
        let workTimer;
        let restTimer;

        workTimer = setInterval(() => {
            this.setState(() => ({ isWork: true }));
            this.setState((prevState) => ({ work: prevState.work - 1 }));
            if (this.state.work < 0) {
                clearInterval(workTimer);
                this.setState(() => ({ isWork: false }));
                restTimer = setInterval(() => {
                    this.setState(() => ({ isRest: true }));
                    this.setState((prevState) => ({ rest: prevState.rest - 1 }));
                    if (this.state.rest < 0) {
                        clearInterval(restTimer);
                        this.setState(() => ({ isRest: false }));
                    }
                }, 1000);
            }
        }, 1000);
    };

    render() {
        return (
            <React.Fragment>
                {this.state.isWork && 
                    <React.Fragment>
                        <h3>Go!</h3>
                        <p>{this.state.work}</p>
                    </React.Fragment>
                }
                {this.state.isRest && 
                    <React.Fragment>
                        <h3>Rest!</h3>
                        <p>{this.state.rest}</p>
                    </React.Fragment>
                }
                <button onClick={this.timer}>Start</button>
            </React.Fragment>
        )
    }
}

export default Timer;