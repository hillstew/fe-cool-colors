import { setLoading, setError, setPalettes } from '../actions';
import { deleteData } from '../utils/api';

export const deletePalette = (id, palettes) => {
  return async dispatch => {
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/palettes/${id}`;
    try {
      dispatch(setLoading(true));
      const response = await deleteData(url);
      const result = await response.json();
      const updatedPalettes = palettes.filter(palette => {
        return palette.id !== id;
      });
      console.log(updatedPalettes);
      dispatch(setLoading(false));
      dispatch(setPalettes(updatedPalettes));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
