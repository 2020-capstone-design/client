<template>
  <div>
    <div class="edit-image-container">
      <h1 class="page-header">가게 메뉴 사진1 변경</h1>
      <img
        v-bind:src="`${this.data.restaurant_menu_image1}`"
        alt="이미지없음"
        width="200px"
        height="200px"
        class="edit-image"
      />
      <form
        class="edit-image-form"
        @submit.prevent="submitForm1"
        enctype="multipart/form-data"
      >
        <div>
          <input
            id="menu_image1"
            type="file"
            ref="menu_image1"
            accept="image/*"
            v-on:change="fileSelector1()"
          />
        </div>
        <button type="submit" class="submit-image-btn">
          가게 외관 이미지 등록
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
    <div class="edit-image-container">
      <h1 class="page-header">가게 메뉴 사진2 변경</h1>
      <img
        v-bind:src="`${this.data.restaurant_menu_image2}`"
        alt="이미지없음"
        width="200px"
        height="200px"
        class="edit-image"
      />
      <form
        class="edit-image-form"
        @submit.prevent="submitForm2"
        enctype="multipart/form-data"
      >
        <div>
          <input
            id="menu_image2"
            type="file"
            ref="menu_image2"
            accept="image/*"
            v-on:change="fileSelector2()"
          />
        </div>
        <button type="submit" class="submit-image-btn">
          가게 외관 이미지 등록
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { editMenuImage1, editMenuImage2 } from '@/api/restaurants';

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      menu_image1: '',
      menu_image2: '',
      restaurant_num: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm1() {
      try {
        const menuImage1 = new FormData();
        menuImage1.append('menu_image1', this.menu_image1);
        menuImage1.append('restaurant_num', this.$route.params.restaurant_num);
        const response = await editMenuImage1(menuImage1);
        this.logMessage = response.data;
        this.$router.go();
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
    async submitForm2() {
      try {
        const menuImage2 = new FormData();
        menuImage2.append('menu_image2', this.menu_image2);
        menuImage2.append('restaurant_num', this.$route.params.restaurant_num);
        const response = await editMenuImage2(menuImage2);
        this.logMessage = response.data;
        this.$router.go();
      } catch (error) {
        console.log(error);
        console.log(error.response.data);
        this.logMessage = error;
      }
    },
    fileSelector1() {
      this.menu_image1 = this.$refs.menu_image1.files[0];
      console.log('this.menu_image1', this.menu_image1);
    },
    fileSelector2() {
      this.menu_image2 = this.$refs.menu_image2.files[0];
      console.log('this.menu_image2', this.menu_image2);
    },
  },
};
</script>

<style></style>
