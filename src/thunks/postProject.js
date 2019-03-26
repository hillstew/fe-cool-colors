import { setError, setLoading, setProject } from '../actions';
import { postData } from '../utils/api';

export const postProject = project => {
  return async dispatch => {
    const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects';
    try {
      dispatch(setLoading(true));
      const response = await postData(url, project);
      const newProjectId = await response.json();
      const { id } = newProjectId;
      dispatch(setLoading(false));
      dispatch(setProject({ ...project, id }));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
