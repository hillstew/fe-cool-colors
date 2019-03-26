import { updateColors, generateColors, makeColor, randomNumber } from './helper'

describe('helper file', () => {
  describe('updateColors', () => {
    const colors = [
      { hex: 'abc', isLocked: false },
      { hex: 'def', isLocked: true },
      { hex: 'ghi', isLocked: true },
      { hex: 'lmn', isLocked: true }
    ];

    const colorsToUpdate = [
      { hex: 'abc', isLocked: false },
      { hex: 'def', isLocked: true },
      { hex: 'ghi', isLocked: true },
      { hex: 'lmn', isLocked: true }
    ];

    const trueLockedColors = [
      { hex: 'abc', isLocked: true },
      { hex: 'def', isLocked: true },
      { hex: 'ghi', isLocked: true },
      { hex: 'lmn', isLocked: true }
    ];

    it('should update the color(s) in the array if isLocked is false', () => {
      const result = updateColors(colors);
      expect(result[0].hex).not.toEqual(colorsToUpdate[0].hex);
    });

    it('should not update any colors in the array if isLocked is true', () => {
      const result = updateColors(trueLockedColors);
      expect(result).toEqual(trueLockedColors)
    });
  });

  describe('generateColors', () => {
    it('should create an array of 5 objects with hex, isLocked, and id keys', () => {
      const result = generateColors();
      expect(result).toHaveLength(5);
      expect(result[0]).toHaveProperty('hex');
      expect(result[0]).toHaveProperty('isLocked');
      expect(result[0]).toHaveProperty('id');
    });
  });

  describe('makeColor', () => {
    it('should return a string of 6 characters', () => {
      const result = makeColor();
      expect(result).toHaveLength(6);
    });
  });

  describe('randomNumber', () => {
    it('should return a random integer between 0 and 16', () => {
      const result = randomNumber();
      // expect(result).toBeWithinRange(0, 16);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(16);
    });
  });
});