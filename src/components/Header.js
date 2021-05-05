import React, { useEffect, useState } from 'react';
import { withStyles, Typography, useScrollTrigger, AppBar, Toolbar, IconButton, Drawer, List, ListItem, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { getLanguage } from '../utils.js';

const styles = (theme) => ({
    toolbar : { 
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerTitle: {
        '&:hover' : {
            color: '#F06000'
        },
        fontWeight: 'bold',
        justifyContent: 'center',
        textShadow: '1px 1px 2px red, 0 0 1em blue',
        textTransform: 'uppercase',
        letterSpacing: '2.5px',
        margin: '10px'
    },
    appBar: {
        boxShadow: 'none',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer'
        }
    }
});

const ElevationScroll = (props) => {
    const { children, window, mobile } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      style:{
        backgroundColor: trigger ? '#0a093b' : 'transparent',
      }
    });
}

// Window width
const MIN_WEB_WIDTH = 600;
const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const Header = props => {
    const { classes, refs } = props;
    const [width, setWidth] = useState(getWidth());
    const [anchorEl, setAnchorEl] = useState(null);
    const [headerContent, setHeaderContent] = useState('');

    const scroll = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    }
    
    useEffect(() => {
        const webFormat = (
            refs.map((value, key) => (
                <Typography key={key} className={classes.headerTitle} onClick={() => {scroll(value.ref)}}>
                    {getLanguage('fr',`${value.title}.title`)}
                </Typography>
            ))
        );
    
        const mobileFormat = (
            <>
                <IconButton edge="start" className={classes.mobileIconButton} color="inherit" onClick={(event) => setAnchorEl(event.currentTarget)}>
                    <MenuIcon />
                </IconButton>
                <Typography>Romain Charpentier</Typography>
                <Drawer
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                >
                    <Typography variant='h3' style={{textAlign: 'center'}}>Menu</Typography>
                    <Divider />
                    <List>
                        {refs.map(value => (
                            <ListItem key={value.key} onClick={() => {scroll(value.ref); setAnchorEl(null);}}>
                                <Typography variant='subtitle1'>{getLanguage('fr',`${value.title}.title`)}</Typography>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </>
        );

        setHeaderContent((width > MIN_WEB_WIDTH) ? webFormat : mobileFormat)
    }, [anchorEl, classes.headerTitle, classes.mobileIconButton, refs, width]);
    
    useEffect(() => {
        const resizeListener = () => {
            // change width from the state object
            setWidth(getWidth());
            setAnchorEl(null);
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);
        
        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        }
    }, [width]);

    return(
        <ElevationScroll {...props} mobile={width <= MIN_WEB_WIDTH}>
            <AppBar className={classes.appBar}>
                <Toolbar variant="dense">
                    {headerContent}
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
};

export default withStyles(styles)(Header);