<template>
  <div class="product-detail" style="pointer-events: auto !important;">
    <div class="title-row">
      <h1 class="product-title">{{ product.name }}</h1>
      <a href="/contact" class="quote-btn">Get a Quotation</a>
    </div>

    <img :src="product.image" alt="product image" style="width: 70%; height: auto;">
    <div class="desc" v-html="product.desc"></div>
    <div class="custom-content" v-html="product.content"></div>
    <div class="gallery" v-if="product.images && product.images.length">
      <h3>More Product Images</h3>
      <div class="img-list">
        <img 
          v-for="(img, idx) in product.images" 
          :key="idx" 
          :src="img" 
          alt="gallery"
          class="gallery-img"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products.js'

const route = useRoute()
const product = ref({})

onMounted(() => {
  const productId = parseInt(route.params.id)
  product.value = products.find(item => item.id === productId) || products[0]
})
</script>

<style scoped>
.product-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}
.product-title {
  background-color: #f5f5f5;
  padding: 12px 20px;
  border-left: 4px solid #e47919;
  font-size: 24px;
  margin: 0;
  flex: 1;
}

/* 🔥 按钮：透明 + 边框 + 文字橙色 */
.quote-btn {
  background: transparent;
  color: #e47919;
  border: 2px solid #e47919;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  white-space: nowrap;
  transition: all 0.3s ease;
}
/* 🔥 悬停：背景变橙色 + 文字变白 */
.quote-btn:hover {
  background-color: #e47919;
  color: #fff;
  border-color: #e47919;
}

.desc {
  margin: 20px 0;
  line-height: 1.8;
}
.custom-content {
  margin-top: 30px;
}
.gallery h3 {
  font-size: 18px;
  margin: 30px 0 15px;
}
.img-list {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
.gallery-img {
  width: 30%;
  height: auto;
  border-radius: 6px;
  /* 手机端自动变成：一行1张 */
@media (max-width: 768px) {
  .gallery-img {
    width: 100%;
  }
}
}
</style>