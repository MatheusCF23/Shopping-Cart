const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const { expect } = require('@jest/globals')

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('testando a função saveCartItems com um argumento o localStorage é chamando', () => {
    saveCartItems('teste');
    expect(localStorage.setItem).toBeCalled();
  });

  test('testando a função saveCartItems com um argumento o localStorage é chamando com dois parametros', () => {
    saveCartItems('teste');
    expect(localStorage.setItem).toBeCalledWith('cartItems', 'teste');
  });
});
