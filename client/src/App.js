import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleButtonContainer from "./container/ToggleButtonContainer";

class App extends Component {

    render() {
        const style = {
            maxHeight: 50,
            maxWidth: "100%"
        };

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" style={style}/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>

                    <ToggleButtonContainer/>

                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
