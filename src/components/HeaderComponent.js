'use strict';

import React from 'react';

require('styles/Header.scss');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
      <h1>the best of EveryThing Header</h1>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
