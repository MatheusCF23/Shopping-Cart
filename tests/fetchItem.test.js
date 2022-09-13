require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');
const { expect } = require('@jest/globals')

describe('2 - Teste a função fetchItem', () => {
  test('Testando se fetchitem é uma função', () => {
expect(typeof fetchItem).toBe('function');
  });

  test('Testando se a função passada com argumento retorna uma fetch', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toBeCalled();
  });

  test('Testa se ao chamar fetchItem(MLB1615760527) utiliza o endpoint', async () => {
    await fetchItem('MLB1615760527')
    const url = 'https://api.mercadolibre.com/items/MLB1615760527'
    expect(fetch).toBeCalledWith(url);
  });

  test('Testandp se a função retorna os mesmos dados do objeto item', async () => {
    await fetchItem('MLB1615760527');
    expect( await fetchItem('MLB1615760527') ).toEqual(item);
  });

  test('Testa se retorna um erro', async () => {
    try {
      await fetchItem();
    }
    catch (erro) {
      expect(erro).toEqual('You must provide an url');
    }
  });
});
