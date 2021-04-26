import React, { useMemo } from 'react';
import { withStyles, Typography, Grid } from '@material-ui/core';
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
        maxHeight: 'inherit'
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
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={6} className={classes.item}>
                <img src={image} alt='Logo' className={classes.image} />
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography variant='subtitle1'>{props.title}</Typography>
                <Typography variant='body2' style={{display: 'inline-block'}}>{props.place}</Typography>
                <Typography variant='body2' style={{display: 'inline-block', margin: '0px 5px 0px 5px'}}>•</Typography>
                <Typography variant='body2' style={{display: 'inline-block'}}>{props.start_year} - {props.end_year}</Typography>
                {/* {props.description && props.description.split('\n').map(line => <Typography variant='body2'>{line}</Typography>)} */}
                <ShowMoreText numberOfLines={3} textArray={props.description.split('\n')}/>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(Experience);