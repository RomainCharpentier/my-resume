import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GitRepositoryList from '../components/GitRepositoryList';
import Header from '../components/Header';
import { withStyles, useScrollTrigger, Zoom, Fab, Typography } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SkillList from '../components/SkillList';
import Home from '../components/Home';
import EducationList from '../components/EducationList';
import ExperienceList from '../components/ExperienceList';
import { getLanguage } from '../utils.js';

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
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    section2: {
        backgroundColor: 'rgb(36, 36, 36)'
    },
    sectionTitle: {
        textTransform: 'uppercase'
    },
    center: {
        margin: 'auto'
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
            key: 0,
            title: 'home',
            ref: React.createRef(),
            component: Home
        },
        {
            key: 1,
            title: 'skills',
            ref: React.createRef(),
            component: SkillList
        },
        {
            key: 2,
            title: 'git',
            ref: React.createRef(),
            component: GitRepositoryList
        },
        {
            key: 3,
            title: 'education',
            ref: React.createRef(),
            component: EducationList
        },
        {
            key: 4,
            title: 'experience',
            ref: React.createRef(),
            component: ExperienceList
        }
    ]
}

class MainPage extends Component {

    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <Header refs={data.content} />
                {
                    data.content.map(function (item) {
                        let className = classes.section;
                        if (item.key%2!==0) className = `${classes.section} ${classes.section2}`;
                        if (item.key===0) className = ``;
                        return (
                            <div className={className} key={item.key} ref={item.ref} id={`key${item.key}`}>
                                {item.key > 0 && <Typography variant='h5' style={{marginBottom:'10px'}}>{getLanguage('fr',`${item.title}.title`).toUpperCase()}</Typography>}
                                {React.createElement(item.component, {className:classes.sectionTitle})}
                            </div>
                       )
                    })
                }
                {/* <LangButton /> */}
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

export default withStyles(styles)(MainPage);