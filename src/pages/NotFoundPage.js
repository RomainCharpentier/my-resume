import React from "react";
import { Link } from '@material-ui/core';
import { getLanguage } from '../utils.js';

class NotFoundPage extends React.Component {

  render() {
    return (
        <div>
            <h3>{getLanguage('fr','notfoundpage.title')}</h3>
            <Link href='#'>{getLanguage('fr','notfoundpage.link')}</Link>
        </div>
    );
  }
}

export default NotFoundPage;