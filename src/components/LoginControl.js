import React, { Component } from 'react'
import MailBox from './MailBox'

const messages = ['Message 1', 'Message 2', 'Message 3']

// Functions
function UserState(props) {
    let isLoggedIn = props.isLoggedIn
    return <p>The user is {isLoggedIn ? 'currently' : 'not'} logged in.</p>
}

function UserGreeting(props) {
    return <h1>Welcome Back!</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign in.</h1>
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    );
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />
}

// LoginControl Class
export default class LoginControl extends Component {

    // State Management
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false }
    }

    // Event Handlers
    handleLoginClick() {
        this.setState({ isLoggedIn: true })
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false })
    }


    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                <UserState isLoggedIn={isLoggedIn} />
                {isLoggedIn && <MailBox unreadMessages={messages} />}
                {button}
            </div>
        )
    }
}
