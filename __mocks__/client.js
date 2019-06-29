jest
  .spyOn(document, 'getElementById')
  .mockReturnValueOnce({ value: document.createElement('div') });
