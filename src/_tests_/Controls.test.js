import React from 'react';
import { shallow } from 'enzyme';
import {
  Controls,
  mapStateToProps,
  mapDispatchToProps
} from '../containers/Controls/Controls';
import { toggleLocked, setColors } from '../actions';

describe('Controls', () => {
  describe('Controls component', () => {
    let wrapper;
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

    beforeEach(() => {
      wrapper = shallow(<Controls {...mockProps} />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {});

  describe('mapDispatchToProps', () => {});
});
