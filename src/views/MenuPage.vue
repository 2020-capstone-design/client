<template>
  <div>
    <h1 class="page-header">메뉴 리스트</h1>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
    <ul v-else>
      <MenuListItem
        v-for="postItem in postItems"
        :key="postItem.restaurant_num"
        :postItem="postItem"
        @refresh="fetchData"
      ></MenuListItem>
    </ul>
  </div>
</template>

<script>
import MenuListItem from '@/components/MenuListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
  components: {
    MenuListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
};
</script>

<style></style>
