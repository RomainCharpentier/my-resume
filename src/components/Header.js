import React, { useEffect, useState } from 'react';
import { withStyles, Typography, useScrollTrigger, Slide, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { translate } from 'react-multi-lang';

const styles = (theme) => ({
    toolbar : { 
        backgroundColor: 'transparent !important',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    background : { 
        backgroundColor: 'red !important',
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
        backgroundColor: 'transparent',
        boxShadow: 'none',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    mobileIconButton: {
        justifyContent: 'left',
    },
    'html:not([data-scroll=\'0\'])': {
        toolbar: {
            position: 'fixed',
            backgroundColor: 'red !important'
        }
    }
});

const HideOnScroll = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

// Window width
const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const Header = props => {
    const { classes, refs } = props;
    const [width, setWidth] = useState(getWidth());
    const [scrollY, setScrollY] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const webFormat = refs.map((value, key) => (<Typography key={key} className={classes.headerTitle} onClick={() => {scroll(value.ref)}}>{props.t(`${value.title}.title`)}</Typography>));
    const mobileFormat = (<IconButton edge="start" className={classes.mobileIconButton} color="inherit" onClick={handleClick}><MenuIcon /></IconButton>);

    const MIN_WEB_WIDTH = 600;
    const MIN_BACKGROUND_BAR = 900;
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
        
        const scrollListener = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', scrollListener);
        
        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
            window.removeEventListener('scroll', scrollListener);
        }
    });

    const tmp = scrollY > MIN_BACKGROUND_BAR ? classes.background : '';

    return(
        <HideOnScroll {...props}>
            <AppBar className={classes.appBar}>
                <Toolbar className={`${classes.toolbar} ${tmp}`}>
                    {headerContent}
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                    >
                        {refs.map(value => (
                            <MenuItem className={classes.headerTitle} key={value.key} onClick={() => {scroll(value.ref); handleClose();}}>
                                <Typography>{props.t(`${value.title}.title`)}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default withStyles(styles)(translate(Header));