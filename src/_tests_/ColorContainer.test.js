import React from 'react';
import { shallow } from 'enzyme';
import {
  ColorContainer,
  mapStateToProps,
  mapDispatchToProps
} from '../containers/ColorContainer/ColorContainer';
import { toggleLocked } from '../actions';

const mockProps = {
  colors: ['red', 'orange', 'yellow', 'green', 'blue'],
  toggleLocked: jest.fn()
};

describe('ColorContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ColorContainer {...mockProps} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a props object with colors', () => {
      const mockState = {
        colors: mockProps.colors,
        isLoading: false,
        error: ''
      };
      const expected = {
        colors: mockProps.colors
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the toggleLocked action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = toggleLocked();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.toggleLocked();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
