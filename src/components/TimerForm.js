import React from 'react';

class TimerForm extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            sets: parseInt(e.target.elements.sets.value),
            work: parseInt(e.target.elements.work.value),
            rest: parseInt(e.target.elements.rest.value)
        };

        this.props.onSubmit(exercise);
    };

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                    <h3>Sets</h3>
                    <input name="sets" type="text"/>
                    <h3>Work</h3>
                    <input name="work" type="text"/>
                    <h3>Rest</h3>
                    <input name="rest" type="text"/>
                    <br/>
                    <button>Start</button>
                </form>
            </React.Fragment>
        );
    }
}

export default TimerForm;