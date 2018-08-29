// import React from 'react';

// class Form extends React.Component {
//     initialState = {
//         sets: '',
//         work: '',
//         rest: ''
//     };

//     state = this.initialState;

//     onChange = (e) => {

//             const { name, value } = e.target
//             this.setState((prevState) => ({
//                 ...prevState,
//                 [name]: parseInt(value)
//             }));

//     }

//     onSubmit = (e) => {
//         e.preventDefault();
//         if (this.state.sets && this.state.work && this.state.rest) {
//             this.props.setTimer(this.state);
//             this.setState(() => this.initialState);
//         }
//     }

//     render() {
//         return (
//             <form onSubmit={this.onSubmit}>
//                 <label>Sets</label>
//                 <br/>
//                 <input
//                     type="number"
//                     name="sets"
//                     value={this.state.sets}
//                     onChange={this.onChange}
//                 />
//                 <br/>
//                 <label>Work</label>
//                 <br/>
//                 <input
//                     type="number"
//                     name="work"
//                     value={this.state.work}
//                     onChange={this.onChange}
//                 />
//                 <br/>
//                 <label>Rest</label>
//                 <br/>
//                 <input
//                     type="number"
//                     name="rest"
//                     value={this.state.rest}
//                     onChange={this.onChange}
//                 />
//                 <br/>
//                 <button>Start</button>
//             </form>
//         );
//     }
// }

// export default Form;

import React from 'react';
import moment from 'moment';

class Form extends React.Component {
    initialState = {
        sets: '',
        workMin: '',
        workSec: '',
        restMin: '',
        restSec: '',
        work: 0,
        rest: 0
    };

    state = this.initialState;

    onChange = (e) => {
        const { name, value } = e.target
        this.setState((prevState) => ({
               ...prevState,
            [name]: parseInt(value)
        }));

    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!isNaN(this.state.sets) && !isNaN(this.state.workMin) && !isNaN(this.state.workSec) && !isNaN(this.state.restMin) && !isNaN(this.state.restSec)) {
            this.setState((prevState) => ({
                work: moment.duration(
                    `00:${prevState.workMin}:${prevState.workSec}`
                )._milliseconds / 1000,
                rest: moment.duration(
                    `00:${prevState.restMin}:${prevState.restSec}`
                )._milliseconds / 1000
            }), () => {
                this.props.setTimer({
                    sets: this.state.sets,
                    work: this.state.work,
                    rest: this.state.rest
                })
                this.setState(() => this.initialState);
            });
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>Sets</label>
                <br/>
                <input
                    type="number"
                    name="sets"
                    value={this.state.sets}
                    onChange={this.onChange}
                />
                <br/>
                <label>Work</label>
                <br/>
                <input
                    type="number"
                    name="workMin"
                    value={this.state.workMin}
                    onChange={this.onChange}
                />
                <input
                    type="number"
                    name="workSec"
                    value={this.state.workSec}
                    onChange={this.onChange}
                />
                <br/>
                <label>Rest</label>
                <br/>
                <input
                    type="number"
                    name="restMin"
                    value={this.state.restMin}
                    onChange={this.onChange}
                />
                <input
                    type="number"
                    name="restSec"
                    value={this.state.restSec}
                    onChange={this.onChange}
                />
                <br/>
                <button>Start</button>
            </form>
        );
    }
}

export default Form;