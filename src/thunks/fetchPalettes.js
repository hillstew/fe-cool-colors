import { setError, setLoading, setPalettes } from '../actions';
import { getData } from '../utils/api';

export const fetchPalettes = () => {
  return async dispatch => {
    const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/palettes';
    try {
      dispatch(setLoading(true));
      const response = await getData(url);
      const palettes = await response.json();
      dispatch(setLoading(false));
      dispatch(setPalettes(palettes));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};
