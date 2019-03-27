import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ColorCard } from '../../components/ColorCard/ColorCard';
import { toggleLocked } from '../../actions';
import Controls from '../Controls/Controls';

export class ColorContainer extends Component {
  render() {
    const { colors, toggleLocked } = this.props;
    const colorBoxes = colors.map(color => {
      return (
        <ColorCard key={color.id} color={color} toggleLocked={toggleLocked} />
      );
    });

    return (
      <div className="ColorContainer">
        {colorBoxes}
        <Controls />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  colors: state.colors
});

export const mapDispatchToProps = dispatch => ({
  toggleLocked: id => dispatch(toggleLocked(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorContainer);

ColorContainer.propTypes = {
  colors: PropTypes.array,
  toggleLoading: PropTypes.func
}