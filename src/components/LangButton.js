import React, { Component } from 'react';
import { setLanguage } from 'react-multi-lang';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

class LangButton extends Component {

    render() {
        return (
            <div className="Btn">
                <ToggleButtonGroup name='buttons' type='radio'>
                    <ToggleButton onClick={() => setLanguage('fr')}>FR</ToggleButton>
                    <ToggleButton onClick={() => setLanguage('en')}>EN</ToggleButton>
                </ToggleButtonGroup>
            </div>
        );
    }
}

export default LangButton;
                    