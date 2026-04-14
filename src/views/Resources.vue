<template>
<section class="container page">
    <h1>Technical & RFQ</h1>
    <div class="grid">
        <div v-for="a in articles" :key="a.id" class="card">
            <img :src="a.image">
            <h3>{{ a.title }}</h3>
            <router-link :to="`/article/${a.id}`" class="btn">Read More</router-link>
        </div>
    </div>
 </section>
</template>
<script setup>
import { articles } from '../data/articles';</script><style scoped>.page{padding:40px 0}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:30px}.card{border:1px solid #eee;border-radius:6px;overflow:hidden;text-align:center;padding-bottom:15px}.card img{width:100%;height:200px;object-fit:cover}.btn{padding:8px 14px;background:#007bff;color:white;border-radius:4px;display:inline-block;margin-top:10px}</style>