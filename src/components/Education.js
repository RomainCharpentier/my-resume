import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { translate } from 'react-multi-lang';

const Education = props => {

    return(
        <div>
            <Typography variant='subtitle1'>{props.title}</Typography>
            <Typography variant='body2'>{props.description}</Typography>
        </div >
    );
};

export default translate(Education);