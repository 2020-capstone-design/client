<template>
  <div class="edit-logo" @refresh="fetchData">
    <h1 class="page-header">가게 로고 변경</h1>
    <img
      v-bind:src="`http://localhost:3000${this.logo}`"
      width="200px"
      height="200px"
      class="edit-logo-image"
    />
    <form
      class="edit-logo-form"
      @submit.prevent="submitForm"
      enctype="multipart/form-data"
    >
      <div>
        <input
          id="logo"
          type="file"
          ref="logo"
          accept="image/*"
          v-on:change="fileSelector()"
        />
      </div>
      <button type="submit" class="logo-btn">
        가게 로고 이미지 등록
      </button>
    </form>
    <p class="log">{{ logMessage }}</p>
  </div>
</template>

<script>
import { editLogo, fetchPost } from '@/api/posts';
export default {
  data() {
    return {
      logo: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const logoData = new FormData();
        logoData.append('logo', this.logo);
        logoData.append('restaurant_num', this.$route.params.restaurant_num);
        const response = await editLogo(logoData);
        this.logMessage = response.data;
        this.$router.go();
      } catch (error) {
        console.log(error);
        console.log(error.response.data);
        this.logMessage = error;
      }
    },
    fileSelector() {
      this.logo = this.$refs.logo.files[0];
      console.log('this.logo', this.logo);
    },
    async fetchData() {
      this.isLoading = true;
      const { restaurant_num } = {
        restaurant_num: this.$route.params.restaurant_num,
      };
      const { data } = await fetchPost(restaurant_num);
      this.logo = data.restaurant.restaurant_logo;
    },
  },
  created() {
    this.fetchData();
    this.logo = this.$route.params.restaurant_logo;
  },
};
</script>

<style>
#logo {
  border: 5px;
}
.edit-logo-image {
  border: 5px solid #364f6b;
  border-radius: 50%;
  margin: 30px 0px 50px 0px;
}
.edit-logo-form {
  align-items: center;
}
.logo-btn {
  color: floralwhite;
  background: #9ab4d4;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  width: 300px;
  height: 50px;
  margin: 50px;
}
</style>
