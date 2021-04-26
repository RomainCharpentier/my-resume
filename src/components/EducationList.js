import React from 'react';
import { translate } from 'react-multi-lang';
import Education from './Education';
import { getLanguage } from '../utils.js';
import model from '../models/experience';

const EducationList = props => {
    const educations = getLanguage('fr', 'education.values', model);

    return(
        <React.Fragment>
            {educations.map((item, key) => <Education {...item} key={key} />)}
        </React.Fragment>
    );
};

export default translate(EducationList);