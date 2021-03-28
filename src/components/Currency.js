import React, { Component } from 'react'
import CurrencyInput from './CurrencyInput'

function toEuro(dollar) {
    return dollar * 0.85
}

function toDollar(euro) {
    return euro * 1.18
}

function tryConvert(value, convert) {
    const input = parseFloat(value);
    if (Number.isNaN(value)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();

}

export default class Currency extends Component {

    constructor(props) {
        super(props)
        this.state = { value: '', currency: '' }
        this.handleEuroChange = this.handleEuroChange.bind(this);
        this.handleDollarChange = this.handleDollarChange.bind(this);
    }

    handleEuroChange(value) {
        this.setState({ value: value, currency: 'e' })
    }

    handleDollarChange(value) {
        this.setState({ value: value, currency: 'd' })
    }

    render() {
        const currency = this.state.currency;
        const value = this.state.value;
        const euro = currency === 'd' ? tryConvert(value, toEuro) : value;
        const dollar = currency === 'e' ? tryConvert(value, toDollar) : value;

        return (
            <div>
                <CurrencyInput
                    currency='e'
                    value={euro}
                    onCurrencyChange={this.handleEuroChange}
                />

                <CurrencyInput
                    currency='d'
                    value={dollar}
                    onCurrencyChange={this.handleDollarChange}
                />
            </div>
        )
    }
}
