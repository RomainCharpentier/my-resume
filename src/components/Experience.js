import React, { useMemo } from 'react';
import { withStyles, Typography, Grid, Box } from '@material-ui/core';
import ShowMoreText from './ShowMoreText';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    paper: {
        height: 140,
        width: '100',
    },
    image: {
        maxWidth: 'inherit',
        maxHeight: '100px'
    },
});

const Experience = props => {
    const { classes } = props;
    const name = useMemo(() => props.place ? props.place.split(' ')[0].split(',')[0].toLowerCase() : '', [props.place]);
    const image = useMemo(() => {
        try {
            return require(`../assets/logo/${name}.png`);
        } catch (ex) {
            return require('../assets/logo/cat-amania.png');
        }
    }, [name]);

    return(
        <Box display="flex" justifyContent="center" m={1} p={1}>
            <Box p={1}>
                <img src={image} alt='Logo' className={classes.image} />
            </Box>
            <Box p={1}>
                <Typography variant='subtitle1'>{props.title}</Typography>
                <Typography variant='body2' style={{display: 'inline-block'}}>{props.place}</Typography>
                <Typography variant='body2' style={{display: 'inline-block', margin: '0px 5px 0px 5px'}}>•</Typography>
                <Typography variant='body2' style={{display: 'inline-block'}}>{props.start_year} - {props.end_year}</Typography>
                {/* {props.description && props.description.split('\n').map(line => <Typography variant='body2'>{line}</Typography>)} */}
                <ShowMoreText numberOfLines={3} textArray={props.description.split('\n')}/>
            </Box>
        </Box>
    );
};

export default withStyles(styles)(Experience);