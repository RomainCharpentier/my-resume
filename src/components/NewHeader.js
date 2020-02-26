import React, { useRef } from 'react';
import { withStyles, Typography, useScrollTrigger, Slide, AppBar, Toolbar } from '@material-ui/core';
import { translate } from 'react-multi-lang';

const styles = (theme) => ({
    'nav' : { 
        backgroundColor: 'transparent !important',
        display: 'flex',
        flexDirection: 'row'
    },
    'item': {
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
    'appBar': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer'
        }
    }
});

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const NewHeader = props => {
    const { classes, refs } = props;

    const scroll = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }

    return(
        <HideOnScroll {...props}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.nav}>
                    {refs.map(value => (<Typography className={classes.item} onClick={() => {scroll(value.ref)}}>{props.t(`${value.title}.title`)}</Typography>))}
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default withStyles(styles)(translate(NewHeader));