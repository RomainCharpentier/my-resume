import React, { Component, Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { translate } from 'react-multi-lang';
import Skill from './Skill.js';

class SkillList extends Component {

    render() {
        return (
            <Fragment>
                <Typography variant='h5'>{this.props.t('home.skills')}</Typography>
                <Grid container spacing={3} alignItems='center' justify='center'>
                    <Skill name='Java' maxValue={90} />
                    <Skill name='Javascript' maxValue={70} />
                    <Skill name='Kotlin' maxValue={30} />
                </Grid>
            </Fragment>
        );
    }
}

export default translate(SkillList);