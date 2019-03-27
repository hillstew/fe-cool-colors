import React from 'react';
import ReactDOM from 'react-dom';
import {
  App,
  mapStateToProps,
  mapDispatchToProps
} from '../containers/App/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import { rootReducer } from '../reducers';
import { fetchProjects } from '../thunks/fetchProjects';
import { fetchPalettes } from '../thunks/fetchPalettes';
import { setColors } from '../actions';

jest.mock('../thunks/fetchProjects.js');
jest.mock('../thunks/fetchPalettes.js');

const mockProps = {
  fetchProjects: jest.fn(() => true),
  fetchPalettes: jest.fn(() => true),
  setColors: jest.fn(),
  isLoading: false,
  error: ''
};

const colors = ['#000', '#000', '#000', '#000', '#000'];

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(rootReducer);

    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App {...mockProps} />
        </BrowserRouter>
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('App component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App {...mockProps} />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot when isLoading is true', () => {
      wrapper = shallow(<App {...mockProps} isLoading={true} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot when there is an error', () => {
      wrapper = shallow(<App {...mockProps} error={'Error fetching data'} />);
      expect(wrapper).toMatchSnapshot();
    });

    describe('mapStateToProps', () => {
      it('should return a props object with error and isLoading', () => {
        const mockState = {
          isLoading: false,
          error: '',
          colors: ['#000', '#000', '#000', '#000', '#000']
        };
        const expected = {
          isLoading: false,
          error: ''
        };
        const mappedProps = mapStateToProps(mockState);
        expect(mappedProps).toEqual(expected);
      });
    });

    describe('mapDispatchToProps', () => {
      it('should call dispatch with setColors', () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = setColors(colors);
        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.setColors(colors);
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });

      it('should call dispatch with fetchProjects thunk', () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = fetchProjects();
        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.fetchProjects();
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });

      it('should dispatch the fetchPalettes thunk', () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = fetchPalettes();
        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.fetchPalettes();
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });
    });
  });
});
