<template>
  <div class="customer">
    <header>
      <p>用户信息</p>
    </header>

    <section>
      <!-- 用户未登录时显示登录按钮，点击跳转到登录界面 -->
      <div v-if="!customer" class="login-container">
        <p>请登录</p>
        <button @click="toLogin">登录</button>
      </div>
      
      <!-- 用户已登录时显示用户信息 -->
      <div v-else class="user-info">
        <p>欢迎, {{ customer.customerName }}</p>
        <!-- 这里可以根据实际存储的用户信息来展示 -->
        <p>电话: {{ customer.telId }}</p>
        <!-- 其他用户信息 -->
      </div>
    </section>

    <!-- 在底部添加 Footer 组件 -->
    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue"; // 导入 Footer 组件
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import { getSessionStorage } from "../common.js"; // 假设这个函数用来从本地存储获取用户信息

const axios = inject('axios');
const router = useRouter();
const customer = ref(getSessionStorage('customer'));

const toLogin = () => {
  router.push('/login');
};
</script>

<style scoped>
.customer {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

header {
  width: 100%;
  height: 13.9vw;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

header p {
  line-height: 13.9vw;
  text-align: center;
  font-size: 4.2vw;
  color: #333;
}

section {
  width: 90%;
  max-width: 500px;
  margin-top: 20vw;
}

.login-container,
.user-info {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
  text-align: center;
}

.login-container p,
.user-info p {
  font-size: 4vw;
  color: #666;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  font-size: 4vw;
  color: #fff;
  background-color: #ff6700;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #ff5700;
}

.user-info p:nth-of-type(2) {
  font-size: 3.5vw;
  color: #555;
}

</style>