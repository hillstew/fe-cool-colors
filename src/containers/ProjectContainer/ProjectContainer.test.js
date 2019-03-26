import React from 'react';
import { ProjectContainer, mapStateToProps } from './ProjectContainer';
import { shallow } from 'enzyme';

describe('ProjectContainer', () => {
  let wrapper;
  let mockProjects = [{ name: 'Movie-Tracker', id: 12 }];
  let mockPalettes = [{ name: 'blue-palette', project_id: 12 }];

  beforeEach(() => {
    wrapper = shallow(
      <ProjectContainer projects={mockProjects} palettes={mockPalettes} />
    );
  });

  it('should match the snaphot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with projects palettes', () => {
      const mockState = {
        projects: mockProjects,
        palettes: mockPalettes,
        extraKey: true
      };
      const expected = {
        projects: mockProjects,
        palettes: mockPalettes
      };

      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });
  });
});
