<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">회원님의 가게목록</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <MainCarousel></MainCarousel>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem.restaurant_num"
          :postItem="postItem"
          @refresh="fetchData"
        ></PostListItem>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <p class="create-button">가게 등록</p>
    </router-link>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import MainCarousel from '@/components/MainCarousel.vue';
import { fetchPosts } from '@/api/posts';
export default {
  components: {
    PostListItem,
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
      const { data } = await fetchPosts(username);
      this.isLoading = false;
      console.log('data', data);
      this.postItems = data.restaurants;
      console.log('restaurant', data.restaurants);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
