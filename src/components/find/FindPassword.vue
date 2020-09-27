<template>
  <div class="contents">
    <h1 class="page-header">비밀번호 찾기</h1>
    <div class="form-wrapper form-wrapper-sm">
      <form class="form" @submit.prevent="submitFindForm">
        <div>
          <label for="ownerId">회원 아이디</label>
          <input id="ownerId" type="text" v-model="ownerId" maxlength="20" />
        </div>
        <div>
          <label for="ownerEmail">회원 이메일</label>
          <input
            id="ownerEmail"
            type="email"
            v-model="ownerEmail"
            maxlength="101"
            placeholder="해당 이메일로 임시 비밀번호가 전송됩니디."
          />
        </div>
        <button type="submit" class="btn">
          이메일로 비밀번호 받기
        </button>
      </form>
      <div v-if="isSuccess">
        <v-alert type="success" utlined color="#040">
          해당 이메일로 임시 비밀번호가 전송되었습니다.
        </v-alert>
        <div class="home-btn">
          <v-btn small color="040" @click="gotoLogin">로그인 하기</v-btn>
        </div>
      </div>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { findUserPassword } from '@/api/auth';

export default {
  data() {
    return {
      ownerId: '',
      ownerEmail: '',
      logMessage: '',
      isSuccess: false,
    };
  },
  methods: {
    async submitFindForm() {
      try {
        if (this.ownerId === '' || this.ownerEmail === '') {
          this.logMessage = '필수 입력사항이 누락되었습니다.';
          return;
        }
        const userData = {
          owner_id: this.ownerId,
          owner_email: this.ownerEmail,
        };
        await findUserPassword(userData);
        this.logMessage = '';
        this.isSuccess = true;
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          this.logMessage = error.response.data;
        } else {
          this.logMessage = '에러발생';
          console.log(error);
        }
      }
    },
    gotoLogin() {
      this.$router.push('/login');
    },
  },
};
</script>

<style>
#find-comment {
  font-family: 'Jua', sans-serif;
  color: #708098;
  text-align: center;
  margin: 30px;
}
</style>
