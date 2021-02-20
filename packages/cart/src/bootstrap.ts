import * as faker from 'faker';

const mount = (el: Element): void => {
  el.innerHTML = `
  <div class="cart-container">
    <h1>Microfrontend 2</h1>
    <div>Shopping Cart</div>
    <div>Random # of items: ${faker.random.number()}</div>
  </div>`;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');
  if (el) {
    mount(el);
  }
}

export { mount };
