import React from 'react';
import { shallow } from 'enzyme';
import { ColorCard } from './ColorCard';

describe('ColorCard', () => {
  let wrapper;
  let mockColor;
  let mockToggleLocked;

  beforeEach(() => {
    mockColor = { hex: '#2309ED', id: 23, isLocked: false };
    mockToggleLocked = jest.fn();
    wrapper = shallow(
      <ColorCard color={mockColor} toggleLocked={mockToggleLocked} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
