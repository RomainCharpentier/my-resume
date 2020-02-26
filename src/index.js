import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { setDefaultTranslations, setDefaultLanguage } from 'react-multi-lang'
import fr from './data/translations/fr.json'
import en from './data/translations/en.json'

setDefaultTranslations({fr, en})
setDefaultLanguage('en')

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
