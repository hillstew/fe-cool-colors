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

describe('App', () => {
  const mockProps = {
    fetchProjects: jest.fn(() => true),
    fetchPalettes: jest.fn(() => true),
    setColors: jest.fn()
  };
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
  });
});
