import React from 'react';
import { translate } from 'react-multi-lang';
import Experience from './Experience';
import { getLanguage } from '../utils.js';
import model from '../models/experience';

const ExperienceList = props => {
    const experiences = getLanguage('fr', 'experience.values', model);

    return(
        <React.Fragment>
            {experiences.map((item, key) => <Experience {...item} key={key} />)}
        </React.Fragment>
    );
};

export default translate(ExperienceList);