import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ColorContainer extends Component {
  render() {
    const { colors } = this.props;
    const colorBoxes = colors.map(color => {
      return (
        <div className='color-box' style={{ backgroundColor: color.hex }}>
          {color.hex}
        </div>
      );
    });

    return <div className='ColorContainer'>{colorBoxes}</div>;
  }
}

export const mapStateToProps = state => ({
  colors: state.colors
});

export default connect(mapStateToProps)(ColorContainer);
