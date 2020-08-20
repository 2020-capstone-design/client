<template>
  <li class="post-container">
    <div @click="greet">
      <div class="post-title">
        <i class="icon ion-ios-restaurant"></i>
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
      if (confirm('등록된 가게를 삭제하시겠습니까?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      }
      // console.log('deleted');
    },
    routeEditPage() {
      const id = this.postItem._id;
      this.$router.push(`/post/${id}`);
    },
    greet() {
      alert(this.postItem.restaurant_name);
    },
  },
};
</script>

<style>
b {
  color: #0fa956;
}
.post-container:hover {
  color: #21b314;
}
</style>
