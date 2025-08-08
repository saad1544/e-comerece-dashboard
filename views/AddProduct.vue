<template>
  <div class="wrapper">
    <div class="form-card">
      <h2 style="color: white;">Add New Product</h2>


      <form @submit.prevent="handleSubmit">
        <input v-model="product.name" type="text" placeholder="Product Name" required />
        <input v-model="product.category" type="text" placeholder="Category" required />
        <input v-model="product.price" type="number" placeholder="Price" required />
        <input v-model="product.stock" type="number" placeholder="Stock" required />
        <textarea v-model="product.description" placeholder="Description" required></textarea>

        <label class="file-input">
          Upload Image
          <input type="file" @change="handleImage" />
        </label>

        <div v-if="imagePreview" class="image-preview">
          <img :src="imagePreview" alt="Preview" />
        </div>

        <button type="submit">Submit</button>

        <p v-if="success" class="success-message">Product added successfully!</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const product = ref({
  name: '',
  category: '',
  price: '',
  stock: '',
  description: '',
  image: null
});

const success = ref(false);
const imagePreview = ref(null);

const handleImage = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview.value = reader.result;
      product.value.image = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleSubmit = () => {
  console.log('Product submitted:', product.value);
  success.value = true;
  setTimeout(() => success.value = false, 3000);
  product.value = { name: '', category: '', price: '', stock: '', description: '', image: null };
  imagePreview.value = null;
};
</script>

<style scoped>
/* Modern Glass Card with Light/Dark mode */
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0e7ff, #f0fdfa);
  padding: 20px;
  animation: fadeIn 0.6s ease;
}
.add-product h2 {
  color: white;
}


.form-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  animation: scaleUp 0.4s ease;
}

.form-card h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #111827;
}
.card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeIn 0.5s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.2);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive width */
.card {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .card {
    background: rgba(30, 41, 59, 0.85);
    color: #f3f4f6;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }

  .card:hover {
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
  }
}


form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input,
textarea {
  padding: 12px 14px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  background-color: #f9fafb;
  transition: border 0.3s ease, background 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #6366f1;
  background-color: #fff;
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button {
  padding: 12px;
  background-color: #6366f1;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #4f46e5;
}

.file-input {
  display: inline-block;
  background: #f3f4f6;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 0.95rem;
  cursor: pointer;
  text-align: center;
  border: 1px dashed #cbd5e1;
}

.file-input input {
  display: none;
}

.image-preview img {
  margin-top: 0.5rem;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
}

.success-message {
  text-align: center;
  color: #22c55e;
  font-weight: bold;
  margin-top: 1rem;
  font-size: 1rem;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}

@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Dark Mode Styling */
@media (prefers-color-scheme: dark) {
  .wrapper {
    background: linear-gradient(135deg, #1f2937, #111827);
  }

  .form-card {
    background: rgba(30, 41, 59, 0.85);
    color: #f3f4f6;
  }

  input,
  textarea {
    background-color: #1e293b;
    color: #f3f4f6;
    border: 1px solid #334155;
  }

  button {
    background-color: #10b981;
  }

  button:hover {
    background-color: #059669;
  }

  .file-input {
    background-color: #1e293b;
    color: #f3f4f6;
    border-color: #334155;
  }

  .success-message {
    color: #34d399;
  }
}
</style>
