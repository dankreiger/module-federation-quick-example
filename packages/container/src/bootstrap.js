import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartIndex';

import './css/reset.css';
import './css/styles.css';

console.log('Container');
productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));
