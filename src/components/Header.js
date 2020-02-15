import React, { Component, Fragment } from 'react';
import clsx from 'clsx';
import { Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, withStyles, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import LangButton from './LangButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: 'none'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    title: {
        flexGrow: 1
    }
});

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'open': false
        };
    }

    handleDrawerOpen = () => {
        this.setState({
            'open': true
        })
    };

    handleDrawerClose = () => {
        this.setState({
            'open': false
        })
    };

    render() {
        const { classes } = this.props;
        return(
            <Fragment>
                <AppBar
                    color='inherit'
                    position='sticky'
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            onClick={this.handleDrawerOpen}
                            edge='start'
                            className={clsx(classes.menuButton, this.state.open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' noWrap className={classes.title} align='left'>
                            Resume
                        </Typography>
                        <Typography variant='h6' noWrap>
                            Romain Charpentier
                        </Typography>
                        <Avatar src='https://avatars2.githubusercontent.com/u/35954925?s=460&v=4' />
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant='persistent'
                    anchor='left'
                    open={this.state.open}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                >
                    <div 
                        className={classes.drawerHeader} 
                        onClick={this.handleDrawerClose}
                    >
                        <IconButton onClick={this.handleDrawerClose}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <IconButton onClick={()=> window.open('https://www.linkedin.com/in/romain-charpentier/', '_blank')}>
                        <LinkedInIcon />
                    </IconButton>
                    <LangButton />
                    <button onClick={this.props.theme}>change</button>
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Header);