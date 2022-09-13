const getSavedCartItems = (element) => localStorage.getItem(element);

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
