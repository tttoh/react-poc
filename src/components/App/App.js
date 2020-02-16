import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            // Keep the switch on if the theme is dark
            checked: localStorage.getItem('theme') === 'dark',
            /**
             * store the value on localstorage
             * default value - light
             * option: dark, light
             */
            theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
        };
    }

    componentDidMount() {
        const { theme } = this.state;
        console.log(localStorage.getItem('theme'));
        // Update the data-theme attribute of our html tag
        console.log(theme);
        document.getElementsByTagName('HTML')[0].setAttribute('data-theme', theme);
    }

    toggleThemeChange = () => {
        const { checked } = this.state;
        // If theme is light then change to dark
        if (!checked) {
            console.log('change to dark');
            // Update localstorage
            localStorage.setItem('theme', 'dark');
            document.getElementsByTagName('HTML')[0].setAttribute('data-theme', 'dark');

            this.setState({
                checked: true,
                theme: 'dark',
            });
        } else {
            console.log('change to light');
            // Update localstorage
            localStorage.setItem('theme', 'light');
            document.getElementsByTagName('HTML')[0].setAttribute('data-theme', 'light');

            this.setState({
                checked: false,
                theme: 'light',
            });
        }
    };

    render() {
        const { checked } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit&nbsp;
                        <code>src/App.js</code>
                        &nbsp;and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <p>Click the switch to toggle themes</p>
                    <label className="switch" htmlFor="theme-switch">
                        <input
                            id="theme-switch"
                            type="checkbox"
                            // checked={this.state.checked}
                            defaultChecked={checked}
                            onChange={() => this.toggleThemeChange()}
                        />
                        <span className="slider round" />
                    </label>
                </header>
            </div>
        );
    }
}

export default App;
