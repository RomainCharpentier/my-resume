import React, { Component } from 'react';
import { Box, withStyles } from '@material-ui/core';
import Skill from './Skill.js';

const styles = {
    slider: {
      padding: '22px 0px'
    }
};

class SkillList extends Component {

    render() {
        return (
            <Box display='flex'>
                <Skill value='10' />
                <Skill value='20' />
                <Skill value='20' />
                <Skill value='20' />
                <Skill value='20' />
                <Skill value='20' />
                <Skill value='20' />
                <Skill value='20' />
            </Box>
        );
    }
}

export default withStyles(styles)(SkillList);