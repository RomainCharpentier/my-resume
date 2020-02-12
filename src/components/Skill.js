import React, { Component } from 'react';
import { Slider, withStyles } from '@material-ui/core';

const styles = {
    slider: {
      padding: '22px 0px'
    }
};

class Skill extends Component {

    render() {
        const { classes, value } = this.props;
        console.log(this.props)

        return (
            <Slider
                classes={{ container: classes.slider }}
                value={value}
            />
        );
    }
}

export default withStyles(styles)(Skill);