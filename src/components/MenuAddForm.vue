<template>
  <div class="contents">
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="menu_name">메뉴 이름</label>
          <input id="menu_name" type="text" v-model="menu_name" />
        </div>
        <div>
          <label for="menu_intro">메뉴 소개</label>
          <input id="menu_intro" type="text" v-model="menu_intro" />
        </div>
        <div>
          <label for="menu_price">메뉴 가격</label>
          <input id="menu_price" type="text" v-model="menu_price" />
        </div>
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
export default {
  data() {
    return {
      menu_name: '',
      menu_intro: '',
      menu_price: '',
      fk_restaurant_num: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const menuData = {
          menu_name: this.menu_name,
          menu_intro: this.menu_intro,
          menu_price: this.menu_price,
          fk_restaurant_num: this.$route.params.restaurant_num,
        };
        this.$emit('addMenu', menuData);
        this.initForm();
      } catch (error) {
        console.log(error);
        this.logMessage = error.response.data.message;
      }
    },
    initForm() {
      this.menu_name = '';
      this.menu_intro = '';
      this.menu_price = '';
    },
  },
};
</script>

<style></style>
