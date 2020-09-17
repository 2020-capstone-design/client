<template>
  <div class="edit-image-container">
    <h1 class="page-header">가게 로고 변경</h1>
    <img
      v-bind:src="`http://localhost:3000${this.data.restaurant_logo}`"
      alt="이미지없음"
      width="200px"
      height="200px"
      class="edit-image"
    />
    <form
      class="edit-image-form"
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
      <button type="submit" class="submit-image-btn">
        가게 로고 이미지 등록
      </button>
    </form>
    <p class="log">{{ logMessage }}</p>
  </div>
</template>

<script>
import { editLogo } from '@/api/posts';
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      logo: '',
      restaurant_num: '',
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
  },
};
</script>

<style>
#logo {
  border: 5px;
}
.edit-image-container {
  text-align: center;
}
.edit-image {
  border: 5px solid #364f6b;
  border-radius: 50%;
  margin: 30px 0px 50px 0px;
}
.edit-image-form {
  align-items: center;
}
.submit-image-btn {
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
