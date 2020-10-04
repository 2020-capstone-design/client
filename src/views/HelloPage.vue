<template>
  <v-stepper class="stepper" v-model="e1">
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
        <v-card class="mb-12" color="grey lighten-1" height="370px">
          <br />
          <img
            src="https://user-images.githubusercontent.com/49308628/95018018-c29f9a00-0697-11eb-899e-4de44339d2be.png"
            width="300px"
            height="250px"
          />
          <br />
          <b class="hello-text">회원가입을 진심으로 축하드립니다!</b>
          <br />
          <b class="hello-text">
            '오늘 뭐 먹지?'는 사장님을 응원합니다.
          </b>
        </v-card>

        <v-btn color="dark" @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="370px">
          <img
            src="https://user-images.githubusercontent.com/49308628/95017315-9c77fb00-0693-11eb-84aa-a06d3fc530e3.png"
            width="400px"
            height="300px"
          />
          <br />
          <b id="hello-text-step2">
            페이지 상단 메뉴 '이용가이드'에서 이용 방법을 참고할 수 있습니다!
          </b>
        </v-card>

        <v-btn color="dark" @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn text @click="e1 = 1">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="210px">
          <b class="hello-text">
            CONTINUE 버튼을 누르시면 로그인 페이지로 이동합니다.
          </b>
          <br /><br />
          <img
            src="https://user-images.githubusercontent.com/49308628/95017937-31302800-0697-11eb-8bc9-70f2d61608f1.png"
            width="120px"
            height="120px"
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
.stepper {
  margin: 100px auto;
  text-align: center;
  align-items: center;
  width: 50%;
  overflow: hidden;
}
.hello-text {
  font: cursive;
  font-size: 17px;
  margin: 10px;
}
#hello-text-step2 {
  font: cursive;
  font-size: 17px;
  margin: 10px;
}

#step1 {
  margin: 100px;
}
</style>
