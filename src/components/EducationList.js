import React from 'react';
import { Typography } from '@material-ui/core';
import { translate } from 'react-multi-lang';
import Education from './Education';

const EducationList = React.forwardRef((props, ref) => {

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
        <div ref={ref}>
            <Typography variant='h5'>{props.t('education.title')}</Typography>
            {educations.map(item => <Education {...item} />)}
        </div >
    );
});

export default translate(EducationList);