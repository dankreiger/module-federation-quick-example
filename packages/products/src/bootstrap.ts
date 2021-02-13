import * as faker from 'faker';

let products = '';

const injectHtml = (html: string): string =>
  `<div class="products-container">
    <h1>Microfrontend 1</h1>
    ${html}
  </div>`;

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

const devProducts = document.querySelector('#dev-products');
console.log('here');
if (devProducts) devProducts.innerHTML = injectHtml(products);
