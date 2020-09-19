<template>
  <v-stepper class="t" v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">회원가입 완료</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"
        >이용가이드 안내</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step step="3">로그인 하러가기</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" color="grey lighten-1" height="200px"
          ><img
            src="https://images.unsplash.com/photo-1580191947416-62d35a55e71d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
            width="200px"
            height="140px"
          />
          <p class="hello-text">회원가입을 진심으로 축하드립니다!</p>
        </v-card>

        <v-btn color="dark" @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="dark" @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn text @click="e1 = 1">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px">
          <p class="hello-text">
            CONTINUE 버튼을 누르시면 로그인 페이지로 이동합니다.
          </p>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3383/3383022.svg"
            width="200px"
            height="140px"
          />
        </v-card>

        <v-btn color="dark" @click="goLogIn">
          Continue
        </v-btn>

        <v-btn text @click="e1 = 2">Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
    };
  },
  methods: {
    goLogIn() {
      this.$router.push('/login');
    },
  },
};
</script>

<style>
.t {
  width: 200px;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  width: 50%;
  overflow: hidden;
}
.hello-text {
  font-family: 'Jua', sans-serif;
  margin: 10px;
}
</style>
