require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const { expect } = require('@jest/globals');

describe('1 - Teste a função fetchProducts', () => {
  test('Testando se fetchProducts é uma função', () => { 
    expect(typeof fetchProducts).toBe('function');
  });

  test('Testando se o FETCH foi chamado.', async () => {
    await fetchProducts('computador')
    expect(fetch).toBeCalled();
  })
  
  test('testa se a função fetch utiliza o endpoint passado', async () => {
    await fetchProducts('computador');
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toBeCalledWith(url);
  });
  
  test('Testa se com o argumento computador é igual a estrutura de dados de computadorSearch', async () => {
    await fetchProducts('computador');
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  
  test('Testando se a função fetchProducts sem argumento retorna um erro', async () => {
    try {
      await fetchProducts();
    }
    catch (erro) {
      expect(erro).toEqual('You must provide an url');
    }
  });
});
