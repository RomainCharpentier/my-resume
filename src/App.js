import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { translate } from 'react-multi-lang';
import LangButton from './components/LangButton';
import { CssBaseline, Container, Link, Typography, Avatar, ThemeProvider, useMediaQuery, createMuiTheme } from '@material-ui/core';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          theme: {
            palette: {
                type: "dark"
            }
          }
        };
        this.toggleDarkTheme.bind(this);
    }

     // we change the palette type of the theme in state
    toggleDarkTheme = () => {
        let newPaletteType = this.state.theme.palette.type === "light" ? "dark" : "light";
        this.setState({
            theme: {
                palette: {
                    type: newPaletteType
                }
            }
        });
    };

    render() {
        return (
            <div className="App">
                <ThemeProvider theme={createMuiTheme(this.state.theme)}>
                    <CssBaseline />
                    <img src={logo} className='App-logo' alt='logo' />
                    <Router basename="/">
                        <Switch>
                            <Route exact path="/" component={MainPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                        <button onClick={this.toggleDarkTheme}>change</button>
                    </Router>
                </ThemeProvider>
            </div>
        );
    }
}

export default translate(App);