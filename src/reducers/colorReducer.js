export const colorReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_COLORS':
      return action.colors;
    case 'TOGGLE_LOCKED':
      return [...state].map(color => {
        if (color.id === action.color.id) {
          return { ...color, isLocked: !color.isLocked };
        }
        return color;
      });
    default:
      return state;
  }
};
