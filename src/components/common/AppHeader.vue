<template>
  <div id="header-wraper">
    <header>
      <div>
        <router-link :to="logoLink">
          <img
            src="https://user-images.githubusercontent.com/49308628/93667273-909b0f00-fabf-11ea-8a46-a3ab2abb1b6e.png"
            width="92"
            height="92"
          />
        </router-link>
      </div>
      <div class="navigations">
        <!-- 1 -->
        <template v-if="isUserLogin">
          <small>{{ $store.state.username }}님</small>
          <a href="javascript:;" @click="logoutUser" class="logout-button">
            로그아웃
          </a>
          <router-link to="/check_password">내 정보 관리</router-link>
          <router-link to="/download">이용가이드</router-link>
        </template>
        <!-- 2 -->
        <template v-else>
          <router-link to="/login">로그인</router-link>
          <router-link to="/download">이용가이드</router-link>
        </template>
      </div>
    </header>
  </div>
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
#header-wraper {
  align-items: center;
}
.username {
  color: #9ab4d4;
}
header {
  display: flex;
  width: 100%;
  margin: auto;
  padding: 20px;
  z-index: 2;
  background: #b4c7e7;
}

a {
  color: white;
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
.navigations {
  margin-top: 25px;
  margin-left: 10px;
}
.navigations a {
  margin: 5px;
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
  color: #e1e153;
  font-weight: bold;
}
</style>
