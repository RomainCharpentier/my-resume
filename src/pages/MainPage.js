import React, { Component } from 'react';
import GitRepositoryList from '../components/GitRepositoryList';
import { translate } from 'react-multi-lang';
import LangButton from '../components/LangButton';
import { Box, Container, Link, Typography, Avatar } from '@material-ui/core';

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

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container maxWidth="sm">
                <Box my={4}>
                    <Avatar src='https://avatars2.githubusercontent.com/u/35954925?s=460&v=4' />
                    <Typography color='textPrimary' variant="h4" component="h1" gutterBottom>
                        {this.props.t('home.Title', {param: 'react'})}
                    </Typography>
                    <GitRepositoryList />
                    <LangButton />
                    <Copyright />
                </Box>
            </Container>
        );
    }
}

export default translate(MainPage);