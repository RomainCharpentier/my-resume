import React from 'react';
import Experience from './Experience';
import { getLanguage } from '../utils.js';
import model from '../models/experience';

const ExperienceList = props => {
    const { data } = props;
    const experiences = getLanguage('fr', `${data}.values`, model);
    console.log(experiences)

    return(
        <React.Fragment>
            {experiences && experiences.length && experiences.map((item, key) => <Experience {...item} key={key} />)}
        </React.Fragment>
    );
};

export default ExperienceList;