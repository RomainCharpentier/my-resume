import React from 'react';
import { withStyles, Avatar, Typography, IconButton, useScrollTrigger, Slide, AppBar, Toolbar } from '@material-ui/core';
import { translate } from 'react-multi-lang';
import background from '../assets/header_wallpaper.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const styles = (theme) => ({
    'root': {
        background: '#161415 url(' + background + ') no-repeat center',
        backgroundSize: 'cover !important',
        height: '600px',
        minHeight: '600px',
        textAlign: '-webkit-center'
    },
    'avatar': {
        width: theme.spacing(20),
        height: theme.spacing(20)
    },
    'content': {
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        '&>h3': {
            textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'
        }
    },
    'appBar': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    'iconButton': {
        '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.info.light
        }
    },
    'icon': {
        fontSize: '30px'
    }
});

const Home = React.forwardRef((props, ref) => {
    const { classes } = props;
    console.log(`ref : ${ref}`);

    return(
        <div className={classes.root} id="back-to-top-anchor" ref={ref}>
            <div className={classes.content}>
                <Avatar src='https://avatars2.githubusercontent.com/u/35954925?s=460&v=4' className={classes.avatar} />
                <Typography color='textPrimary' variant='h3'>
                    {props.t('home.title')}
                </Typography>
                <Typography color='textSecondary' variant='h5'>
                    {props.t('home.description')}
                </Typography>
                <div>
                    <IconButton href='https://www.linkedin.com/in/romain-charpentier' className={classes.iconButton}>
                        <LinkedInIcon className={classes.icon} />
                    </IconButton> 
                    <IconButton href='https://github.com/RomainCharpentier' className={classes.iconButton}>
                        <GitHubIcon className={classes.icon} />
                    </IconButton> 
                </div>
            </div>
        </div>
    );
});

export default withStyles(styles)(translate(Home));