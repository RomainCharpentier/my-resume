import React from 'react';
import { withStyles, Avatar, Typography, IconButton, Grid } from '@material-ui/core';
import background from '../assets/header_wallpaper.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { getLanguage } from '../utils.js';

const styles = (theme) => ({
    root: {
        background: '#161415 url(' + background + ') no-repeat center',
        backgroundSize: 'cover !important',
        height: '100vh',
        textAlign: '-webkit-center'
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    },
    content: {
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    },
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    iconButton: {
        '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.info.light
        }
    },
    icon: {
        fontSize: '30px'
    },
    text: {
        width: '65%',
        margin: 'auto',
        lineHeight: '200%'
    }
});

const Home = React.forwardRef((props, ref) => {
    const { classes } = props;

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector("#key1");

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return(
        <div className={classes.root} id="back-to-top-anchor" ref={ref}>
            <div className={classes.content}>
                <div className={classes.text}>
                    <Grid container alignItems="center" justify="center">
                        <Avatar src='https://avatars2.githubusercontent.com/u/35954925?s=460&v=4' className={classes.avatar} />
                    </Grid>
                    <Typography variant='h1'>
                        {getLanguage('fr','home.name')}
                    </Typography>
                    <Typography variant='h3'>
                        {getLanguage('fr','home.description_1')}
                    </Typography>
                    <Typography variant='h4'>
                        {getLanguage('fr','home.description_2')}
                    </Typography>
                </div>
                <div>
                    <IconButton href='https://www.linkedin.com/in/romain-charpentier' className={classes.iconButton}>
                        <LinkedInIcon className={classes.icon} />
                    </IconButton> 
                    <IconButton href='https://github.com/RomainCharpentier' className={classes.iconButton}>
                        <GitHubIcon className={classes.icon} />
                    </IconButton> 
                </div>
                <IconButton onClick={handleClick} className={classes.iconButton}>
                    <KeyboardArrowDownIcon className={classes.icon} />
                </IconButton>
            </div>
        </div>
    );
});

export default withStyles(styles)(Home);