<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="owner_id">* 아이디 </label>
          <input
            id="owner_id"
            type="text"
            v-model="owner_id"
            maxlength="12"
            placeholder="영어,숫자 4자~12자로만 입력"
          />
        </div>
        <p class="validation-text">
          <span class="warning" v-if="!isOnlyEnglishAndNum && owner_id">
            영어+숫자, 4자~12자, 공백 불가
          </span>
        </p>
        <div>
          <label for="password">* 비밀번호 </label>
          <input
            id="password"
            type="password"
            placeholder="8자 이상 20자 이하, 문자, 숫자, 특수문자 포함"
            maxlength="20"
            v-model="password"
          />
        </div>
        <p class="validation-text">
          <span class="warning" v-if="!isPasswordValid && password">
            8자 이상, 문자, 숫자, 특수문자 포함해주세요.
          </span>
          <span class="warning" v-if="isPasswordSpace && password">
            공백을 제거해주세요.
          </span>
        </p>
        <div>
          <label for="checkPassword">* 비밀번호 확인 </label>
          <input
            id="checkPassword"
            type="password"
            maxlength="20"
            v-model="checkPassword"
          />
        </div>
        <p class="validation-text">
          <span class="warning" v-if="!isPasswordSameValid && checkPassword">
            비밀번호가 일치하지 않습니다.
          </span>
        </p>
        <div>
          <label for="name">*이름 </label>
          <input id="name" type="text" v-model="name" maxlength="20" />
        </div>
        <p class="validation-text">
          <span class="warning" v-if="isNameSpace && name">
            공백을 제거해주세요.
          </span>
          <span class="warning" v-if="!isNumberValidName && name">
            숫자 입력이 불가능합니다.
          </span>
        </p>
        <div>
          <label for="email">*이메일 </label>
          <small class="input-email">아이디/비밀번호 찾기 시 사용됩니다.</small>
          <input id="email" type="email" v-model="email" maxlength="50" />
        </div>
        <div>
          <label for="birthday">생년월일 </label>
          <input id="birthday" type="date" v-model="birthday" />
        </div>
        <div>
          <label for="phone-number">*휴대폰 번호 </label>
          <input
            id="phonenumber"
            type="text"
            v-model="phonenumber"
            v-on:keyup="inputPhoneNumber(phonenumber)"
            maxlength="13"
            placeholder="'-' 빼고 숫자만 입력하세요."
          />
        </div>
        <button type="submit" class="btn">가입 하기</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth';
import {
  checkPasswordPattern,
  checkSpace,
  chechNumber,
  checkPasswordSame,
  checkOnlyEnglishAndNum,
} from '@/utils/validation';

export default {
  data() {
    return {
      // form values
      owner_id: '',
      password: '',
      checkPassword: '',
      name: '',
      email: '',
      birthday: '',
      phonenumber: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isPasswordValid() {
      return checkPasswordPattern(this.password);
    },
    isPasswordSpace() {
      return checkSpace(this.password);
    },
    isNameSpace() {
      return checkSpace(this.name);
    },
    isNumberValidName() {
      return chechNumber(this.name);
    },
    isPasswordSameValid() {
      return checkPasswordSame(this.password, this.checkPassword);
    },
    isOnlyEnglishAndNum() {
      return checkOnlyEnglishAndNum(this.owner_id);
    },
  },
  methods: {
    async submitForm() {
      try {
        if (
          this.owner_id === '' ||
          this.password === '' ||
          this.name === '' ||
          this.email === '' ||
          this.passwordCheck === '' ||
          this.phonenumber === ''
        ) {
          this.logMessage = '필수 입력사항이 누락되었습니다.';
          return;
        }
        if (
          this.isPasswordValid === false ||
          this.isPasswordSpace === true ||
          this.isNameSpace === true ||
          this.isNumberValidName === false ||
          this.isPasswordSameValid === false ||
          this.isOnlyEnglishAndNum === false
        ) {
          this.logMessage = '가입 불가, 입력을 다시 확인해주세요.';
          return;
        }
        const userData = {
          owner_id: this.owner_id,
          password: this.password,
          name: this.name,
          email: this.email,
          birthday: this.birthday,
          phonenumber: this.phonenumber,
        };
        await registerUser(userData);
        this.$router.push('/hello');
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
      this.owner_id = '';
      this.password = '';
      this.passwordCheck = '';
      this.name = '';
      this.email = '';
      this.birthday = '';
      this.phonenumber = '';
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
      this.phonenumber = phone;
    },
  },
};
</script>

<style>
.input-email {
  font-size: 5px;
}
</style>
