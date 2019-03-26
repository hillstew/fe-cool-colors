import shortid from 'shortid';

export const updateColors = colors => {
  return [...colors].map(color => {
    if (!color.isLocked) {
      color.hex = `#${makeColor()}`;
    }
    return color;
  });
};

export const generateColors = () => {
  let newColors = [];
  while (newColors.length < 5) {
    newColors.push({
      hex: `#${makeColor()}`,
      isLocked: false,
      id: shortid.generate()
    });
  }
  return newColors;
};

const hexChars = Array.from('ABCDEF0123456789');
export const makeColor = () => {
  let color = [];
  while (color.length < 6) {
    color.push(hexChars[randomNumber()]);
  }
  return color.join('');
};

export const randomNumber = () => {
  return Math.floor(Math.random() * Math.floor(hexChars.length - 1));
};
