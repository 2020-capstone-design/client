<template>
  <div>
    <h1 class="page-header">로그인</h1>
    <LoginForm></LoginForm>
    <p id="login-page-text">로그인 후 사용 가능한 서비스입니다.</p>
    <Sample></Sample>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import Sample from '@/components/Sample.vue';
export default {
  components: {
    LoginForm,
    Sample,
  },
};
</script>

<style>
#login-page-text {
  text-align: center;
  color: #364f6b;
}
</style>
