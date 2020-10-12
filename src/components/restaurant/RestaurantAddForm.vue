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
            maxlength="40"
            placeholder="최대 40자"
          />
        </div>
        <div>
          <label for="phone">가게 전화 번호</label>
          <input id="phone" type="text" v-model="phone" />
        </div>
        <div>
          <label for="location">가게 위치</label>

          <input
            type="button"
            value="우편번호 찾기"
            class="post-button"
            @click="execDaumPostcode"
          />
          <div
            ref="searchWindow"
            :style="searchWindow"
            style="border:1px solid;width:500px;margin:5px 0;position:relative"
          >
            <img
              src="https://t1.daumcdn.net/postcode/resource/images/close.png"
              id="btnFoldWrap"
              style="cursor:pointer;position:absolute;right:0px;top:-1px;z-index:1"
              @click="searchWindow.display = 'none'"
              alt="close"
            />
          </div>
          <br />
          <input type="text" v-model="address" placeholder="주소" />
          <br />
          <input
            type="text"
            v-model="extraAddress"
            ref="extraAddress"
            placeholder="상세주소"
          />
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
          <textarea
            id="intro"
            type="text"
            row="4"
            v-model="intro"
            maxlength="400"
          />
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
          <label for="main_menu">가게 대표메뉴</label>
          <input
            id="main_menu"
            type="text"
            v-model="main_menu"
            maxlength="30"
          />
        </div>
        <div>
          <label for="operating_time">가게 운영 시간</label>
          <input
            id="operating_time"
            type="text"
            v-model="operating_time"
            placeholder="예) 오전 10:00 ~ 오후 8:00"
            maxlength="100"
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
            maxlength="20"
          />
        </div>
        <div>
          <label for="food_origin">재료 원산지</label>
          <input
            id="food_origin"
            type="text"
            v-model="food_origin"
            placeholder="예)김치 - 국산 (최대 40자)"
            maxlength="40"
          />
        </div>
        <div>
          <label for="break_time">브레이크 타임</label>
          <input
            id="break_time"
            type="text"
            v-model="break_time"
            placeholder="예) 오후 3시~4시"
            maxlength="20"
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
import { createRestaurant } from '@/api/restaurants';

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

      searchWindow: {
        display: 'none',
        height: '300px',
      },
      address: '',
      extraAddress: '',

      visible: false,
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        if (
          this.restaurant_name === '' ||
          this.university === '' ||
          this.category === ''
        ) {
          this.logMessage = '필수 입력사항을 입력하세요.';
          return;
        }
        const formData = new FormData();
        this.location = this.address + ' ' + this.extraAddress;
        formData.append('restaurant_name', this.restaurant_name);
        formData.append('restaurant_phone', this.phone);
        formData.append('restaurant_loc', this.location);
        formData.append('restaurant_university', this.university);
        formData.append('restaurant_intro', this.intro);
        formData.append('restaurant_logo', this.logo);
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

        if (confirm('가게를 등록하시겠습니까?')) {
          await createRestaurant(formData);
          this.$router.push('/main');
        }
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
    fileSelector1() {
      this.logo = this.$refs.logo.files[0];
    },
    fileSelector2() {
      this.restaurant_outside_image = this.$refs.restaurant_outside_image.files[0];
    },
    fileSelector3() {
      this.restaurant_menu_image1 = this.$refs.restaurant_menu_image1.files[0];
    },
    fileSelector4() {
      this.restaurant_menu_image2 = this.$refs.restaurant_menu_image2.files[0];
    },
    execDaumPostcode() {
      // eslint-disable-next-line
      new daum.Postcode({
        onComplete: data => {
          if (data.userSelectedType === 'R') {
            this.address = data.roadAddress;
          } else {
            this.address = data.jibunAddress;
          }

          this.extraAddress = '';

          this.$refs.extraAddress.focus();
          this.searchWindow.display = 'none';
        },
        onResize: size => {
          this.searchWindow.height = `${size.height}px`;
        },
        width: '100%',
        height: '100%',
      }).embed(this.$refs.searchWindow);
      this.searchWindow.display = 'block';
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
