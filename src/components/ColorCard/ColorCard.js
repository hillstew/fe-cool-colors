import React from 'react';

export const ColorCard = ({ color, toggleLocked }) => {
  const { hex, isLocked, id } = color;

  return (
    <div className="ColorCard" style={{ backgroundColor: hex }}>
      <p className="hex-code">{hex}</p>
      <button
        onClick={() => toggleLocked(id)}
        className={isLocked ? 'locked-button' : 'unlocked-button'}
      />
    </div>
  );
};
