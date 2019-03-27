import React from 'react';
import { shallow } from 'enzyme';
import {
  Controls,
  mapStateToProps,
  mapDispatchToProps
} from '../containers/Controls/Controls';
import { setColors } from '../actions';
import { postProject } from '../thunks/postProject';
import { postPalette } from '../thunks/postPalette';
import { postPaletteToProject } from '../thunks/postPaletteToProject';

jest.mock('../thunks/postProject.js');
jest.mock('../thunks/postPalette.js');
jest.mock('../thunks/postPaletteToProject.js');

const mockProps = {
  postProject: jest.fn(() => true),
  projects: [
    {
      name: 'Movie Tracker',
      id: 'abcdefg'
    }
  ],
  colors: ['red', 'orange', 'yellow', 'green', 'blue'],
  setColors: jest.fn()
};

const colors = ['#000', '#000', '#000', '#000', '#000'];
const mockProject = {
  name: 'Movie Tracker',
  id: 'abcdefg'
}
const mockPalette = {
  name: 'test-palette',
  color_1: '808080',
  color_2: '232323',
  color_3: '1a1a1a',
  color_4: 'aa2222',
  color_5: '123abc'
}

describe('Controls', () => {
  describe('Controls component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Controls {...mockProps} />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return a props object with colors and projects', () => {
      const mockState = {
        colors: mockProps.colors,
        projects: mockProps.projects,
        isLoading: false,
        error: ''
      };
      const expected = {
        colors: mockProps.colors,
        projects: mockProps.projects
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

    it('should call dispatch with postProject thunk', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = postProject(mockProject);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.postProject(mockProject);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with postPalette thunk', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = postPalette(mockPalette);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.postPalette(mockPalette);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });


    it('should call dispatch with postPaletteToProject thunk', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = postPaletteToProject(mockProject, mockPalette);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.postPaletteToProject(mockProject, mockPalette);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
