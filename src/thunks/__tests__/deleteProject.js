import { deleteProject } from '../deleteProject';
import { setLoading, setError, setPalettes, setProjects } from '../../actions';
import * as api from '../../utils/api';

describe('deletePalette', () => {
  const mockDispatch = jest.fn();
  const mockId = 'xyz';
  const mockPalettes = [
    {
      name: 'test-palette',
      color_1: '808080',
      color_2: '232323',
      color_3: '1a1a1a',
      color_4: 'aa2222',
      color_5: '123abc',
      project_id: 'abc'
    }
  ];
  const mockProjects = [
    { name: 'Movie Tracker', id: 'abc' },
    { name: 'Palette Picker', id: 'xyz' }
  ];
  const mockProjectsAfterDelete = [{ name: 'Movie Tracker', id: 'abc' }];
  const thunk = deleteProject(mockId, mockPalettes, mockProjects);
  const mockUrl = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects/xyz';

  beforeEach(() => {
    api.deleteData = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: jest.fn()
      })
    );
  });

  it('should dispatch setLoading with true', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call deleteData with the correct params', async () => {
    await thunk(mockDispatch);
    expect(api.deleteData).toHaveBeenCalledWith(mockUrl);
  });

  it('should dispatch setLoading with false', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });

  it('should dispatch setPalettes with the new palette', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setPalettes(mockPalettes));
  });

  it('should dispatch setProjects with the new palette', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      setProjects(mockProjectsAfterDelete)
    );
  });

  it('should dispatch setError with the message', async () => {
    api.deleteData = jest.fn(() => {
      throw new Error('Error deleting palette');
    });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      setError('Error deleting palette')
    );
  });
});
