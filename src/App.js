import React from 'react';
import './App.css';
import { translate, setLanguage } from 'react-multi-lang';
import { CssBaseline, ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core';
import MainPage from './pages/MainPage';
import ConstructionPage from './pages/ConstructionPage';
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
        let page;
        const {classes} = this.props;
        if (!isWip) {
            page = <MainPage />
        } else {
            page = <ConstructionPage />;
        }
        return (
            <div className='App'>
                <ThemeProvider theme={createMuiTheme(this.state.theme)}>
                    <CssBaseline />
                    {page}
                    <Footer />
                </ThemeProvider>
            </div>
        );
    }
}

export default withStyles(styles)(translate(App));