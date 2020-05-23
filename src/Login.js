import React, { Component } from 'react'
import Route from 'react-router-dom/Route';
import App from './App.js';

export default class Login extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact render={
                () => {
                return (
                    <form onSubmit={this.props.fetch}>
                    <label>
                        Username:
                        <input type="text" name="username" />
                    </label>
                    <label>
                    Password:
                        <input type="password" name="password" />
                    </label>
                    <input type="submit" value="Submit" />
                    <span>{this.props.error ? 'Error: '+this.props.error : ''}</span>
                    </form>
                )
                }
            }
            />
            </div>
        )
    }
}
