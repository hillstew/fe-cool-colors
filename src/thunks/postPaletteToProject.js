import { setError, setLoading, setProject, setPalette } from '../actions';
import { postData } from '../utils/api';

export const postPaletteToProject = (project, palette) => {
  return async dispatch => {
    const projectUrl = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects';
    const paletteUrl = process.env.REACT_APP_BACKEND_URL + '/api/v1/palettes';
    try {
      dispatch(setLoading(true));
      const projResponse = await postData(projectUrl, project);
      const newProjectId = await projResponse.json();
      const { id: projId } = newProjectId;
      const palResponse = await postData(paletteUrl, {
        ...palette,
        project_id: projId
      });
      const newPaletteId = await palResponse.json();
      const { id: palId } = newPaletteId;
      dispatch(setLoading(false));
      dispatch(setProject({ ...project, id: projId }));
      dispatch(setPalette({ ...palette, id: palId, project_id: projId }));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
