import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Button } from '@material-ui/core';
import GitRepository from './GitRepository.js';

const GitRepositoryList = props => {
    const [repos, setRepos] = useState(null);
    const MAX_REPO = 8;

    useEffect(() => {
        axios.get(`https://api.github.com/users/RomainCharpentier/repos`)
            .then(response => {
                setRepos(response.data.sort((a,b)=>new Date(b.updated_at)-new Date(a.updated_at)));
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }, []);

    let items;
    if (repos && repos.length > 0) {
        items = repos.filter((item, index) => index < MAX_REPO).map(item => <GitRepository key={item.id} repo={item} />);
    }
    
    return(
        <React.Fragment>
            <Grid container spacing={3} alignItems='center' justify='center' style={{marginBottom:'10px'}}>
                {items}
            </Grid>
            {repos && repos.length > MAX_REPO && <Button color='primary' variant='contained' onClick={() => window.open('https://github.com/RomainCharpentier?tab=repositories', '_blank').focus()}>Voir plus de repos ...</Button>}
        </React.Fragment>
    );
};

export default GitRepositoryList;