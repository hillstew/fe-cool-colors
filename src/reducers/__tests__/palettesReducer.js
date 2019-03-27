import { palettesReducer } from '../palettesReducer';
import * as actions from '../../actions';

const mockPalettes = [
  {
    name: 'test-palette',
    color_1: '808080',
    color_2: '232323',
    color_3: '1a1a1a',
    color_4: 'aa2222',
    color_5: '123abc'
  }
];

const mockPalette = {
  name: 'new-palette',
  color_1: '808080',
  color_2: '232323',
  color_3: '1a1a1a',
  color_4: 'aa2222',
  color_5: '123abc'
};

describe('palettesReducer', () => {
  it('should return the default state', () => {
    const expected = [];
    const result = palettesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an array of palettes', () => {
    const initialState = [];
    const expected = mockPalettes;
    const result = palettesReducer(
      initialState,
      actions.setPalettes(mockPalettes)
    );
    expect(result).toEqual(expected);
  });

  it('should add a palette to the palettes in state', () => {
    const initialState = mockPalettes;
    const expected = [...initialState, mockPalette];
    const result = palettesReducer(initialState, actions.setPalette(mockPalette));
    expect(result).toEqual(expected);
  });
});
