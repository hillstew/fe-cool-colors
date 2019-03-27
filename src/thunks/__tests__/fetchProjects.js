import { fetchProjects } from '../fetchProjects';
import { setError, setLoading, setProjects } from '../../actions';
import * as api from '../../utils/api';

describe('fetchProjects', () => {
  const mockDispatch = jest.fn();
  const thunk = fetchProjects();
  const mockUrl = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects';
  const mockProjects = {
    projects: [{ name: 'Movie Tracker' }, { name: 'SWAPIbox' }]
  };

  beforeEach(() => {
    api.getData = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProjects),
        ok: true
      })
    );
  });

  it('should dispatch setLoading with true', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call getData with the correct params', async () => {
    await thunk(mockDispatch);
    expect(api.getData).toHaveBeenCalledWith(mockUrl);
  });

  it('should dispatch setLoading with false', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });

  it('should dispatch setProjects with projects', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setProjects(mockProjects));
  });

  it('should dispatch setError with the message', async () => {
    api.getData = jest.fn(() => {
      throw new Error('Error fetching projects');
    });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      setError('Error fetching projects')
    );
  });
});
