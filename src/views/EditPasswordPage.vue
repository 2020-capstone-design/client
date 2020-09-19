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
          <input id="oldPassword" type="password" v-model="oldPassword" />
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
          <input id="newPassword" type="password" v-model="newPassword" />
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
export default {
  data() {
    return {
      owner_id: '',
      oldPassword: '',
      newPassword: '',
      checkNewPassword: '',
      logMessage: '',
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
};
</script>

<style></style>
