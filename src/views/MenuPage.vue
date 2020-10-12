<template>
  <div>
    <div class="main menu-list-container contents">
      <h1 class="page-header">메뉴 리스트</h1>
      <h5>
        <router-link to="/download">앱에서 어떻게 보이나요? (클릭)</router-link>
      </h5>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <MenuAddForm></MenuAddForm>
        <br />
        <p id="menu-text">
          메인메뉴 > 세트메뉴 > 사이드메뉴 > 음료 순 , 낮은 가격 순으로
          정렬됩니다.
        </p>
        <br />
        <MenuListItem
          v-for="menuItem in menuItems"
          :key="menuItem.menu_num"
          :menuItem="menuItem"
          @refresh="fetchData"
        ></MenuListItem>
      </ul>
    </div>
  </div>
</template>

<script>
import MenuListItem from '@/components/menu/MenuListItem.vue';
import MenuAddForm from '@/components/menu/MenuAddForm.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchMenus } from '@/api/menus';

export default {
  components: {
    MenuListItem,
    MenuAddForm,
    LoadingSpinner,
  },
  data() {
    return {
      menuItems: [],
      isLoading: true,
      menu_num: '',
      restaurant_num: this.$route.params.restaurant_num,
    };
  },
  methods: {
    async fetchData() {
      const { restaurant_num } = {
        restaurant_num: this.$route.params.restaurant_num,
      };
      console.log(restaurant_num);
      const { data } = await fetchMenus(restaurant_num);
      this.isLoading = false;
      console.log('data', data);
      this.menuItems = data.menus;
      console.log('restaurant', data.menus);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
#menu-text {
  text-align: center;
  font-family: 'Jua', sans-serif;
  font-size: 0.8em;
  color: #364f6b;
}
</style>
