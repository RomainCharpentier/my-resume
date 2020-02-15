import React, { Component } from 'react';
import GitRepositoryList from '../components/GitRepositoryList';
import { translate } from 'react-multi-lang';
import { Box, Container, Typography, withStyles } from '@material-ui/core';
import SkillList from '../components/SkillList';

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
            <Container maxWidth="md">
                <Box my={4}>
                    <Typography color='textPrimary' variant="h4" component="h1" gutterBottom>
                        {this.props.t('home.title')}
                    </Typography>
                    <Typography color='textPrimary' gutterBottom>
                        {this.props.t('home.description', {param: 'react'})}
                    </Typography>
                    <SkillList />
                    <GitRepositoryList />
                </Box>
            </Container>
        );
    }
}

export default withStyles(styles)(translate(MainPage));