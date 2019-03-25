export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return action.projects;
    case 'SET_PROJECT':
      return [...state, action.project];
    default:
      return state;
  }
};
