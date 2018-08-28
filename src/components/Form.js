import React from 'react';

class Form extends React.Component {
    initialState = {
        sets: '',
        work: '',
        rest: ''
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
        if (this.state.sets && this.state.work && this.state.rest) {
            this.props.setTimer(this.state);
            this.setState(() => this.initialState);
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
                    name="work"
                    value={this.state.work}
                    onChange={this.onChange}
                />
                <br/>
                <label>Rest</label>
                <br/>
                <input
                    type="number"
                    name="rest"
                    value={this.state.rest}
                    onChange={this.onChange}
                />
                <br/>
                <button>Start</button>
            </form>
        );
    }
}

export default Form;