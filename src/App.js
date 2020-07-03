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
                type: 'dark',
                text: {
                    default: '#fff',
                    primary: '#1976d2',
                    secondary: '#a9a9a9',
                },
                textColor: '#fff',
                primary: {
                    main: '#1976d2',
                    dark: '#fff'
                },
            },
            typography: {
                h1: {
                    color: '#fff',
                    fontFamily: 'Times New Roman", Times, serif',
                    fontSize: '3rem',
                    textShadow: '0px 0px 10px rgba(0, 0, 0, 1)'
                },
                h3: {
                    color: '#fff',
                    fontFamily: 'caption',
                    fontSize: '1.5rem'
                },
                h4: {
                    color: '#e3e3e3',
                    fontFamily: 'caption',
                    fontSize: '1.2rem'
                },
                h5: {
                    color: '#00ffff'
                },
                subtitle1: {
                    color: '#fff'
                },
                body2: {
                    color: '#a9a9a9'
                },
            },
          },
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
        if (!isWip) {
            page = <MainPage />
        } else {
            page = <ConstructionPage />;
        }
        return (
            <div className='App' id='app'>
                <ThemeProvider theme={createMuiTheme(this.state.theme)}>
                    <CssBaseline />
                    {page}
                    <Footer />
                </ThemeProvider>
            </div>
        );
    }
}

export default translate(App);