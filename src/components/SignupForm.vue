<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="owner_id">id </label>
          <input id="owner_id" type="text" v-model="owner_id" />
        </div>
        <div>
          <label for="password">password </label>
          <div><small>*영어와 숫자를 조합하시오.</small></div>
          <input
            id="password"
            type="text"
            placeholder="최대 15자"
            maxlength="15"
            v-model="password"
          />
        </div>
        <div>
          <label for="name">이름 </label>
          <input id="name" type="text" v-model="name" />
        </div>
        <div>
          <label for="birthday">생년월일 </label>
          <input id="birthday" type="text" v-model="birthday" />
        </div>
        <div>
          <label for="phone-number">휴대폰 번호 </label>
          <input id="phonenumber" type="text" v-model="phonenumber" />
        </div>
        <button type="submit" class="btn">가입 하기</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth';

export default {
  data() {
    return {
      // form values
      owner_id: '',
      password: '',
      name: '',
      birthday: '',
      phonenumber: '',
      // log
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        owner_id: this.owner_id,
        password: this.password,
        name: this.name,
        birthday: this.birthday,
        phonenumber: this.phonenumber,
      };
      const { data } = await registerUser(userData);
      console.log(data.name);
      this.logMessage = `${data.name} 님이 가입되었습니다`;
      this.initForm();
    },
    initForm() {
      this.owner_id = '';
      this.password = '';
      this.name = '';
      this.birthday = '';
      this.phonenumber = '';
    },
  },
};
</script>

<style></style>
