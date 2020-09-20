<template>
  <div class="contents">
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitAddForm">
        <div>
          <label for="menu_name">메뉴 이름</label>
          <input id="menu_name" type="text" v-model="menu_name" />
        </div>
        <div>
          <label for="menu_category">메뉴 카테고리</label>
          <select
            name="menu_category"
            id="menu_category"
            type="text"
            v-model="menu_category"
          >
            <option value="메인메뉴" selected="selected">메인 메뉴</option>
            <option value="세트메뉴">세트 메뉴</option>
            <option value="사이드메뉴">사이드 메뉴</option>
            <option value="음료">음료</option>
          </select>
        </div>
        <div>
          <label for="menu_intro">메뉴 소개</label>
          <input id="menu_intro" type="text" v-model="menu_intro" />
        </div>
        <p class="validation-text">
          <span class="warning" v-if="!isContentsValid && menu_intro">
            100자 이하로 작성해주세요.
          </span>
        </p>
        <div>
          <label for="menu_price">메뉴 가격</label>
          <input id="menu_price" type="text" v-model="menu_price" />
        </div>
        <p class="validation-text">
          <span class="warning" v-if="isNumberValid && menu_price">
            숫자만 입력가능합니다.
          </span>
        </p>
        <button type="submit" class="btn">
          메뉴 등록
        </button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { createMenu } from '@/api/menus';
import { chechNumber } from '@/utils/validation';

export default {
  data() {
    return {
      menu_name: '',
      menu_category: '',
      menu_intro: '',
      menu_price: '',
      fk_restaurant_num: '',
      logMessage: '',
    };
  },
  methods: {
    async submitAddForm() {
      try {
        if (
          this.menu_name === '' ||
          this.menu_category === '' ||
          this.menu_price === '' ||
          this.isNumberValid === true
        ) {
          this.logMessage = '올바르지 않은 입력입니다. 다시 확인해주세요.';
          return;
        }
        const menuData = {
          menu_name: this.menu_name,
          menu_category: this.menu_category,
          menu_intro: this.menu_intro,
          menu_price: this.menu_price,
          fk_restaurant_num: this.$route.params.restaurant_num,
        };
        console.log(menuData);
        await createMenu(menuData);
        this.initForm();
        this.$router.go();
      } catch (error) {
        console.log(error);
        this.logMessage = error.response.data;
      }
    },
    initForm() {
      this.menu_name = '';
      this.menu_intro = '';
      this.menu_price = '';
      this.menu_category = '';
    },
  },
  computed: {
    isNumberValid() {
      return chechNumber(this.menu_price);
    },
    isContentsValid() {
      return this.menu_intro.length <= 100;
    },
  },
};
</script>

<style>
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
