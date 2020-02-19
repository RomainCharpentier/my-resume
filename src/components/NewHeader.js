import React from 'react';
import { withStyles, List, ListItem, Avatar, Typography } from '@material-ui/core';
import { translate } from 'react-multi-lang';
import background from '../assets/header_wallpaper.jpg';

const styles = (theme) => ({
    'root': {
        background: '#161415 url(' + background + ') no-repeat center',
        backgroundSize: 'cover !important',
        height: '800px',
        minHeight: '500px',
        textAlign: '-webkit-center'
    },
    'nav' : { 
        backgroundColor: 'transparent !important',
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        width: '-webkit-fill-available'
    },
    'item': {
        '&:hover' : {
            color: '#F06000'
        },
        justifyContent: 'center'
    },
    'avatar': {
        width: theme.spacing(20),
        height: theme.spacing(20)
    },
    'div': {
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        '&>h3': {
            textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'
        }
    }
});

function ListItemLink(props) {
    return <ListItem button component='a' {...props} />;
}

const NewHeader = props => {

    const { classes } = props;
    return(
        <div className={classes.root}>
            <List id='nav' className={classes.nav}>
                <ListItemLink className={classes.item} href='#nav'>Home</ListItemLink>
                <ListItemLink className={classes.item} href='#about'>About</ListItemLink>
                <ListItemLink className={classes.item} href='#resume'>Resume</ListItemLink>
                <ListItemLink className={classes.item} href='#portfolio'>Works</ListItemLink>
                <ListItemLink className={classes.item} href='#testimonials'>Testimonials</ListItemLink>
                <ListItemLink className={classes.item} href='#contact'>Contact</ListItemLink>
            </List>
            <div className={classes.div}>
                <Avatar src='https://avatars2.githubusercontent.com/u/35954925?s=460&v=4' className={classes.avatar} />
                <Typography color='textPrimary' variant='h3'>
                    {props.t('home.title')}
                </Typography>
                <Typography color='textSecondary' variant='h5'>
                    {props.t('home.description')}
                </Typography>
            </div>
        </div>
    );
}

export default withStyles(styles)(translate(NewHeader));