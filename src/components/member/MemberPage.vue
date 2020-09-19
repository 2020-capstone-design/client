<template>
  <div class="contents">
    <h1 class="page-header">내 정보 관리</h1>
    <small>변경하시려는 부분을 변경한 후 '정보 변경'을 클릭해주세요.</small>
    <br /><br />
    <div class="form-wrapper">
      <form
        class="form"
        @submit.prevent="submitEditForm"
        enctype="multipart/form-data"
      >
        <div>
          <label for="name">이름</label>
          <input id="name" type="text" v-model="name" />
        </div>
        <div>
          <label for="birth">생년월일</label>
          <input id="birth" type="date" v-model="birth" />
        </div>
        <div>
          <label for="phone">전화번호</label>
          <input id="phone" type="text" v-model="phone" />
        </div>
        <button type="submit" class="btn">
          정보 변경
        </button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
    <div class="member-btn-container">
      <span class="member-btn" @click="routeEditPassword">
        비밀번호 변경
      </span>
      <span class="member-btn" @click="deleteMember">
        회원 탈퇴
      </span>
    </div>
  </div>
</template>

<script>
import { fetchUserInfo, deleteUser, updateUser } from '@/api/auth';
import { deleteCookie } from '@/utils/cookies';

export default {
  data() {
    return {
      owner_id: '',
      name: '',
      birth: '',
      phone: '',
      logMessage: '',
    };
  },
  methods: {
    async submitEditForm() {
      try {
        const userData = {
          username: this.$store.state.username,
          name: this.name,
          birth: this.birth,
          phone: this.phone,
        };
        if (confirm('정보를 변강하시겠습니까?')) {
          const response = await updateUser(userData);
          console.log(response);
          this.$router.go();
          alert('성공적으로 변경되었습니다.');
        }
      } catch (error) {
        console.log(error);
        this.logMessage = error.response.data.message;
      }
    },
    async deleteMember() {
      if (confirm('계정을 삭제하시겠습니까?')) {
        try {
          await deleteUser(this.$store.state.username);
          this.$store.commit('clearUsername');
          this.$store.commit('clearToken');
          deleteCookie('page_auth');
          deleteCookie('page_user');
          this.$router.push('/login');
        } catch (error) {
          console.error(error);
          this.logMessage = error.response.data;
        }
      }
    },
    routeEditPassword() {
      console.log('test');
      const owner_id = this.owner_id;
      console.log('owner_id', owner_id);
      this.$router.push(`/edit_password/${owner_id}`);
    },
  },
  async created() {
    const { data } = await fetchUserInfo(this.$store.state.username);
    this.owner_id = data.user.owner_id;
    this.name = data.user.owner_name;
    this.birth = data.user.owner_birth;
    this.phone = data.user.owner_phone;
  },
};
</script>

<style>
small {
  text-align: center;
}
.member-btn-container {
  text-align: center;
  margin: 20px;
}
.member-btn {
  text-decoration: underline;
  margin: 20px;
  color: gray;
  font-family: 'Jua', sans-serif;
}
</style>
