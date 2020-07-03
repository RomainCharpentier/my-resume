import React from 'react';
import { Typography } from '@material-ui/core';
import { translate } from 'react-multi-lang';
import Experience from './Experience';

const ExperienceList = props => {

    const experiences = [];
    let key = `experience.${experiences.length}.title`;
    let item = {
        title: props.t(`${key}.title`),
        description: props.t(`${key}.description`),
        place: props.t(`${key}.place`),
        start_year: props.t(`${key}.start_year`),
        end_year: props.t(`${key}.end_year`)
    };
    while (item.title !== props.t('experience.title')) {
        experiences.push(item);
        key = `experience.${experiences.length}`;
        item = {
            title: props.t(`${key}.title`),
            description: props.t(`${key}.description`),
            place: props.t(`${key}.place`),
            start_year: props.t(`${key}.start_year`),
            end_year: props.t(`${key}.end_year`)
        };
    }

    return(
        <React.Fragment>
            <Typography variant='h5' className={props.className}>{props.t('experience.title')}</Typography>
            {experiences.map((item, key) => <Experience {...item} key={key} />)}
        </React.Fragment>
    );
};

export default translate(ExperienceList);