// src/stores/inventory.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInventoryStore = defineStore('inventory', () => {
  // Inventory items array
  const items = ref([
    {
      id: 1,
      name: "Amazon Echo Dot",
      description: "Smart speaker with Alexa",
      price: 49.99,
      stock: 120,
      category: "Electronics",
      image: "https://example.com/echo-dot.jpg",
    },
    {
      id: 2,
      name: "Apple iPhone 13",
      description: "Latest Apple smartphone",
      price: 999.99,
      stock: 45,
      category: "Electronics",
      image: "https://example.com/iphone13.jpg",
    }
  ]);

  // Add new product
  function addProduct(product) {
    // Assign new id based on current length + 1 (simple example)
    product.id = items.value.length + 1;
    items.value.push(product);
  }

  // Update inventory stock
  function updateStock(id, newStock) {
    const product = items.value.find(item => item.id === id);
    if (product) {
      product.stock = newStock;
    }
  }

  return {
    items,
    addProduct,
    updateStock,
  };
});
