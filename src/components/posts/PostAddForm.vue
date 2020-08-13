<template>
  <div class="contents">
    <h1 class="page-header">가게 등록</h1>
    <div class="form-wrapper">
      <form
        class="form"
        @submit.prevent="submitForm"
        enctype="multipart/form-data"
      >
        <div>
          <label for="title">가게명</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="phone">가게 번호</label>
          <input id="phone" type="text" v-model="phone" />
        </div>
        <div>
          <label for="location">가게 위치</label>
          <input id="location" type="text" v-model="location" />
        </div>
        <div>
          <label for="university">가게 근처 대학교</label>
          <select
            name="university"
            id="university"
            type="text"
            v-model="university"
          >
            <option value="한밭대학교" selected="selected">한밭대학교</option>
            <option value="목원대학교">목원대학교</option>
            <option value="충남대학교">충남대학교</option>
          </select>
        </div>
        <div>
          <label for="intro">가게 소개</label>
          <textarea id="intro" type="text" row="4" v-model="intro" />
          <p
            v-if="!isContentsValid"
            class="validation-text warning isContentTooLong"
          >
            Contents length must be less than 250
          </p>
        </div>
        <div>
          <label for="logo">가게로고</label>
          <input id="logo" type="file" v-on="logo" />
        </div>
        <div>
          <label for="category">가게 카테고리</label>
          <input id="category" type="text" v-model="category" />
        </div>
        <div>
          <label for="main_menu1">가게 메인메뉴1</label>
          <input id="main_menu1" type="text" v-model="main_menu1" />
        </div>
        <div>
          <label for="main_menu2">가게 메인메뉴2</label>
          <input id="main_menu2" type="text" v-model="main_menu2" />
        </div>
        <button type="submit" class="btn">가게 등록</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      phone: '',
      location: '',
      university: '',
      intro: '',
      img: '',
      logo: null,
      category: '',
      main_menu1: '',
      main_menu2: '',

      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.intro.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      try {
        const response = await createPost({
          restaurant_name: this.title,
          restaurant_phone: this.phone,
          restaurant_loc: this.location,
          restaurant_university: this.university,
          restaurant_intro: this.intro,
          restaurant_img: this.img,
          restaurant_logo: this.logo,
          restaurant_category: this.category,
          restaurant_main_menu1: this.main_menu1,
          restaurant_main_menu2: this.main_menu2,
          fk_owner_id: this.$store.state.username,
        });
        this.$router.push('/main');
        console.log(response);
      } catch (error) {
        console.log(error.response.data.message);
        this.logMessage = error.response.data.message;
      }
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
