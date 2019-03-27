import { postPaletteToProject } from '../postPaletteToProject';
import { setError, setLoading, setPalette, setProject } from '../../actions';
import * as api from '../../utils/api';

describe('postPaletteToProject', () => {
  const mockDispatch = jest.fn();
  const mockPalette = {
    name: 'test-palette',
    color_1: '808080',
    color_2: '232323',
    color_3: '1a1a1a',
    color_4: 'aa2222',
    color_5: '123abc'
  };
  const mockProject = {
    name: 'Testing Testing 123'
  };
  const thunk = postPaletteToProject(mockProject, mockPalette);
  const mockPalUrl = process.env.REACT_APP_BACKEND_URL + '/api/v1/palettes';
  const mockProjUrl = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects';

  beforeEach(() => {
    api.postData = jest.fn(() =>
      Promise.resolve({
        status: 201,
        ok: true,
        json: jest.fn(() => Promise.resolve(mockPalette))
      })
    );
  });

  it('should dispatch setLoading with true', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call postData with the correct params for the project', async () => {
    await thunk(mockDispatch);
    expect(api.postData).toHaveBeenCalledWith(mockProjUrl, mockProject);
  });

  it('should call call postData with the correct params for the palette', async () => {
    await thunk(mockDispatch);
    expect(api.postData).toHaveBeenCalledWith(mockPalUrl, mockPalette);
  });

  it('should dispatch setLoading with false', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });

  it('should dispatch setProject with the new project', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setProject(mockProject));
  });

  it('should dispatch setPalette with the new palette', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setPalette(mockPalette));
  });

  it('should set the error with the message', async () => {
    api.postData = jest.fn(() => {
      throw new Error('Error fetching palettes');
    });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      setError('Error fetching palettes')
    );
  });
});
