import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Revenue from './views/Revenue.vue';
import Inventory from './views/Inventory.vue';
import AddProduct from './views/AddProduct.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/revenue',
    name: 'Revenue',
    component: Revenue,
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory,
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProduct,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
