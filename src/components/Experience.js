import React, { useMemo } from 'react';
import { withStyles, Typography, Box } from '@material-ui/core';
import ShowMoreText from './ShowMoreText';
import { importImage } from '../utils.js';

const styles = (theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: '800px'
    },
    image: {
        maxWidth: '150px',
        maxHeight: 'auto'
    },
    text: {
        marginLeft: '5%',
        textAlign: 'left'
    },
});

const Experience = props => {
    const { classes } = props;
    const name = useMemo(() => props.company ? props.company.split(' ')[0].split(',')[0].toLowerCase().replace('é','e') : '', [props.company]);
    const image = useMemo(() => importImage(`logo/${name}.png`), [name]);

    return(
        <Box display="flex" justifyContent="left" m={1} p={1} className={classes.root}>
            <Box p={1}>
                <img src={image} alt='Logo' className={classes.image} />
            </Box>
            <Box p={1} className={classes.text}>
                <Typography variant='subtitle1'>{props.title}</Typography>
                <Typography variant='caption' style={{display: 'inline-block'}}>{props.place}</Typography>
                <Typography variant='caption' style={{display: 'inline-block', margin: '0px 5px 0px 5px'}}>•</Typography>
                <Typography variant='caption' style={{display: 'inline-block'}}>{props.start_year} - {props.end_year}</Typography>
                {/* {props.description && props.description.split('\n').map(line => <Typography variant='body2'>{line}</Typography>)} */}
                <ShowMoreText numberOfLines={3} textArray={props.description.split('\n')}/>
            </Box>
        </Box>
    );
};

export default withStyles(styles)(Experience);