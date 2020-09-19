<template>
  <div>
    <h1 class="page-header">로그인</h1>
    <LoginForm></LoginForm>
    <p id="login-page-header">로그인 후 사용 가능한 서비스입니다.</p>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
};
</script>

<style>
#login-page-header {
  text-align: center;
  color: #364f6b;
}
</style>
