import faker from 'faker';

document.querySelector('#dev-cart').innerHTML = `
  <div class="cart-container">
    <h1>Microfrontend 2</h1>
    <div>Shopping Cart</div>
    <div>Random # of items: ${faker.random.number()}</div>
  </div>
  
`;
