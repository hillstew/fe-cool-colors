import { setLoading, setError, setPalette } from '../actions';
import { postData } from '../utils/api';

export const postPalette = newPalette => {
  return async dispatch => {
    const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/palettes';
    try {
      dispatch(setLoading(true));
      const response = await postData(url, newPalette);
      const palette = await response.json();
      dispatch(setLoading(false));
      dispatch(setPalette({...newPalette, id: palette.id }));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
