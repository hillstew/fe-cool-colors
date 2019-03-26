import React from 'react';
import { PaletteCard } from '../components/PaletteCard/PaletteCard';
import { shallow } from 'enzyme';

describe('PaletteCard', () => {
  let wrapper;
  const mockPalette = {
      name: 'test-palette',
      color_1: '808080',
      color_2: '232323',
      color_3: '1a1a1a',
      color_4: 'aa2222',
      color_5: '123abc'
  };

  beforeEach(() => {
    wrapper = shallow(<PaletteCard palette={mockPalette} />);
  });

  it('should pass the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
