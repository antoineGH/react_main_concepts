import React, { Component } from 'react'

const currencyNames = {
    e: 'Euros',
    d: 'Dollars'
};

export default class CurrencyInput extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onCurrencyChange(event.target.value)
    }

    render() {
        const value = this.props.value;
        const currency = this.props.currency;

        return (
            <fieldset>
                <legend>Enter Currency in {currencyNames[currency]}: </legend>
                <input
                    value={value}
                    onChange={this.handleChange}
                />
            </fieldset>
        )
    }
}
