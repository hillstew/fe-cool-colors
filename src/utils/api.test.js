import { getData, postData } from './api';

const mockUrl = process.env.REACT_APP_BACKEND_URL + '/api/v1/palettes';
const mockProject = {
  name: 'Movie Tracker',
  id: 'abcdefg'
};

describe('api', () => {
  describe('getData', () => {
    beforeEach(() => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          status: 200,
          ok: true
        })
      );
    });

    it('should call fetch with the correct params', async () => {
      await getData(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });
  });

  describe('postData', () => {
    const mockOptions = {
      method: 'POST',
      body: JSON.stringify(mockProject),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    beforeEach(() => {
      window.fetch = jest.fn(() => 
        Promise.resolve({
          status: 201,
          ok: true
        })
      );
    });

    it('should call fetch with the correct params', async () => {
      await postData(mockUrl, mockProject);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
    });
  });
});
