<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">회원님의 가게목록</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <MainCarousel></MainCarousel>
        <RestaurantListItem
          v-for="postItem in postItems"
          :key="postItem.restaurant_num"
          :postItem="postItem"
          @refresh="fetchData"
        ></RestaurantListItem>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <p class="create-button">가게 등록</p>
    </router-link>
  </div>
</template>

<script>
import RestaurantListItem from '@/components/restaurant/RestaurantListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import MainCarousel from '@/components/MainCarousel.vue';
import { fetchRestaurants } from '@/api/restaurants';
export default {
  components: {
    RestaurantListItem,
    MainCarousel,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { username } = {
        username: this.$store.state.username,
      };
      const { data } = await fetchRestaurants(username);
      this.isLoading = false;
      this.postItems = data.restaurants;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
