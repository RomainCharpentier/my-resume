import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import { translate } from 'react-multi-lang';
import GitRepository from './GitRepository.js';

const GitRepositoryList = props => {
    const [repos, setRepos] = useState(null);

    useEffect(() => {
        axios.get(`https://api.github.com/users/RomainCharpentier/repos`)
        .then(response => {
            setRepos(response.data);
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    });

    let items;
    if (repos && repos.length > 0) {
        repos.sort(GitRepository.compare);
        items = repos.map(item => <GitRepository key={item.id} repo={item} />);
    }
    
    return(
        <React.Fragment>
            <Typography variant='h5' className={props.className}>{props.t('git.title')}</Typography>
            {items}
        </React.Fragment>
    );
};

export default translate(GitRepositoryList);