import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { translate } from 'react-multi-lang';

const Experience = React.forwardRef((props, ref) => {

    return(
        <div ref={ref}>
            <Typography variant='h6'>{props.title}</Typography>
            <Typography>{props.description}</Typography>
        </div >
    );
});

export default translate(Experience);