// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!
const ol = document.getElementsByClassName('cart__items')[0];
const btnLimpar = document.getElementsByClassName('empty-cart')[0];
const total = document.getElementsByClassName('total-price')[0];
const cart = document.getElementsByClassName('cart-number')[0];
const sec = document.getElementsByClassName('items')[0];
const lis = document.getElementsByClassName('cart__item');
/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 * 
 */

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(ol.innerHTML);
};

const createCartItemElement = ({ id, title, price, }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// requisito 11
const criaCarrengando = () => { 
  const div = document.createElement('div');
  div.className = 'loading';
  div.innerText = 'Carregando...';
  sec.appendChild(div);
};

const removeCarregando = () => {
  const div1 = document.getElementsByClassName('loading')[0];
  div1.remove();
};

// resquisito 3
const addlist = async () => {
  criaCarrengando();
  const computador = await fetchProducts('computador');
  removeCarregando();
  const { results } = computador;
  const div = document.getElementsByClassName('items')[0];
  results.forEach((element) => {
    div.appendChild(createProductItemElement(element));
  });
};

// requisito 4 e 5.
const adicionaNoCarrinho = () => {
  const button = document.querySelectorAll('.item__add');
  button.forEach((elememt) => {
    elememt.addEventListener('click', async (elem) => {
      const ab = elem.path[1];
      const cd = ab.firstChild.innerText;
      const ef = await fetchItem(cd);
      ol.appendChild(createCartItemElement(ef));
      saveCartItems(ol.innerHTML);
    });
  });
};

const remove = () => {
  ol.innerHTML = '';
  saveCartItems(ol.innerHTML);
};
// requisito 9
// requisito 10
btnLimpar.addEventListener('click', () => {
  ol.innerHTML = '';
  window.localStorage.clear();
});

window.onload = async () => {
  await addlist();
  adicionaNoCarrinho();
  // Desafio 8
  const salvo = getSavedCartItems('cartItems');
  ol.innerHTML = salvo;
  const lista = [...lis];
  lista.forEach((ele) => {
    ele.addEventListener('click', cartItemClickListener);
  });
};