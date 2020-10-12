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
          <label for="restaurant_phone">가게 전화 번호</label>
          <input id="phone" type="text" v-model="restaurant_phone" />
        </div>
        <div>
          <label for="restaurant_loc">가게 위치</label>
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
            placeholder="400자 이내"
            maxlength="400"
          />
        </div>
        <div>
          <label for="restaurant_category">*가게 카테고리</label>
          <select id="category" type="text" v-model="restaurant_category">
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
          <label for="restaurant_main_menu">가게 대표메뉴</label>
          <input
            id="restaurant_main_menu"
            type="text"
            v-model="restaurant_main_menu"
            maxlength="100"
          />
        </div>
        <div>
          <label for="restaurant_operating_time">가게 운영 시간</label>
          <input
            id="restaurant_operating_time"
            type="text"
            v-model="restaurant_operating_time"
            maxlength="100"
          />
        </div>
        <div>
          <label for="restaurant_closed_days">가게 휴무일</label>
          <input
            id="restaurant_closed_days"
            type="text"
            v-model="restaurant_closed_days"
            maxlength="20"
          />
        </div>
        <div>
          <label for="restaurant_food_origin">재료 원산지</label>
          <input
            id="restaurant_food_origin"
            type="text"
            v-model="restaurant_food_origin"
            maxlength="40"
          />
        </div>
        <div>
          <label for="restaurant_break_time">브레이크 타임</label>
          <input
            id="restaurant_break_time"
            type="text"
            v-model="restaurant_break_time"
            maxlength="20"
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
import { fetchRestaurant, editRestaurant } from '@/api/restaurants';

export default {
  data() {
    return {
      restaurant_name: '',
      restaurant_phone: '',
      restaurant_loc: '',
      restaurant_university: '',
      restaurant_intro: '',
      restaurant_category: '',
      restaurant_main_menu: '',
      restaurant_operating_time: '',
      restaurant_closed_days: '',
      restaurant_food_origin: '',
      restaurant_break_time: '',
      logMessage: '',
      searchWindow: {
        display: 'none',
        height: '300px',
      },
      address: '',
      extraAddress: '',
      visible: false,
    };
  },
  methods: {
    async submitForm() {
      if (
        this.restaurant_name === '' ||
        this.restaurant_university === '' ||
        this.restaurant_category === ''
      ) {
        this.logMessage = '필수 입력사항이 누락되었습니다. 확인해주세요.';
        return;
      }
      const restaurant_num = this.$route.params.restaurant_num;
      this.restaurant_loc = this.address + ' ' + this.extraAddress;
      try {
        await editRestaurant(restaurant_num, {
          restaurant_name: this.restaurant_name,
          restaurant_phone: this.restaurant_phone,
          restaurant_loc: this.restaurant_loc,
          restaurant_university: this.restaurant_university,
          restaurant_intro: this.restaurant_intro,
          restaurant_category: this.restaurant_category,
          restaurant_main_menu: this.restaurant_main_menu,
          restaurant_operating_time: this.restaurant_operating_time,
          restaurant_closed_days: this.restaurant_closed_days,
          restaurant_food_origin: this.restaurant_food_origin,
          restaurant_break_time: this.restaurant_break_time,
        });
        this.$router.push('/main');
      } catch (error) {
        console.log(error);
        this.logMessage = error.response.data.message;
      }
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
  async created() {
    const restaurant_num = this.$route.params.restaurant_num;
    const { data } = await fetchRestaurant(restaurant_num);
    this.restaurant_name = data.restaurant.restaurant_name;
    this.restaurant_phone = data.restaurant.restaurant_phone;
    this.restaurant_loc = data.restaurant.restaurant_loc;
    this.restaurant_university = data.restaurant.restaurant_university;
    this.restaurant_intro = data.restaurant.restaurant_intro;
    this.restaurant_category = data.restaurant.restaurant_category;
    this.restaurant_main_menu = data.restaurant.restaurant_main_menu;
    this.restaurant_operating_time = data.restaurant.restaurant_operating_time;
    this.restaurant_closed_days = data.restaurant.restaurant_closed_days;
    this.restaurant_food_origin = data.restaurant.restaurant_food_origin;
    this.restaurant_break_time = data.restaurant.restaurant_break_time;
  },
};
</script>

<style scoped></style>
