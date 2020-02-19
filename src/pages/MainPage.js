import React, { Component } from 'react';
import GitRepositoryList from '../components/GitRepositoryList';
import NewHeader from '../components/NewHeader';
import { translate } from 'react-multi-lang';
import { Box, Container, Typography, withStyles } from '@material-ui/core';
import SkillList from '../components/SkillList';
import logo from '../assets/logo.svg';

const styles = {
    copyRight: {
        flex: 1,
        justifyContent: 'flex-end'
    }
}

class MainPage extends Component {

    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <NewHeader />
                <Container maxWidth="md">
                    <Box my={4}>
                        <Typography color='textPrimary' variant="h4" component="h1" gutterBottom>
                            {this.props.t('home.title')}
                        </Typography>
                        <img src={logo} className='App-logo' alt='logo' />
                        <Typography color='textPrimary' gutterBottom>
                            {this.props.t('home.description', {param: 'react'})}
                        </Typography>
                        <SkillList />
                        <GitRepositoryList />
                    </Box>
                </Container>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(translate(MainPage));