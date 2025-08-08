<template>
  <div class="revenue-page p-6">
    <h2 class="text-2xl font-bold mb-4">Revenue Analysis</h2>

    <!-- Top Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="bg-white shadow rounded-lg p-4">Total Sales: ${{ totalSales }}</div>
      <div class="bg-white shadow rounded-lg p-4">Total Orders: {{ totalOrders }}</div>
      <div class="bg-white shadow rounded-lg p-4">Avg Order: ${{ avgOrderValue }}</div>
    </div>

    <!-- Filters -->
    <div class="mb-6 flex flex-wrap gap-4">
      <select v-model="selectedCategory" class="border p-2 rounded">
        <option value="All">All Categories</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>

      <select v-model="selectedRange" class="border p-2 rounded">
        <option value="all">All Time</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </div>

    <!-- Chart -->
    <canvas id="revenueChart"></canvas>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';
import { salesData } from '../data/sales.js';

const selectedCategory = ref('All');
const selectedRange = ref('all');
const chartInstance = ref(null);

const categories = [...new Set(salesData.map(item => item.category))];

const filterByRange = (data) => {
  const now = new Date();
  return data.filter(item => {
    const saleDate = new Date(item.date);
    const diffTime = Math.abs(now - saleDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (selectedRange.value === 'daily') return diffDays <= 1;
    if (selectedRange.value === 'weekly') return diffDays <= 7;
    if (selectedRange.value === 'monthly') return diffDays <= 30;
    return true;
  });
};

const filteredData = computed(() => {
  let data = [...salesData];
  if (selectedCategory.value !== 'All') {
    data = data.filter(item => item.category === selectedCategory.value);
  }
  return filterByRange(data);
});

const totalSales = computed(() =>
  filteredData.value.reduce((sum, item) => sum + item.revenue, 0)
);
const totalOrders = computed(() => filteredData.value.length);
const avgOrderValue = computed(() =>
  totalOrders.value ? (totalSales.value / totalOrders.value).toFixed(2) : 0
);

const renderChart = () => {
  const ctx = document.getElementById('revenueChart').getContext('2d');
  if (chartInstance.value) chartInstance.value.destroy();

  const labels = filteredData.value.map(d => d.date);
  const data = filteredData.value.map(d => d.revenue);

  chartInstance.value = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Revenue',
        data,
        backgroundColor: '#4CAF50'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' }
      }
    }
  });
};

onMounted(renderChart);
watch([selectedCategory, selectedRange], renderChart);
</script>

<style scoped>
.revenue-page {
  background: #f5f5f5;
  min-height: 100vh;
}
</style>
