<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div class="app-contents">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  components: {
    AppHeader,
    Footer,
  },
};
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
