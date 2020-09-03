<template>
  <li class="post-container">
    <div>
      <div class="post-title" @click="routeMenuPage">
        {{ postItem.restaurant_name }}
      </div>
      <div class="post-contents">
        <i class="icon ion-md-star"></i>
        {{ postItem.restaurant_category }}<br />
        <i class="icon ion-md-call"></i>
        {{ postItem.restaurant_phone }}<br />
        <i class="icon ion-md-home"></i>
        {{ postItem.restaurant_loc }}<br />
        <i class="icon ion-md-school"></i>
        {{ postItem.restaurant_university }}<br />
        <i class="icon ion-ios-alarm"></i>
        {{ postItem.restaurant_intro }}<br />
        <i class="icon ion-ios-time"></i>
        {{ postItem.restaurant_operating_time }}<br />
        <i class="icon ion-logo-closed-captioning"></i>
        {{ postItem.restaurant_closed_days }}<br />
        <b>메인 메뉴</b><br />
        {{ postItem.restaurant_main_menu1 }}
        {{ postItem.restaurant_main_menu2 }}
      </div>
    </div>
    <div class="post-time">
      가게등록: {{ postItem.created_at | formatDate }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      if (
        confirm(
          '해당 가게를 삭제할 경우, 해당 가게와 관련된 정보들이 삭제됩니다.\n삭제하시겠습니까?',
        )
      ) {
        console.log('restaurantnum', this.postItem.restaurant_num);

        await deletePost(this.postItem.restaurant_num);
        this.$emit('refresh');
      }
      // console.log('deleted');
    },
    routeEditPage() {
      const restaurant_num = this.postItem.restaurant_num;
      console.log('route', restaurant_num);
      this.$router.push(`/post/${restaurant_num}`);
    },
    routeMenuPage() {
      const restaurant_name = this.postItem.restaurant_name;
      if (confirm(`가게 '${restaurant_name}'의 메뉴를 관리하시겠습니까?`)) {
        const restaurant_num = this.postItem.restaurant_num;
        this.$router.push(`/menu/${restaurant_num}`);
      }
    },
  },
};
</script>

<style>
b {
  color: #9ab4d4;
}
.post-title:hover {
  color: #5caaef;
}

.post-container:hover {
  color: #9ab4d4;
}
</style>
