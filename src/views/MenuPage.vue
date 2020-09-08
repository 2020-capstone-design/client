<template>
  <div>
    <div class="main menu-list-container contents">
      <h1 class="page-header">메뉴 리스트</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <MenuAddForm v-on:addMenu="addMenu"></MenuAddForm>
        <MenuListItem
          v-for="menuItem in menuItems"
          :key="menuItem.menu_num"
          :menuItem="menuItem"
          @refresh="fetchData"
        ></MenuListItem>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <p class="create-button">메뉴 추가</p>
    </router-link>
  </div>
</template>

<script>
import MenuListItem from '@/components/MenuListItem.vue';
import MenuAddForm from '@/components/MenuAddForm.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchMenus } from '@/api/menus';
import { createMenu } from '@/api/menus';

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
    async addMenu(menuData) {
      await createMenu(menuData);
      this.$router.go();
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
