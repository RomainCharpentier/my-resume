import React from 'react';
import logo from './logo.svg';
import './App.css';
import GitRepositoryList from './components/GitRepositoryList';
import { translate } from 'react-multi-lang';
import LangButton from './components/LangButton';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <h1>{this.props.t('home.Title', {param: 'react'})}</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <GitRepositoryList />
                <LangButton />
            </div>
        );
    }
}

export default translate(App);