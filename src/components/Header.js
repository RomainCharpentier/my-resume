import React, { useEffect, useState } from 'react';
import { withStyles, Typography, useScrollTrigger, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
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
    },
    mobileIconButton: {
        justifyContent: 'left',
        position: 'absolute',
        right: '0px'
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
      elevation: !mobile && trigger ? 4 : 0,
      style:{
        backgroundColor: !mobile && trigger ? '#0a093b' : 'transparent',
      }
    });
}

// Window width
const MIN_WEB_WIDTH = 600;
const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const Header = props => {
    const { classes, refs } = props;
    const [width, setWidth] = useState(getWidth());
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const webFormat = refs.map((value, key) => (<Typography key={key} className={classes.headerTitle} onClick={() => {scroll(value.ref)}}>{getLanguage('fr',`${value.title}.title`)}</Typography>));
    const mobileFormat = (<IconButton edge="start" className={classes.mobileIconButton} color="inherit" onClick={handleClick}><MenuIcon /></IconButton>);

    const [headerContent, setHeaderContent] = useState((width > MIN_WEB_WIDTH) ? webFormat : mobileFormat);

    const scroll = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    }
    
    useEffect(() => {
        const resizeListener = () => {
            // change width from the state object
            setWidth(getWidth());
            if (width > MIN_WEB_WIDTH) {
                setHeaderContent(webFormat);
            } else {
                setHeaderContent(mobileFormat);
            }
            handleClose();
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);
        
        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        }
    });

    return(
        <ElevationScroll {...props} mobile={width <= MIN_WEB_WIDTH}>
            <AppBar className={classes.appBar}>
                <Toolbar variant="dense">
                    {headerContent}
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                    >
                        {refs.map(value => (
                            <MenuItem className={classes.headerTitle} key={value.key} onClick={() => {scroll(value.ref); handleClose();}}>
                                <Typography>{getLanguage('fr',`${value.title}.title`)}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
};

export default withStyles(styles)(Header);