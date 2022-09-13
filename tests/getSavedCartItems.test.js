const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');
const { expect } = require('@jest/globals');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('Testa a função getSavedCartItems no local storage', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });

  test('testa a função getSavedCartItems com parâmetro no local storage', () => {
    getSavedCartItems('cartItem');
    expect(localStorage.getItem).toBeCalledWith('cartItem')
  });
});
