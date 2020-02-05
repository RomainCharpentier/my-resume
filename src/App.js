import React from 'react';
import logo from './logo.svg';
import './App.css';
import GitRepositoryList from './components/GitRepositoryList';

export default class App extends React.Component {

    render() {
        return (
            <div className="App">
                <h1>My Resume</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <GitRepositoryList />
            </div>
        );
    }
}