import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(lang) => (
          <div>
            Select a language:
            <i className="flag us" onClick={() => lang.onLanguageChange('english')}/>
            <i className="flag nl" onClick={() => lang.onLanguageChange('dutch')}/>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default LanguageSelector;