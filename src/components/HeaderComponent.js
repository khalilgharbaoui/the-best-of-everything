'use strict';

import React from 'react';

require('styles/Header.scss');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
      <center><img src="http://webtotally.com/theBestofEverything.jpg" /></center>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
