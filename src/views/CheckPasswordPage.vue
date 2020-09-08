<template>
  <div>
    <h1 class="page-header">비밀번호 확인</h1>
    <div class="contents">
      <div class="form-wrapper form-wrapper-sm">
        <form @submit.prevent="submitForm" class="form">
          <div>
            <label for="password"></label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <button :disabled="!password" type="submit" class="btn">
            확인
          </button>
        </form>
        <p class="log">{{ logMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // form values
      username: this.$store.state.username,
      password: '',
      // log
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch('LOGIN', userData);
        this.$router.push('/member');
        this.initForm();
      } catch (error) {
        // 에러 핸들링할 코드
        console.log(error.response.data);
        this.logMessage = error.response.data;
        this.password = '';
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style>
.btn {
  color: white;
}
.username {
  text-align: center;
}
.findId > small {
  margin: 40px;
  color: #adadad;
}
</style>
