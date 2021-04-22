import React from 'react';
import { Typography } from '@material-ui/core';
import { translate } from 'react-multi-lang';
import Education from './Education';

const EducationList = props => {

    const educations = [];
    let key = `education.${educations.length}.title`;
    let item = {
        title: props.t(`${key}.title`),
        description: props.t(`${key}.description`),
        place: props.t(`${key}.place`),
        start_year: props.t(`${key}.start_year`),
        end_year: props.t(`${key}.end_year`)
    };
    while (item.title !== props.t('education.title')) {
        educations.push(item);
        key = `education.${educations.length}`;
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
            {educations.map((item, key) => <Education {...item} key={key} />)}
        </React.Fragment>
    );
};

export default translate(EducationList);