import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class PropDrillingGoodBView extends PureComponent {
  render() {
    const { bgColor, fgColor } = this.props;
    return (
      <h3
        style={{
          backgroundColor: bgColor,
          color: fgColor,
        }}
      >
        Banana
      </h3>
    );
  }
}

PropDrillingGoodBView.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
};

export default PropDrillingGoodBView;
