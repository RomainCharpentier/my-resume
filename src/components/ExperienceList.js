import React from 'react';
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

export default ExperienceList;