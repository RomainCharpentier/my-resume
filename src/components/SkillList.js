import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { translate } from 'react-multi-lang';
import Skill from './Skill.js';

const SkillList = React.forwardRef((props, ref) => {

    return (
        <div ref={ref}>
            <Typography variant='h5'>{props.t('skills.title')}</Typography>
            <Grid container spacing={3} alignItems='center' justify='center'>
                <Skill name='Java' maxValue={90} />
                <Skill name='Javascript' maxValue={70} />
                <Skill name='Kotlin' maxValue={30} />
            </Grid>
        </div >
    );
});

export default translate(SkillList);