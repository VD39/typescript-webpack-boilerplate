/**
 * Mocks document.getElementById for use within Jest testing.
 */
jest
  .spyOn(document, 'getElementById')
  .mockReturnValueOnce({ value: document.createElement('div') });
