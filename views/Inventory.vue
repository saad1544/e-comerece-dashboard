<template>
  <div class="inventory-page p-6">
    <h2 class="text-2xl font-bold mb-4">Inventory Management</h2>

    <ag-grid-vue
      class="ag-theme-alpine"
      style="width: 100%; height: 500px;"
      :rowData="rowData"
      :columnDefs="columnDefs"
      :defaultColDef="defaultColDef"
      @cellValueChanged="onCellValueChanged"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AgGridVue } from 'ag-grid-vue3';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import inventoryData from '../data/inventory.js';

const rowData = ref(inventoryData);

const columnDefs = ref([
  { headerName: 'Product', field: 'name', sortable: true, filter: true },
  { headerName: 'Category', field: 'category', sortable: true, filter: true },
  { headerName: 'Price ($)', field: 'price', sortable: true, filter: true },
  {
    headerName: 'Stock',
    field: 'stock',
    editable: true,
    cellStyle: params => {
      return params.value < 10
        ? { backgroundColor: '#fdecea', color: '#d32f2f' }
        : null;
    }
  },
]);

const defaultColDef = {
  flex: 1,
  resizable: true
};

const onCellValueChanged = (params) => {
  console.log('Updated stock:', params.data);
};
</script>

<style scoped>
.inventory-page {
  background: #f5f5f5;
  min-height: 100vh;
}
</style>
