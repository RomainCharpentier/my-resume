import React, { Component } from 'react';
import GitRepositoryList from '../components/GitRepositoryList';
import { translate } from 'react-multi-lang';
import { Box, Container, Link, Typography, Avatar } from '@material-ui/core';
import SkillList from '../components/SkillList';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

class MainPage extends Component {

    render() {
        return(
            <Container maxWidth="sm">
                <Box my={4}>
                    <Typography color='textPrimary' variant="h4" component="h1" gutterBottom>
                        {this.props.t('home.title', {param: 'react'})}
                    </Typography>
                    <Typography color='textPrimary' gutterBottom>
                        {this.props.t('home.description', {param: 'react'})}
                    </Typography>
                    <SkillList />
                    <GitRepositoryList />
                    <Copyright />
                </Box>
            </Container>
        );
    }
}

export default translate(MainPage);