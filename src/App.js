import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { translate, setLanguage } from 'react-multi-lang';
import { CssBaseline, ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import ConstructionPage from './pages/ConstructionPage';
import Header from './components/Header';
import Footer from './components/Footer';

const styles = {
    
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          theme: {
            palette: {
                type: 'dark'
            }
          }
        };
        this.toggleDarkTheme.bind(this);
        console.log(window.navigator.language);
        if (navigator.language.indexOf('fr') > -1) {
            setLanguage('fr');
        } else {
            setLanguage('en');
        }
    }

     // we change the palette type of the theme in state
    toggleDarkTheme = () => {
        let newPaletteType = this.state.theme.palette.type === 'light' ? 'dark' : 'light';
        this.setState({
            theme: {
                palette: {
                    type: newPaletteType
                }
            }
        });
    };

    render() {
        const isWip = false;
        let routes;
        const {classes} = this.props;
        if (!isWip) {
            routes = (
                <Router basename='/'>
                    <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Router>);
        } else {
            routes = <ConstructionPage />;
        }
        return (
            <div className='App'>
                <ThemeProvider theme={createMuiTheme(this.state.theme)}>
                    <CssBaseline />
                    {!isWip && <Header theme={this.toggleDarkTheme} />}
                    {routes}
                    <Footer />
                </ThemeProvider>
            </div>
        );
    }
}

export default withStyles(styles)(translate(App));