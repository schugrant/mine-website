<template>
  <nav class="navbar">
    <div class="logo"> </div>
    <div class="nav-links">
      <router-link to="/" class="nav-item">Home</router-link>

      <!-- 完美下拉：可定位 + 菜单不消失 + 详情页可点 -->
      <div class="dropdown-wrapper">
        <!-- 👇 这里恢复：点击 Products → 跳回首页并定位 #products -->
        <a href="/#products" class="nav-item">Products</a>

        <div class="dropdown-menu">
          <a href="/product/1" class="menu-item">Split set</a>
          <a href="/product/2" class="menu-item">Full threaded bolt</a>
          <a href="/product/3" class="menu-item">Self-drilling-Anchor bolt</a>
          <a href="/product/4" class="menu-item">Plates & Nuts</a>
          <a href="/product/5" class="menu-item">Metal Wire Mesh</a>
          <a href="/product/6" class="menu-item">Grout & Capsule</a>
          <a href="/product/7" class="menu-item">Steel fiber</a>
          <a href="/product/8" class="menu-item">Others</a>
        </div>
      </div>

      <router-link to="/resources" class="nav-item">Technical & FAQ</router-link>
      <router-link to="/about" class="nav-item">About us</router-link>
      <router-link to="/contact" class="nav-item">Contact</router-link>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
/* 导航栏：最高层级，永远不被详情页盖住 */
.navbar {
  background: #ffffff;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999999999 !important;
  height: 70px;
  box-sizing: border-box;
}

.logo {
 background-image: url("/images/logo nav.jpg");
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
   width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 30px;
  align-items: center;
  color: white;
  height: 100%;
}

.nav-item {
  color: black;
  font-size: 15px;
  text-transform: uppercase;
  padding: 0 10px;
  white-space: nowrap;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
}
/* 导航按钮悬停变色 + 加粗 */
.nav-item:hover {
  color: #e47919 !important;
}

/* 核心：hover 区域 = 按钮 + 菜单，鼠标移动绝不消失 */
.dropdown-wrapper {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

/* 下拉菜单：层级最高，详情页一定能点到 */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 70px;
  left: 0;
  background: white;
  min-width: 200px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  border-radius: 4px;
  z-index: 999999999 !important;
}

.dropdown-wrapper:hover .dropdown-menu {
  display: block;
}

.menu-item {
  display: block;
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
}

.menu-item:hover {
  background: #f5f5f5;
  color: #e47919 !important;
}
</style>