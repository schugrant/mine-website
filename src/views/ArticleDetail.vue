<template>
  <div class="article-detail">
    <div class="title-box">
      <h1>{{ article.title }}</h1>
    </div>

    <img :src="article.image" class="detail-img" />

    <div class="content" style="white-space:pre-line; line-height:1.8;">
      {{ article.content }}
    </div>

    <button @click="$router.back()" class="back-btn">← Back</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { articles } from '../data/articles'

const route = useRoute()
const article = ref({})

onMounted(() => {
  const id = parseInt(route.params.id)
  article.value = articles.find(a => a.id === id) || {}
})
</script>

<style scoped>
.article-detail {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}
.title-box {
  background: #f5f5f5;
  padding: 15px 20px;
  border-left: 4px solid #e47919;
  margin-bottom: 20px;
}
.detail-img {
  width: 50%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 6px;
}
.back-btn {
  margin-top: 20px;
  padding: 8px 16px;
  border: 2px solid #e47919;
  background: none;
  color: #e47919;
  cursor: pointer;
  border-radius: 4px;
}
</style>