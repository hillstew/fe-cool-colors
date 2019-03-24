export const setColors = colors => ({
  type: 'SET_COLORS',
  colors
});

export const setLoading = bool => ({
  type: 'SET_LOADING',
  bool
});

export const setError = error => ({
  type: 'SET_ERROR',
  error
});

export const setProjects = projects => ({
  type: 'SET_PROJECTS',
  projects
});

export const setPalettes = palettes => ({
  type: 'SET_PALETTES',
  palettes
});

export const toggleLocked = id => ({
  type: 'TOGGLE_LOCKED',
  id
});
