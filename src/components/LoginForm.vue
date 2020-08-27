<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username"></label>
          <input
            id="username"
            type="text"
            placeholder="아이디"
            v-model="username"
          />
          <!-- <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p> -->
        </div>
        <div>
          <label for="password"></label>
          <input
            id="password"
            type="password"
            placeholder="패스워드"
            v-model="password"
          />
        </div>
        <button :disabled="!password" type="submit" class="btn">
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
    <span>
      <p>아이디 찾기</p>
    </span>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
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
        this.$router.push('/main');
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
p {
  font-size: 0.7em;
}
</style>
