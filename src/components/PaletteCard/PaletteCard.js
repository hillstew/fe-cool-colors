import React from 'react';

export const PaletteCard = ({ palette, deletePalette, palettes }) => {
  const { name, color_1, color_2, color_3, color_4, color_5, id } = palette;
  return (
    <div className="PaletteCard">
      <p className="palette-name">{name}</p>
      <div className="palette-container">
        <div className="palette">
          <div style={{ backgroundColor: color_1 }} className="palette-box" />
          <div style={{ backgroundColor: color_2 }} className="palette-box" />
          <div style={{ backgroundColor: color_3 }} className="palette-box" />
          <div style={{ backgroundColor: color_4 }} className="palette-box" />
          <div style={{ backgroundColor: color_5 }} className="palette-box" />
        </div>
        <button
          className="delete-palette-button"
          onClick={() => deletePalette(id, palettes)}
        />
      </div>
    </div>
  );
};
