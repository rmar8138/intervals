import React from 'react';
import moment from 'moment';

class Form extends React.Component {
    initialState = {
        sets: '1',
        workMin: '01',
        workSec: '00',
        restMin: '00',
        restSec: '30',
        work: 0,
        rest: 0
    };

    state = this.initialState;

    onChangeSets = (e) => {
        if (e.target.value.split('').length <= 3) {
            const { name, value } = e.target
            this.setState((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    onChangeTime = (e) => {
        if (e.target.value.split('').length <= 2) {
            const { name, value } = e.target
            this.setState((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (parseInt(this.state.sets) > 0 && parseInt(this.state.workMin) + parseInt(this.state.workSec) > 0  && parseInt(this.state.restMin) + parseInt(this.state.restSec) > 0) {
            this.setState((prevState) => ({
                work: moment.duration(
                    `00:${prevState.workMin}:${prevState.workSec}`
                )._milliseconds / 1000,
                rest: moment.duration(
                    `00:${prevState.restMin}:${prevState.restSec}`
                )._milliseconds / 1000
            }), () => {
                this.props.setTimer({
                    sets: parseInt(this.state.sets),
                    work: this.state.work,
                    rest: this.state.rest
                })
                this.setState(() => this.initialState);
            });
        }
    }

    render() {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                <label className='form__label'>Sets</label>
                <br/>
                <input
                    className='form__input'
                    type="number"
                    name="sets"
                    value={this.state.sets}
                    onChange={this.onChangeSets}
                />
                <br/>
                <label className='form__label'>Work</label>
                <br/>
                <input
                    className='form__input'
                    type="number"
                    name="workMin"
                    min={0}
                    max={59}
                    value={this.state.workMin}
                    onChange={this.onChangeTime}
                />
                <input
                    className='form__input'
                    type="number"
                    name="workSec"
                    min={0}
                    max={59}
                    value={this.state.workSec}
                    onChange={this.onChangeTime}
                />
                <br/>
                <label className='form__label'>Rest</label>
                <br/>
                <input
                    className='form__input'
                    type="number"
                    name="restMin"
                    min={0}
                    max={59}
                    value={this.state.restMin}
                    onChange={this.onChangeTime}
                />
                <input
                    className='form__input'
                    type="number"
                    name="restSec"
                    min={0}
                    max={59}
                    value={this.state.restSec}
                    onChange={this.onChangeTime}
                />
                <br/>
                <button className='btn'>Start</button>
            </form>
        );
    }
}

export default Form;