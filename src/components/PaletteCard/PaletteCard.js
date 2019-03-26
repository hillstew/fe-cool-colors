import React from 'react';
import shortid from 'shortid';

export const PaletteCard = (props) => {
  const { palette, deletePalette, palettes, setColors } = props;
  const { name, color_1, color_2, color_3, color_4, color_5, id } = palette;
  const colors = [color_1, color_2, color_3, color_4, color_5];
  const colorPackages = colors.map(color => {
    return { hex: color, isLocked: false, id: shortid.generate() };
  });
  const colorBoxes = colorPackages.map(color => {
    return <div style={{ backgroundColor: color.hex }} className='palette-box' key={color.id} />;
  });

  return (
    <div className='PaletteCard'>
      <p className='palette-name'>{name}</p>
      <div className='palette-container'>
        <div className='palette' onClick={() => setColors(colorPackages)}>
          {colorBoxes}
        </div>
        <button
          className='delete-palette-button'
          onClick={() => deletePalette(id, palettes)}
        />
      </div>
    </div>
  );
};
