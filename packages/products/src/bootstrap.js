import faker from 'faker';

const mount = (el) => {
  let products = '';

  const injectHtml = (html) =>
    `<div class="products-container">
      <h1>Microfrontend 1</h1>
      ${html}
    </div>`;

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = injectHtml(products);
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  // Assuming our container doesn't have an elemnt
  // with id 'dev-products'...
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

// Conext/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARENTEE that an element with an id of 'dev-products' exists
// WE DO NOT WANT to try to immediately render the app
export { mount };
