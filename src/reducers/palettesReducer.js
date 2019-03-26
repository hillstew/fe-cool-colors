export const palettesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PALETTES':
      return action.palettes;
    case 'SET_PALETTE':
      return [...state, action.palette];
    default:
      return state;
  }
}