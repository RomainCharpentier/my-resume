import React, { useMemo } from 'react';
import { Link, Typography, Card, CardMedia, CardActionArea, CardContent, CardActions, Button, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        width: 400,
        height: 300,
        border: 'solid',
        margin: '5px 5px'
    },
    media: {
        height: 140,
    }
});

export function compare (a, b) {
    if (a.updated_at > b.updated_at) return -1;
    if (a.updated_at < b.updated_at) return 1;
    return 0;
}

const GitRepository = props => {
    const { classes } = props;
    const name = useMemo(() => props.repo.description ? props.repo.description.split(' ')[0].split(',')[0].toLowerCase() : '', [props.repo.description]);
    const image = useMemo(() => {
        try {
            return require(`../assets/git/${name}.png`);
        } catch (ex) {
            return require('../assets/git/default.png');
        }
    }, [name]);

    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={props.repo.name}
                />
            </CardActionArea>
            <CardContent>
                <Link variant='subtitle1' href={props.repo.clone_url}>{props.repo.name}</Link>
                <Typography variant='body2'>{props.repo.description}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => window.open(props.repo.clone_url, '_blank').focus()}>Voir plus</Button>
            </CardActions>
        </Card>
    );
};

export default withStyles(styles)(GitRepository);