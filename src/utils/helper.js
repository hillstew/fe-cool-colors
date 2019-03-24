export const updateColors = (colors = []) => {
  if (colors.length) {
    return [...colors].map(color => {
      if (!color.isLocked) {
        return generateColor();
      }
      return color;
    });
  } else {
    let newColors = [];
    while (newColors.length < 5) {
      newColors.push({
        hex: `#${generateColor()}`,
        isLocked: false
      });
    }
    return newColors;
  }
};

const possibleCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0'
];

const generateColor = () => {
  let color = [];
  while (color.length < 6) {
    color.push(possibleCharacters[randomNumber()]);
  }
  return color.join('');
};

const randomNumber = () => {
  return Math.floor(Math.random() * Math.floor(possibleCharacters.length - 1));
};