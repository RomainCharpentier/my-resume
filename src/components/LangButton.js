import React, { Component } from 'react';
import { setLanguage } from 'react-multi-lang';
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

class LangButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedValue: 'fr'
        };
        this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState({
            value: 'fr'
        });
        setLanguage(event.target.value);
    };

    render() {
        return (
            <RadioGroup
                aria-label="language"
                name="language1"
                value={this.state.value}
                onChange={this.handleChange}
            >
                <FormControlLabel value="fr" control={<Radio />} label="FR" />
                <FormControlLabel value="en" control={<Radio />} label="EN" />
            </RadioGroup>
        );
    }
}

export default LangButton;
                    