import { setError, setLoading, setProjects } from '../actions';
import { getData } from '../utils/api';

export const fetchProjects = () => {
  return async dispatch => {
    const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects';
    try {
      dispatch(setLoading(true));
      const response = await getData(url);
      const results = await response.json();
      const projects = results.map(project => {
        project.isLocked = false;
        return project;
      });
      dispatch(setLoading(false));
      dispatch(setProjects(projects));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};
