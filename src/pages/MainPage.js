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
import EducationList from '../components/EducationList';
import ExperienceList from '../components/ExperienceList';

const styles = (theme) => ({
    copyRight: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    scrollTop: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    },
    section: {
    },
    section2: {
        paddingTop: '20px',
        marginBottom: '20px',
        backgroundColor: 'black'
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

const data = {
    content: [
        {
            key: 1,
            title: 'home',
            ref: React.createRef(),
            component: Home
        },
        {
            key: 2,
            title: 'skills',
            ref: React.createRef(),
            component: SkillList
        },
        {
            key: 3,
            title: 'git',
            ref: React.createRef(),
            component: GitRepositoryList
        },
        {
            key: 4,
            title: 'education',
            ref: React.createRef(),
            component: EducationList
        },
        {
            key: 5,
            title: 'experience',
            ref: React.createRef(),
            component: ExperienceList
        }
    ]
}

class MainPage extends Component {

    render() {
        const { classes, t } = this.props;
        return(
            <React.Fragment>
                <NewHeader refs={data.content} />
                {
                    data.content.map(function (item) {
                        let className = classes.section;
                        if (item.key%2 === 0) className = `${classes.section} ${classes.section2}`;
                        let title = item.key!==1 ? <p>{t(`${item.title}.title`)}</p> : '';
                        return (
                            <div className={className} ref={item.ref} id={`key${item.key}`}>
                                {title}
                                {React.createElement(item.component)}
                            </div>);
                        }
                    )
                }
                {/*<img src={logo} className='App-logo' alt='logo' />*/}
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