import React from 'react';
import { Link, Typography } from '@material-ui/core';

const Footer = () => {

    return (
        <Typography variant='body2' color='textSecondary' align='center'> 
            {'Copyright © '}
            <Link color='inherit' href='https://romaincharpentier.github.io'>
                Romain Charpentier
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Footer;