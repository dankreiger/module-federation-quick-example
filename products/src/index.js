import faker from 'faker';

let products = '';

const injectHtml = (html) =>
  `<div style="border: 1px dotted red; color: red; padding: 10px;">
    <h1>Microfrontend 1</h1>
    ${html}
  </div>`;

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

document.querySelector('#dev-products').innerHTML = injectHtml(products);
