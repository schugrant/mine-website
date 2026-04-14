<template>
  <!-- Banner 区域 -->
  <section class="banner">
    <div class="banner-content">
      <p>Ground support supplies for underground mining and related applications.<br><br><a href="/product/1" >Split sets</a>, <a href="/product/2" >full threaded bolts</a>, <a href="/product/5" >wire mesh</a>, and related materials — with inspection-backed supply and stable delivery.</p>
      
      <!-- 两个按钮 + 正确链接 -->
      <div class="banner-buttons">
        <a href="/about" class="btn btn-a">About us</a>
        <a href="/contact" class="btn btn-b">Get a Quote</a>
      </div>
    </div>
  </section>
  
  <!-- 推荐产品区域（加 id 用于 Products 按钮跳转） -->
  <section id="products" class="products-section container">
    <h2 class="title" style="margin-bottom: 0;">Recommend Ground Support Products</h2>
    <h3 style="margin-top: 0.5em; font-style: italic; font-weight: normal;text-align:center;">Used in underground mining, tunneling, and other ground support applications.</h3>
    <!-- ======================
         🔥 修改 1：加轮播外层包裹
         ====================== -->
    <div class="carousel-container">
      <!-- 左箭头 -->
      <button class="arrow left" @click="scrollLeft">&lt;</button>
    <div class="carousel" ref="carousel">
      <div v-for="p in filteredProducts" :key="p.id" class="card">
        <img :src="p.image" :alt="p.name">
        <h3>{{ p.name }}</h3>
        <router-link :to="`/product/${p.id}`" class="btn-small">View Details</router-link>
      </div>
    </div>
      <!-- 右箭头 -->
      <button class="arrow right" @click="scrollRight">&gt;</button>
    </div>
  </section>
  
  <!-- 资源文章区域 -->
  <section class="blog-section container">
    <h2 class="title" style="margin-bottom: 0;">Technical / RFQ</h2>
    <h3 style="margin-top: 0.5em; font-style: italic; font-weight: normal;text-align:center;">Supporting product selection, application understanding, and supply decisions.</h3>
    <div class="grid">
      <div v-for="a in articles" :key="a.id" class="blog-card">
        <img :src="a.image">
        <h3>{{ a.title }}</h3>
        <router-link :to="`/article/${a.id}`">Read More</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { products } from '../data/products';
import { articles } from '../data/articles';
import { ref, computed } from 'vue';

// 假设你原本的 products 数据（8个产品）
// （如果你的 products 是从接口/父组件获取的，只需保留 filteredProducts 逻辑即可）
const products = ref([
  { id: 1, name: '产品1', image: 'xxx1.jpg' },
  { id: 2, name: '产品2', image: 'xxx2.jpg' },
  { id: 3, name: '产品3', image: 'xxx3.jpg' },
  { id: 4, name: '产品4', image: 'xxx4.jpg' },
  { id: 5, name: '产品5', image: 'xxx5.jpg' },
  { id: 6, name: '产品6', image: 'xxx6.jpg' },
  { id: 7, name: '产品7', image: 'xxx7.jpg' },
  { id: 8, name: '产品8', image: 'xxx8.jpg' },
]);

// ======================
// 🔥 关键：定义要显示的产品ID列表（你自己指定）
// 比如只想显示 ID 为 1、3、5、7 的产品，就改这个数组
// ======================
const showProductIds = [1, 2, 3, 4, 5, 6, 7];

// 🔥 计算属性：过滤出只包含指定ID的产品
const filteredProducts = computed(() => {
  // 只返回 showProductIds 里包含的产品
  return products.value.filter(p => showProductIds.includes(p.id));
});
// ======================
// 🔥 修改 2：加轮播控制
// ======================
import { ref, onMounted } from 'vue';
const carousel= ref(null);
const cardWidth = 330; // 卡片宽度 + 间距

// 左滚动
const scrollLeft = () => {
    if (!carousel.value) return;
  carousel.value.scrollBy({ left: -cardWidth, behavior: 'smooth' });
};

// 右滚动
const scrollRight = () => {
  if (!carousel.value) return;
  
  const el = carousel.value;
  const maxScroll = el.scrollWidth - el.clientWidth;

  // 如果快滚到底了 → 直接回到开头（无缝）
  if (el.scrollLeft >= maxScroll - 50) {
    el.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    el.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }
};

// 自动轮播 3 秒一次
onMounted(() => {
  const timer = setInterval(scrollRight, 3000);
  return () => clearInterval(timer);
});
</script>

<style scoped>
/* ========================
   BANNER 样式
======================== */
.banner {
  width: 100%;
  height: 300px;
  background-image: url("/images/banner.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  position: relative;
}

.banner::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.banner p {
  font-size: 18px;
  font-style: italic;
  margin: 0;
}

/* ========================
   BANNER 按钮：透明 + 悬停橙色
======================== */
.banner-buttons {
  display: flex;
  gap: 20px;
}

.banner .btn {
  padding: 13px 30px !important;
  font-size: 16px !important;
  text-decoration: none !important;
  border-radius: 4px !important;
  transition: all 0.3s ease !important;
  cursor: pointer !important;
}
/* 按钮A：默认透明 */
.btn.btn-a {
  background: transparent !important;
  color: white !important;
  border: 2px solid #ffffff !important;
}

/* 按钮B：默认橙色 */
.btn.btn-b {
  background-color: #e47919 !important;
  color: #fff !important;
  border: 2px solid #e47919 !important;
}

/* 按钮A悬停时，自己变橙色 */
.btn.btn-a:hover {
  background-color: #e47919 !important;
  border-color: #f7941d !important;
  color: #fff !important;
}

/* 按钮B悬停时，自己保持橙色（可添加微效果） */
.btn.btn-b:hover {
  opacity: 0.9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

/* 重点：当悬停在按钮A上时，按钮B变透明 */
/* 扩展效果：A悬停时B有完整的透明效果 */
.btn.btn-a:hover ~ .btn.btn-b {
  background: transparent !important;
  border: 2px solid rgba(255, 255, 255, 0.8) !important;
  color: rgba(255, 255, 255, 0.9) !important;
  opacity: 0.85;
  box-shadow: 0 0 0 1px rgba(228, 121, 25, 0.3);
  transform: scale(0.98);
  transition: all 0.3s ease !important;
}

/* ========================
   页面通用样式
======================== */
.title{
  text-align:center;
  margin:40px 0;
  font-size:28px
}
.carousel{
  display:flex;
  gap:25px;
  overflow-x:auto;
  padding:10px
}
.card{
  min-width:300px;
  border:1px solid #ddd;
  border-radius:6px;
  overflow:hidden;
  text-align:center;
  padding-bottom:15px
}
.card img{
  width:100%;
  height:200px;
  object-fit:contain;
}
.btn-small{
  padding:8px 14px;
  background:gray;
  color:white;
  border-radius:4px;
  display:inline-block;
  margin-top:auto;
  text-decoration: none;
}
.btn-small:hover{
    background:#e47919; 
}
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
  gap:30px
}
.blog-card{
  border:1px solid #eee;
  border-radius:6px;
  overflow:hidden;
  padding-bottom:15px;
  text-align:center
}
.blog-card img{
  width:100%;
  height:180px;
  object-fit:cover
}
#products {
  scroll-margin-top: 80px;
}
/* ======================
   🔥 修改 4：箭头样式（全新增加）
   ====================== */
.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
}
.arrow {
  position: absolute;
  z-index: 10;
  background: #555;
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.arrow:hover {
  background: #e47919;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
</style>