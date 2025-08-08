 <template>
  <div class="home-container">
    <h1>📊 E-Commerce Dashboard</h1>
    <p>Welcome! Navigate to explore your store’s data and manage products.</p>

    <nav class="nav-links">
      <router-link to="/revenue" class="nav-card revenue">
        <h2>Revenue Analysis</h2>
        <p>View orders, sales, and revenue trends with interactive charts.</p>
      </router-link>

      <router-link to="/inventory" class="nav-card inventory">
        <h2>Inventory Management</h2>
        <p>Check and update your product stocks with sorting & filtering.</p>
      </router-link>

      <router-link to="/add-product" class="nav-card add-product">
        <h2>Add New Product</h2>
        <p>Register new products with images to update your inventory.</p>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.2em;
  color: #2c3e50;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2.5em;
  color: #555;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.nav-card {
  background: white;
  box-shadow: 0 4px 10px rgb(0 0 0 / 0.1);
  border-radius: 12px;
  padding: 20px;
  width: 250px;
  text-decoration: none;
  color: #2c3e50;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.nav-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgb(0 0 0 / 0.15);
}

.nav-card h2 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.nav-card p {
  font-size: 1rem;
  color: #555;
}

/* Specific colors for each card */
.revenue {
  border-top: 4px solid #4caf50; /* green */
}

.inventory {
  border-top: 4px solid #2196f3; /* blue */
}

.add-product {
  border-top: 4px solid #ff9800; /* orange */
}
</style>