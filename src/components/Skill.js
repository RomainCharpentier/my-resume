import React, { Component } from 'react';
import { LinearProgress, withStyles, Typography, Grid } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        width: '300px',
        '& > * + *': {
            marginTop: theme.spacing(2)
        }
    },
    div: {
        border: 'solid ' + theme.palette.primary.dark,
        padding: 'inherit'
    },
    slider: {
        height: '10px',
    }
});

class Skill extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => 
            this.setState({ 
                value: Math.min(this.props.maxValue, this.state.value+1) 
            }), (2000/this.props.maxValue)
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { classes, name } = this.props;

        return (
            <Grid item className={classes.root} borderColor='primary.main'>
                <div className={classes.div}>
                    <Typography variant='subtitle1'>{name}</Typography>
                    <Grid container spacing={3} alignItems='center'>
                        <Grid item xs={9}>
                            <LinearProgress 
                                variant='determinate'
                                className={classes.slider}
                                value={this.state.value}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='body2'>{this.state.value} %</Typography>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(Skill);