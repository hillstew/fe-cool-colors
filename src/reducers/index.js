import { colorReducer } from './colorReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { projectsReducer } from './projectsReducer';
import { palettesReducer } from './palettesReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  color: colorReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  projects: projectsReducer,
  palettes: palettesReducer
});
