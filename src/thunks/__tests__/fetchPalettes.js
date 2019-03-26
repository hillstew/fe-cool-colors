import { fetchPalettes } from '../fetchPalettes';
import { setError, setLoading, setPalettes } from '../../actions';
import * as api from '../../utils/api';

describe('fetchPalettes', () => {
  const mockDispatch = jest.fn();
  const thunk = fetchPalettes();
  const mockUrl = process.env.REACT_APP_BACKEND_URL + '/api/v1/palettes';
  const mockPalettes = {
    palettes: [
      {
        name: 'test-palette',
        color_1: '808080',
        color_2: '232323',
        color_3: '1a1a1a',
        color_4: 'aa2222',
        color_5: '123abc'
      }
    ]
  };

  beforeEach(() => {
    api.getData = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPalettes),
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

  it('should dispatch setPalettes with palettes', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setPalettes(mockPalettes));
  });

  it('should dispatch setError with the message', async () => {
    api.getData = jest.fn(() => {
      throw new Error('Error fetching palettes');
    });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching palettes'));
  });
});
