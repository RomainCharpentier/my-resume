import React, { Component } from 'react';
import under_construction from '../assets/under_construction.png';
import { Container, withStyles } from '@material-ui/core';

const styles = {
    logo: {
        width: 'inherit',
        height: 'auto'
    }
};

class ConstructionPage extends Component {

    render() {
        const { classes } = this.props;
        return(
            <Container maxWidth="sm">
                <img className={classes.logo} alt='under construction logo' src={under_construction} />
            </Container>
        );
    }
}

export default withStyles(styles)(ConstructionPage);