import React from 'react';
import { Grid } from '@material-ui/core';
import Skill from './Skill.js';
import skills from '../data/skills.json';

const SkillList = props => {

    return (
        <React.Fragment>
            <Grid container spacing={3} alignItems='center' justify='center'>
                {skills.body.map((item, key) => <Skill name={item.name} maxValue={item.level} key={key} />)}
            </Grid>
        </React.Fragment>
    );
};

export default SkillList;