<template>
  <div class="contents">
    <h1 class="page-header">아이디 찾기</h1>
    <div class="form-wrapper form-wrapper-sm">
      <form class="form" @submit.prevent="submitFindForm">
        <div>
          <label for="ownerName">회원 이름</label>
          <input
            id="owner_name"
            type="text"
            v-model="ownerName"
            maxlength="20"
          />
        </div>
        <div>
          <label for="ownerPhone">회원 전화번호</label>
          <input
            id="ownerPhone"
            type="text"
            v-model="ownerPhone"
            v-on:keyup="inputPhoneNumber(ownerPhone)"
            placeholder="숫자만 입력하세요."
            maxlength="101"
          />
        </div>
        <button type="submit" class="btn">
          아이디 찾기
        </button>
      </form>
      <div v-if="isSuccess">
        <v-alert type="success" utlined color="#040">
          회원님의 아이디: {{ ownerId }}
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
import { findUserId } from '@/api/auth';

export default {
  data() {
    return {
      ownerName: '',
      ownerPhone: '',
      isSuccess: false,
      ownerId: '',
      logMessage: '',
    };
  },
  methods: {
    async submitFindForm() {
      try {
        if (this.ownerName === '' || this.ownerPhone === '') {
          this.logMessage = '필수 입력사항이 누락되었습니다.';
          return;
        }
        const userData = {
          owner_name: this.ownerName,
          owner_phone: this.ownerPhone,
        };
        const response = await findUserId(userData);
        this.ownerId = response.data.owner_id;
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
    inputPhoneNumber(obj) {
      var number = obj.replace(/[^0-9]/g, '');
      var phone = '';

      if (number.length < 4) {
        return number;
      } else if (number.length < 7) {
        phone += number.substr(0, 3);
        phone += '-';
        phone += number.substr(3);
      } else if (number.length < 11) {
        phone += number.substr(0, 3);
        phone += '-';
        phone += number.substr(3, 3);
        phone += '-';
        phone += number.substr(6);
      } else {
        phone += number.substr(0, 3);
        phone += '-';
        phone += number.substr(3, 4);
        phone += '-';
        phone += number.substr(7);
      }
      this.ownerPhone = phone;
    },
  },
};
</script>

<style></style>
