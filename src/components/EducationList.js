import React from 'react';
import { Typography } from '@material-ui/core';
import { translate } from 'react-multi-lang';
import Education from './Education';

const EducationList = props => {

    const educations = [];
    let key = `education.${educations.length}.title`;
    let item = {
        title: props.t(`${key}.title`),
        description: props.t(`${key}.description`)
    };
    while (item.title !== props.t('education.title')) {
        educations.push(item);
        key = `education.${educations.length}`;
        item = {
            title: props.t(`${key}.title`),
            description: props.t(`${key}.description`)
        };
    }

    return(
        <React.Fragment>
            <Typography variant='h5' className={props.className}>{props.t('education.title')}</Typography>
            {educations.map(item => <Education {...item} />)}
        </React.Fragment>
    );
};

export default translate(EducationList);