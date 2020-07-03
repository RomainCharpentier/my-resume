import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { translate } from 'react-multi-lang';

const Education = props => {

    return(
        <div>
            <Typography variant='subtitle1'>{props.title}</Typography>
            <Typography variant='body2' style={{display: 'inline-block'}}>{props.place}</Typography>
            <Typography variant='body2' style={{display: 'inline-block', margin: '0px 5px 0px 5px'}}>•</Typography>
            <Typography variant='body2' style={{display: 'inline-block'}}>{props.start_year} - {props.end_year}</Typography>
            <Typography variant='body2' style={{display: 'inline-block'}}>{props.description}</Typography>
        </div>
    );
};

export default translate(Education);