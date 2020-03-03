import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { translate } from 'react-multi-lang';
import Skill from './Skill.js';
import skills from '../data/skills.json';

const SkillList = props => {

    return (
        <React.Fragment>
            <Typography variant='h5' className={props.className}>{props.t('skills.title')}</Typography>
            <Grid container spacing={3} alignItems='center' justify='center'>
                {skills.body.map((item) => <Skill name={item.name} maxValue={item.level} />)}
            </Grid>
        </React.Fragment>
    );
};

export default translate(SkillList);