import React, { Component } from 'react'

export default class Clock extends Component {

    // --- Clock class constructor ---
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // --- Clock class lifecycle management ---
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillMount() {
        clearInterval(this.timerID)
    }

    // --- Clock class methods ---
    tick() {
        this.setState({
            date: new Date()
        });
    }

    // --- Clock class Render Method ---
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
