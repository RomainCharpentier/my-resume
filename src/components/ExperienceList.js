import React from 'react';
import { Typography } from '@material-ui/core';
import { translate } from 'react-multi-lang';
import Experience from './Experience';

const ExperienceList = React.forwardRef((props, ref) => {

    const experiences = [];
    let key = `experience.${experiences.length}.title`;
    let item = {
        title: props.t(`${key}.title`),
        description: props.t(`${key}.description`)
    };
    while (item.title !== props.t('experience.title')) {
        experiences.push(item);
        key = `experience.${experiences.length}`;
        item = {
            title: props.t(`${key}.title`),
            description: props.t(`${key}.description`)
        };
    }

    return(
        <div ref={ref}>
            <Typography variant='h5'>{props.t('experience.title')}</Typography>
            {experiences.map(item => <Experience {...item} />)}
        </div >
    );
});

export default translate(ExperienceList);