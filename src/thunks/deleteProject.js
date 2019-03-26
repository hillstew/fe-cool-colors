import { setLoading, setError, setProjects, setPalettes } from '../actions';
import { deleteData } from '../utils/api';

export const deleteProject = (id, palettes, projects) => {
  return async dispatch => {
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}`;
    try {
      dispatch(setLoading(true));
      await deleteData(url);
      const updatedPalettes = palettes.filter(palette => {
        return palette.project_id !== id
      });
      const updatedProjects = projects.filter(project => {
        return project.id !== id
      });
      dispatch(setLoading(false));
      dispatch(setPalettes(updatedPalettes));
      dispatch(setProjects(updatedProjects));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}