import { setLoading, setError, setPalettes } from '../actions';
import { deleteData } from '../utils/api';

export const deletePalette = (id, palettes) => {
  return async dispatch => {
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/palettes/${id}`;
    try {
      dispatch(setLoading(true));
      await deleteData(url);
      const updatedPalettes = palettes.filter(palette => {
        return palette.id !== id;
      });
      dispatch(setLoading(false));
      dispatch(setPalettes(updatedPalettes));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
