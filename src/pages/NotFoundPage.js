import React from "react";
import { Link } from '@material-ui/core';
import { translate } from 'react-multi-lang';

class NotFoundPage extends React.Component {

  render() {
    return (
        <div>
            <h3>{this.props.t('notfoundpage.title')}</h3>
            <Link href='#'>{this.props.t('notfoundpage.link')}</Link>
        </div>
    );
  }
}

export default translate(NotFoundPage);