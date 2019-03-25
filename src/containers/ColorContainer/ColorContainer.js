import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ColorCard } from '../../components/ColorCard/ColorCard';
import { toggleLocked, setColors } from '../../actions';
import { updateColors } from '../../utils/helper';

export class ColorContainer extends Component {
  render() {
    const { colors, toggleLocked, setColors } = this.props;
    const colorBoxes = colors.map(color => {
      return <ColorCard
        key={color.id}
        color={color}
        toggleLocked={toggleLocked} />;
    });

    return <div className="ColorContainer">
      {colorBoxes}
      <div>
        <button 
          className='generate-color-button'
          onClick={() => setColors(updateColors(colors))}>Generate!</button>
      </div>
    </div>;
  }
}

export const mapStateToProps = state => ({
  colors: state.colors
});

export const mapDispatchToProps = dispatch => ({
  toggleLocked: id => dispatch(toggleLocked(id)),
  setColors: colors => dispatch(setColors(colors))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorContainer);
