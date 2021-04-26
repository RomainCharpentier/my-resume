import React, { useState, useMemo } from 'react';
import { Typography, Button } from '@material-ui/core';

const ShowMoreText = ({ textArray, numberOfLines }) => {
    const [text, setText] = useState(textArray.slice(0, numberOfLines));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const displayButton = useMemo(() => text.length !== textArray.length, [textArray]);

    const onClick = event => {
        if (text.length === numberOfLines) {
            setText(textArray);
        } else {
            setText(textArray.slice(0, numberOfLines));
        }
    }
    
    return(
        <div>
            {text.map((line, index) => <Typography variant='body2' key={index}>{line}</Typography>)}
            {displayButton && text.length === numberOfLines && <Button onClick={onClick}>Voir plus</Button>}
            {displayButton && text.length !== numberOfLines && <Button onClick={onClick}>Voir moins</Button>}
        </div>
    );
};

export default ShowMoreText;