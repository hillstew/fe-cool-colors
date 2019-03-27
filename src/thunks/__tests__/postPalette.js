import { postPalette } from '../postPalette';
import { setError, setLoading, setPalette } from '../../actions';
import * as api from '../../utils/api';

describe('postPalette', () => {
  const mockDispatch = jest.fn();
  const mockPalette = {
    name: 'test-palette',
    color_1: '808080',
    color_2: '232323',
    color_3: '1a1a1a',
    color_4: 'aa2222',
    color_5: '123abc'
  };
  const thunk = postPalette(mockPalette);
  const mockUrl = process.env.REACT_APP_BACKEND_URL + '/api/v1/palettes';

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

  it('should call postData with the correct params', async () => {
    await thunk(mockDispatch);
    expect(api.postData).toHaveBeenCalledWith(mockUrl, mockPalette);
  });

  it('should dispatch setLoading with false', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });

  it('should dispatch setPalette with the new palette', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setPalette(mockPalette));
  });

  it('should dispatch setError with the message', async () => {
    api.postData = jest.fn(() => {
      throw new Error('Error fetching palettes');
    });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      setError('Error fetching palettes')
    );
  });
});
