import React from 'react';
import { shallow } from 'enzyme';
import { ColorContainer } from '../containers/ColorContainer/ColorContainer';
import { toggleLocked, setColors } from '../actions';

describe('ColorContainer', () => {
  let wrapper;
  const mockProps = {
    colors: ['red', 'orange', 'yellow', 'green', 'blue'],
    toggleLocked: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<ColorContainer {...mockProps} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
