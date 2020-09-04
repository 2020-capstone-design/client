<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">
        오늘 뭐먹지? 사장님 광장
      </router-link>
      <span v-if="isUserLogin">
        <small>{{ $store.state.username }}님 환영합니다.</small></span
      >
    </div>
    <div class="navigations">
      <!-- 1 -->
      <template v-if="isUserLogin">
        <a href="javascript:;" @click="logoutUser" class="logout-button">
          로그아웃
        </a>
        <router-link to="/member">내 정보 관리</router-link>
        <router-link to="/download">앱 다운로드</router-link>
      </template>
      <!-- 2 -->
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
        <router-link to="/download">앱 다운로드</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';

export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    },
  },
  methods: {
    logoutUser() {
      if (confirm('로그아웃 하시겠습니까?')) {
        this.$store.commit('clearUsername');
        this.$store.commit('clearToken');
        deleteCookie('page_auth');
        deleteCookie('page_user');
        this.$router.push('/login');
      }
    },
  },
};
</script>

<style scoped>
.username {
  color: #9ab4d4;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  z-index: 2;
}
a {
  color: #9ab4d4;
  font-family: 'Jua', sans-serif;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: #9ab4d4;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.logout-button {
  font-size: 18px;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
