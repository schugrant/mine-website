<template>
  <div class="about-page">
    <div class="title-box">
      <h1>About Us</h1>
    </div>

    <div class="about-content">
      <p>Taian Honria Trading Co., Ltd. was established in 2013, building on our sourcing experience that began in 2011 through direct involvement in mining procurement projects.</p>

      <p>We specialize in underground mining and tunneling support materials, with a core focus on ground support solutions. Our product range includes anchor bolts, split sets, wire mesh, steel plates, rails, mine cars, and grinding media.</p>

      <h3>What We Do</h3>
      <p>We work with selected manufacturing partners to supply products that meet practical underground application requirements. Our focus is not only on product delivery, but also on stable performance, consistent quality, and reliable supply across repeated orders.</p>

      <h3>Quality Control</h3>
      <p>Quality is managed through a structured inspection process that includes:</p>
      <ul>
        <li>Raw material verification</li>
        <li>Production monitoring</li>
        <li>Pre-shipment inspection</li>
        <li>Batch consistency checks</li>
        <li>Inspection documentation for traceability</li>
      </ul>
      <p>In addition, some of our manufacturing partners are certified under ISO management systems, and all product quality claims are supported by inspection records and related documentation.</p>

      <h3>Our Technical Understanding</h3>
      <p>Underground mining conditions can vary significantly from site to site. Product performance may be affected by ground conditions, installation methods, corrosion exposure, and operational demands.</p>
      <p>With practical experience in mining supply, we understand the importance of matching the right support product to the right application. This helps our customers reduce risk and improve consistency underground.</p>

      <h3>Our Role in the Supply Chain</h3>
      <p>Honria acts as a bridge between mine sites and manufacturing resources. We help customers balance quality, delivery stability, and cost while keeping supply practical and dependable.</p>
      <p>Rather than focusing only on standard product descriptions, we pay attention to real project needs and long-term supply reliability.</p>

      <h3>Our Commitment</h3>
      <p>At Honria, we believe reliable supply means more than shipping products on time. It means ensuring the products delivered are suitable for underground use, supported by inspection, and consistent from order to order.</p>
      <p>If you are looking for a dependable partner for underground support materials, Honria is ready to support your project.</p>
    </div>
  </div>
</template>

<script setup>
// 无需额外逻辑，仅展示静态内容
</script>

<style scoped>
.about-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
.title-box {
  background: #f5f5f5;
  padding: 15px 20px;
  border-left: 4px solid #e47919; /* 网站统一橙色主题 */
  margin-bottom: 30px;
}
.title-box h1 {
  font-size: 24px;
  margin: 0;
  color: #333;
}
.about-content {
  line-height: 1.8;
  font-size: 16px;
  color: #333;
}
.about-content h3 {
  font-size: 18px;
  margin: 25px 0 10px;
  color: #333;
}
.about-content ul {
  padding-left: 25px;
  margin: 10px 0;
}
.about-content li {
  margin: 5px 0;
}
.about-content p {
  margin: 10px 0;
}
/* 响应式适配，手机端正常显示 */
@media (max-width: 768px) {
  .about-page {
    padding: 15px;
  }
  .title-box h1 {
    font-size: 22px;
  }
  .about-content {
    font-size: 15px;
  }
}
</style>