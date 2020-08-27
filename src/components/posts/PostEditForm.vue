<template>
  <div class="contents">
    <h1 class="page-header">가게 정보 수정</h1>
    <small
      >수정하고 싶으신 내용을 수정 후 '수정 완료' 버튼을 클릭해주세요.</small
    >
    <br />
    <br />
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="restaurant_name">*가게 명</label>
          <input id="restaurant_name" type="text" v-model="restaurant_name" />
        </div>
        <div>
          <label for="restaurant_phone">가게 번호</label>
          <input id="phone" type="text" v-model="restaurant_phone" />
        </div>
        <div>
          <label for="restaurant_loc">가게 위치</label>
          <input id="location" type="text" v-model="restaurant_loc" />
        </div>
        <div>
          <label for="restaurant_university">*가게 근처 대학교</label>
          <select
            name="university"
            id="university"
            type="text"
            v-model="restaurant_university"
          >
            <option value="한밭대학교" selected="selected">한밭대학교</option>
            <option value="목원대학교">목원대학교</option>
            <option value="충남대학교">충남대학교</option>
          </select>
        </div>
        <div>
          <label for="restaurant_intro">가게 소개</label>
          <textarea
            id="restaurant_intro"
            type="text"
            v-model="restaurant_intro"
          />
          <p
            v-if="!isContentsValid"
            class="validation-text warning isContentTooLong"
          >
            Contents length must be less than 250
          </p>
        </div>
        <div>
          <label for="restaurant_logo">가게로고</label>
          <input
            id="logo"
            type="file"
            v-on:change="fileSelector()"
            ref="logo"
            accept=".jpg, .jpeg, .png"
          />
        </div>
        <div>
          <label for="restaurant_category">*가게 카테고리</label>
          <select id="category" type="text" v-model="restaurant_category">
            <option value="한식">한식</option>
            <option value="분식">분식</option>
            <option value="중식">중식</option>
            <option value="중식">일식</option>
          </select>
        </div>
        <div>
          <label for="restaurant_main_menu1">가게 메인메뉴1</label>
          <input
            id="restaurant_main_menu1"
            type="text"
            v-model="restaurant_main_menu1"
          />
        </div>
        <div>
          <label for="restaurant_main_menu2">가게 메인메뉴2</label>
          <input
            id="restaurant_main_menu2"
            type="text"
            v-model="restaurant_main_menu2"
          />
        </div>
        <div>
          <label for="restaurant_operating_time">가게 운영 시간</label>
          <input
            id="restaurant_operating_time"
            type="text"
            v-model="restaurant_operating_time"
          />
        </div>
        <div>
          <label for="restaurant_closed_days">가게 휴무일</label>
          <input
            id="restaurant_closed_days"
            type="text"
            v-model="restaurant_closed_days"
          />
        </div>
        <button type="submit" class="btn">수정 완료</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
  data() {
    return {
      restaurant_name: '',
      restaurant_phone: '',
      restaurant_loc: '',
      restaurant_university: '',
      restaurant_intro: '',
      restaurant_img: '',
      restaurant_logo: '',
      restaurant_category: '',
      restaurant_main_menu1: '',
      restaurant_main_menu2: '',
      restaurant_operating_time: '',
      restaurant_closed_days: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.restaurant_intro.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      const restaurant_num = this.$route.params.restaurant_num;
      console.log('restaurant_num', restaurant_num);
      try {
        await editPost(restaurant_num, {
          restaurant_name: this.restaurant_name,
          restaurant_phone: this.restaurant_phone,
          restaurant_loc: this.restaurant_loc,
          restaurant_university: this.restaurant_university,
          restaurant_intro: this.restaurant_intro,
          restaurant_img: this.restaurant_img,
          restaurant_logo: this.restaurant_logo,
          restaurant_category: this.restaurant_category,
          restaurant_main_menu1: this.restaurant_main_menu1,
          restaurant_main_menu2: this.restaurant_main_menu2,
          restaurant_operating_time: this.restaurant_operating_time,
          restaurant_closed_days: this.restaurant_closed_days,
        });
        console.log('완료');

        this.$router.push('/main');
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      }
    },
  },
  async created() {
    const restaurant_num = this.$route.params.restaurant_num;
    console.log('created', restaurant_num);
    const { data } = await fetchPost(restaurant_num);
    console.log(data);
    this.restaurant_name = data.restaurant.restaurant_name;
    this.restaurant_phone = data.restaurant.restaurant_phone;
    this.restaurant_loc = data.restaurant.restaurant_loc;
    this.restaurant_university = data.restaurant.restaurant_university;
    this.restaurant_intro = data.restaurant.restaurant_intro;
    this.restaurant_img = data.restaurant.restaurant_img;
    this.restaurant_logo = data.restaurant.restaurant_logo;
    this.restaurant_category = data.restaurant.restaurant_category;
    this.restaurant_main_menu1 = data.restaurant.restaurant_main_menu1;
    this.restaurant_main_menu2 = data.restaurant.restaurant_main_menu2;
    this.restaurant_operating_time = data.restaurant.restaurant_operating_time;
    this.restaurant_closed_days = data.restaurant.restaurant_closed_days;
    console.log(this.restaurant_name);
    console.log(this.restaurant_operationg_time);
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
