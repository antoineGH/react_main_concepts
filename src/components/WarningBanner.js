import React, { Component } from 'react'

function WarningBanner(props) {
    if (!props.warn) {
        return null
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

export default class Page extends Component {

    constructor(props) {
        super(props);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.state = { showWarning: true }
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}
