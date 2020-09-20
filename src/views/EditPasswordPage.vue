<template>
  <div class="contents">
    <h1 class="page-header">비밀번호 변경</h1>
    <small>변경하시려는 부분을 변경한 후 '정보 변경'을 클릭해주세요.</small>
    <br /><br />
    <div class="form-wrapper">
      <form
        class="form"
        @submit.prevent="submitEditForm"
        enctype="multipart/form-data"
      >
        <div>
          <label for="oldPassword">기존 비밀번호</label>
          <input
            id="oldPassword"
            type="password"
            v-model="oldPassword"
            autocomplete="off"
          />
        </div>
        <p class="validation-text">
          <span class="warning" v-if="!isOldPasswordValid && oldPassword">
            8자 이상, 문자, 숫자, 특수문자 포함해주세요.
          </span>
          <span class="warning" v-if="isOldPasswordSpace && oldPassword">
            공백을 제거해주세요.
          </span>
        </p>
        <div>
          <label for="newPassword">새 비밀번호</label>
          <input
            id="newPassword"
            type="password"
            v-model="newPassword"
            autocomplete="off"
          />
        </div>
        <p class="validation-text">
          <span class="warning" v-if="!isNewPasswordValid && newPassword">
            8자 이상, 문자, 숫자, 특수문자 포함해주세요.
          </span>
          <span class="warning" v-if="isNewPasswordSpace && newPassword">
            공백을 제거해주세요.
          </span>
        </p>
        <div>
          <label for="checkNewPassword">새 비밀번호 확인</label>
          <input
            id="checkNewPassword"
            type="password"
            v-model="checkNewPassword"
            autocomplete="off"
          />
        </div>
        <p class="validation-text">
          <span class="warning" v-if="!isPasswordSameValid && checkNewPassword">
            비밀번호가 일치하지 않습니다.
          </span>
        </p>
        <button type="submit" class="btn">
          정보 변경
        </button>
      </form>
      <div v-if="isSuccess">
        <v-alert type="success" utlined color="#040">
          비밀번호가 성공적으로 바뀌었습니다.
        </v-alert>
        <div class="home-btn">
          <v-btn small color="040" @click="gotoHome">홈으로 가기</v-btn>
        </div>
      </div>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import {
  checkPasswordPattern,
  checkSpace,
  checkPasswordSame,
} from '@/utils/validation';
import { updateUserPassword } from '@/api/auth';
export default {
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      checkNewPassword: '',
      logMessage: '',
      isSuccess: false,
    };
  },
  computed: {
    isOldPasswordValid() {
      return checkPasswordPattern(this.oldPassword);
    },
    isOldPasswordSpace() {
      return checkSpace(this.oldPassword);
    },
    isNewPasswordValid() {
      return checkPasswordPattern(this.newPassword);
    },
    isNewPasswordSpace() {
      return checkSpace(this.newPassword);
    },
    isPasswordSameValid() {
      return checkPasswordSame(this.newPassword, this.checkNewPassword);
    },
  },
  methods: {
    async submitEditForm() {
      try {
        if (
          this.isOldPasswordValid === false ||
          this.isOldPasswordSpace === true ||
          this.isNewPasswordValid === false ||
          this.isNewPasswordSpace === true ||
          this.isPasswordSameValid === false
        ) {
          this.logMessage = '입력이 올바르지 않습니다. 다시 한번 확인해주세요.';
          return;
        }
        const owner_id = this.$route.params.owner_id;
        const userData = {
          owner_id: owner_id,
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
        };
        console.log(userData);
        const response = await updateUserPassword(userData);
        console.log(response);
        this.isSuccess = true;
        console.log(this.isSuccess);
        this.initForm();
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
    initForm() {
      this.oldPassword = '';
      this.newPassword = '';
      this.checkNewPassword = '';
      this.logMessage = '';
    },
    gotoHome() {
      this.$router.push('/main');
    },
  },
};
</script>

<style>
.home-btn {
  text-align: center;
}
</style>
