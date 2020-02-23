import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GitRepositoryList from '../components/GitRepositoryList';
import NewHeader from '../components/NewHeader';
import { translate } from 'react-multi-lang';
import { Box, Container, Typography, withStyles, useScrollTrigger, Zoom, Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SkillList from '../components/SkillList';
import logo from '../assets/logo.svg';
import Home from '../components/Home';

const styles = (theme) => ({
    copyRight: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    scrollTop: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    }
});

const ScrollTop = props => {
    const { children, window } = props;
    const classes = props.classes;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} className={classes.scrollTop}>
                {children}
            </div>
        </Zoom>
    );
}
  
ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func
};

const test = props => {

    return (
        <div>

        </div>
    );
}

class MainPage extends Component {

    render() {
        const { classes } = this.props;
        let refs = {'home': React.createRef(), 'git': React.createRef()}
        return(
            <React.Fragment>
                <NewHeader refs={refs} />
                <Home ref={refs['home']} />
                <img src={logo} className='App-logo' alt='logo' />
                <SkillList />
                <GitRepositoryList ref={refs['git']} />
                <ScrollTop {...this.props}>
                    <Fab color='primary' size='small' aria-label='scroll back to top'>
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(translate(MainPage));