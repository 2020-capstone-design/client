<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div class="username">
          <label for="username">
            <img
              src="https://user-images.githubusercontent.com/49308628/94505191-78f12280-0245-11eb-8d2d-622752ea9269.png"
              width="100"
              height="100"
            />
          </label>
          <input
            id="username"
            type="text"
            placeholder="ID"
            v-model="username"
          />
        </div>
        <div>
          <label for="password"></label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            v-model="password"
            autocomplete="false"
          />
        </div>
        <button :disabled="!password" type="submit" class="btn">
          LOGIN
        </button>
      </form>
      <div class="findId">
        <small
          ><router-link to="/find">아이디 / 비밀번호 찾기</router-link></small
        >
        <small><router-link to="/signup">회원가입</router-link></small>
      </div>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
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
        if (error.response) {
          console.log(error.response.data);
          this.logMessage = error.response.data;
          this.password = '';
        } else {
          this.logMessage = '에러발생';
          console.log(error);
          this.password = '';
        }
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
  margin: 60px;
  color: #adadad;
}
</style>
