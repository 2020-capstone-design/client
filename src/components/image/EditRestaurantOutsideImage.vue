<template>
  <div class="edit-image-container">
    <h1 class="page-header">가게 외관 사진 변경</h1>
    <img
      v-bind:src="`http://localhost:3000${this.data.restaurant_outside_image}`"
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
          id="outside_image"
          type="file"
          ref="outside_image"
          accept="image/*"
          v-on:change="fileSelector()"
        />
      </div>
      <button type="submit" class="submit-image-btn">
        가게 외관 이미지 등록
      </button>
    </form>
    <p class="log">{{ logMessage }}</p>
  </div>
</template>

<script>
import { editOusideImage } from '@/api/posts';

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      outside_image: '',
      restaurant_num: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const outsideImageData = new FormData();
        outsideImageData.append('outside_image', this.outside_image);
        outsideImageData.append(
          'restaurant_num',
          this.$route.params.restaurant_num,
        );
        const response = await editOusideImage(outsideImageData);
        this.logMessage = response.data;
        this.$router.go();
      } catch (error) {
        console.log(error);
        console.log(error.response.data);
        this.logMessage = error;
      }
    },
    fileSelector() {
      this.outside_image = this.$refs.outside_image.files[0];
      console.log('this.outside_image', this.outside_image);
    },
  },
};
</script>

<style></style>
