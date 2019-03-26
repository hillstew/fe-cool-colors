import * as actions from './index';

describe('actions', () => {
  it('should return a type of SET_COLORS, with array of colors', () => {
    const colors = [
      { hex: '#345423', id: 1, isLocked: false },
      { hex: '#345423', id: 1, isLocked: false },
      { hex: '#345423', id: 1, isLocked: false }
    ];
    const expected = {
      type: 'SET_COLORS',
      colors
    };
    const result = actions.setColors(colors);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_LOADING, with bool', () => {
    const bool = false;
    const expected = {
      type: 'SET_LOADING',
      bool
    };
    const result = actions.setLoading(bool);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_ERROR, with an error', () => {
    const error = 'pesky error';
    const expected = {
      type: 'SET_ERROR',
      error
    };
    const result = actions.setError(error);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_PROJECTS, with array of colors', () => {
    const projects = [
      { name: 'Movie-Tracker', id: 1 },
      { name: 'Trapper-Keeper', id: 2 }
    ];
    const expected = {
      type: 'SET_PROJECTS',
      projects
    };
    const result = actions.setProjects(projects);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_PROJECT, with array of colors', () => {
    const project = { name: 'Movie-Tracker', id: 1 };
    const expected = {
      type: 'SET_PROJECT',
      project
    };
    const result = actions.setProject(project);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_PALETTES, with array of colors', () => {
    const palettes = [
      {
        id: 1,
        color_1: '#4423DE',
        color_2: '#12DEC3',
        color_3: '#4512DE',
        color_4: '#763423',
        project_id: 2
      }
    ];
    const expected = {
      type: 'SET_PALETTES',
      palettes
    };
    const result = actions.setPalettes(palettes);
    expect(result).toEqual(expected);
  });

  it('should return a type of TOGGLE_LOCKED, with array of colors', () => {
    const id = 1;
    const expected = {
      type: 'TOGGLE_LOCKED',
      id
    };
    const result = actions.toggleLocked(id);
    expect(result).toEqual(expected);
  });
});
