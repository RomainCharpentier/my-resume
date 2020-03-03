import React from 'react';
import { withStyles, Avatar, Typography, IconButton, Fab } from '@material-ui/core';
import { translate } from 'react-multi-lang';
import background from '../assets/header_wallpaper.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const styles = (theme) => ({
    'root': {
        background: '#161415 url(' + background + ') no-repeat center',
        backgroundSize: 'cover !important',
        height: '100vh',
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
        transform: 'translate(-50%,-50%)'
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

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector("#key2");

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return(
        <div className={classes.root} id="back-to-top-anchor" ref={ref}>
            <div className={classes.content}>
                <Avatar src='https://avatars2.githubusercontent.com/u/35954925?s=460&v=4' className={classes.avatar} />
                <Typography variant='h1'>
                    {props.t('home.name')}
                </Typography>
                <Typography variant='h3'>
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
                <IconButton onClick={handleClick} className={classes.iconButton}>
                    <KeyboardArrowDownIcon className={classes.icon} />
                </IconButton>
            </div>
        </div>
    );
});

export default withStyles(styles)(translate(Home));