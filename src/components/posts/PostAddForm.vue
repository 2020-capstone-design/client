<template>
  <div class="contents">
    <h1 class="page-header">가게 등록</h1>
    <small>*표시 - 필수 기입 사항</small>
    <div class="form-wrapper">
      <form
        class="form"
        @submit.prevent="submitForm"
        enctype="multipart/form-data"
      >
        <div>
          <label for="restaurant_name">*가게명</label>
          <input
            id="restaurant_name"
            type="restaurant_name"
            v-model="restaurant_name"
          />
        </div>
        <div>
          <label for="phone">가게 전화 번호</label>
          <input id="phone" type="text" v-model="phone" />
        </div>
        <div>
          <label for="location">가게 위치</label>
          <input id="location" type="text" v-model="location" />
        </div>
        <div>
          <label for="university">*가게 근처 대학교</label>
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
          <input
            id="logo"
            type="file"
            ref="logo"
            accept="image/*"
            v-on:change="fileSelector1()"
          />
        </div>
        <div>
          <label for="category">*가게 카테고리</label>
          <select id="category" type="text" v-model="category">
            <option value="한식">한식</option>
            <option value="분식">분식</option>
            <option value="중국집">중국집</option>
            <option value="일식/돈까스">일식/돈까스</option>
            <option value="족발/보쌈">족발/보쌈</option>
            <option value="피자">피자</option>
            <option value="치킨">치킨</option>
            <option value="분식">패스트푸드</option>
            <option value="찜/탕">찜/탕</option>
            <option value="카페&디저트">카페&디저트</option>
          </select>
        </div>
        <div>
          <label for="main_menu">가게 메인메뉴</label>
          <input id="main_menu" type="text" v-model="main_menu" />
        </div>
        <div>
          <label for="operating_time">가게 운영 시간</label>
          <input
            id="operating_time"
            type="text"
            v-model="operating_time"
            placeholder="예) 오전 10:00 ~ 오후 8:00"
          />
        </div>
        <div>
          <label for="restaurant_outside_image">가게 정면 사진</label>
          <input
            id="restaurant_outside_image"
            type="file"
            ref="restaurant_outside_image"
            accept="image/*"
            v-on:change="fileSelector2()"
          />
        </div>
        <div>
          <label for="restaurant_menu_image1">가게 음식 사진1</label>
          <input
            id="restaurant_menu_image1"
            type="file"
            ref="restaurant_menu_image1"
            accept="image/*"
            v-on:change="fileSelector3()"
          />
        </div>
        <div>
          <label for="restaurant_menu_image2">가게 음식 사진2</label>
          <input
            id="restaurant_menu_image2"
            type="file"
            ref="restaurant_menu_image2"
            accept="image/*"
            v-on:change="fileSelector4()"
          />
        </div>

        <div>
          <label for="closed_days">가게 휴무일</label>
          <input
            id="closed_days"
            type="text"
            v-model="closed_days"
            placeholder="예) 매주 화요일"
          />
        </div>
        <div>
          <label for="food_origin">재료 원산지</label>
          <input
            id="food_origin"
            type="text"
            v-model="food_origin"
            placeholder="예)김치 - 국산"
          />
        </div>
        <div>
          <label for="break_time">브레이크 타임</label>
          <input
            id="break_time"
            type="text"
            v-model="break_time"
            placeholder="예) 오후 3시~4시"
          />
        </div>
        <button type="submit" class="btn">
          가게 등록
        </button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { createRestaurant } from '@/api/posts';

export default {
  data() {
    return {
      restaurant_name: '',
      phone: '',
      location: '',
      university: '',
      intro: '',
      restaurant_outside_image: '',
      logo: '',
      restaurant_menu_image1: '',
      restaurant_menu_image2: '',
      category: '',
      main_menu: '',
      operating_time: '',
      closed_days: '',
      food_origin: '',
      break_time: '',
      on_off: false,

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
        const formData = new FormData();
        formData.append('restaurant_name', this.restaurant_name);
        formData.append('restaurant_phone', this.phone);
        formData.append('restaurant_loc', this.location);
        formData.append('restaurant_university', this.university);
        formData.append('restaurant_intro', this.intro);
        formData.append('logo', this.logo);
        formData.append(
          'restaurant_outside_image',
          this.restaurant_outside_image,
        );
        formData.append('restaurant_menu_image1', this.restaurant_menu_image1);
        formData.append('restaurant_menu_image2', this.restaurant_menu_image2);
        formData.append('restaurant_category', this.category);
        formData.append('restaurant_main_menu', this.main_menu);
        formData.append('restaurant_operating_time', this.operating_time);
        formData.append('restaurant_closed_days', this.closed_days);
        formData.append('restaurant_on_off', this.on_off);
        formData.append('restaurant_food_origin', this.food_origin);
        formData.append('restaurant_break_time', this.break_time);
        formData.append('fk_owner_id', this.$store.state.username);
        for (let key of formData.entries()) {
          console.log(`${key}`);
        }

        if (confirm('가게를 등록하시겠습니까?')) {
          const response = await createRestaurant(formData);
          this.$router.push('/main');
          console.log('response', response);
        }
      } catch (error) {
        console.log(error.response.data);
        this.logMessage = error.response.data;
      }
    },
    fileSelector1() {
      this.logo = this.$refs.logo.files[0];
      console.log('this.logo', this.logo);
    },
    fileSelector2() {
      this.restaurant_outside_image = this.$refs.restaurant_outside_image.files[0];
      console.log(
        'this.restaurant_outside_image',
        this.restaurant_outside_image,
      );
    },
    fileSelector3() {
      this.restaurant_menu_image1 = this.$refs.restaurant_menu_image1.files[0];
      console.log('this.restaurant_menu_image1', this.restaurant_menu_image1);
    },
    fileSelector4() {
      this.restaurant_menu_image2 = this.$refs.restaurant_menu_image2.files[0];
      console.log('this.restaurant_menu_image2', this.restaurant_menu_image2);
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
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('https://t1.daumcdn.net/cfile/tistory/99761B495C84AA8716')
    no-repeat 95% 50%;
  width: 40%;
  padding: 15px 15px;
  border-radius: 0px;
  border: 1px solid #dae1e7;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
</style>
