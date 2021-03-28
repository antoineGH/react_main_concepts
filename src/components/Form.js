import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            name: '',
            email: '',
            password: '',
            ischecked: false
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value })
        console.log(this.state)
    }

    render() {
        return (
            <form>
                {/* Name Form  */}
                <label>
                    Name:
                    <input
                        name='name'
                        type='text'
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </label>

                {/* Email Form  */}
                <label>
                    Email:
                    <input
                        name='email'
                        type='text'
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                </label>

                {/* Password Form  */}
                <label>
                    Password:
                    <input
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                </label>

                {/* isChecked Form  */}
                <label>
                    isChecked:
                    <input
                        name='isChecked'
                        type='checkbox'
                        value={this.state.ischecked}
                        onChange={this.handleInputChange}
                    />
                </label>
            </form>
        )
    }
}
