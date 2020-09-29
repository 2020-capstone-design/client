<template>
  <li class="post-container">
    <div>
      <div v-if="postItem.restaurant_isOpen === false">
        <img
          src="https://user-images.githubusercontent.com/49308628/94504413-ae950c00-0243-11eb-93bb-c9b4639be89f.png"
          width="50px"
          height="50px"
          @click="setOn"
        />
      </div>
      <div v-else>
        <img
          src="https://user-images.githubusercontent.com/49308628/94504097-f9faea80-0242-11eb-8383-b65500344e68.png"
          width="50px"
          height="50px"
          @click="setOff"
        />
      </div>
      <span>
        <img
          v-bind:src="`${postItem.restaurant_logo}`"
          width="30px"
          height="30px"
          onerror="this.src='https://user-images.githubusercontent.com/49308628/94504765-7c37de80-0244-11eb-8191-219d3ab03be3.png'"
          class="post-logo"
          @click="routeEditLogoPage"
      /></span>
      <span class="post-title" @click="routeMenuPage">
        {{ postItem.restaurant_name }}
      </span>
      <div class="post-contents">
        <img
          src="https://user-images.githubusercontent.com/49308628/94504856-bd2ff300-0244-11eb-8767-8fbccee9fdfe.png"
          width="27"
          height="27"
        />
        {{ postItem.restaurant_category }}<br />
        <img
          src="https://user-images.githubusercontent.com/49308628/93172625-31a76400-f766-11ea-87b8-9f0c5c381f07.png"
          width="22"
          height="22"
        />
        {{ postItem.restaurant_phone }}<br />
        <img
          src="https://user-images.githubusercontent.com/49308628/93172564-1177a500-f766-11ea-9df9-49137bca8209.png"
          width="23"
          height="23"
        />
        {{ postItem.restaurant_loc }}<br />
        <img
          src="https://user-images.githubusercontent.com/49308628/93172581-1b010d00-f766-11ea-92a3-ae148a5dbb49.png"
          width="23"
          height="23"
        />
        {{ postItem.restaurant_university }}<br />
        <img
          src="https://user-images.githubusercontent.com/49308628/93172597-25bba200-f766-11ea-9c6b-6e1717090b06.png"
          width="23"
          height="23"
        />
        {{ postItem.restaurant_intro }}<br />
        <img
          src="https://user-images.githubusercontent.com/49308628/93172530-01f85c00-f766-11ea-9483-2807e2609afb.png"
          width="22"
          height="22"
        />
        {{ postItem.restaurant_operating_time }}<br />
        <img
          src="https://user-images.githubusercontent.com/49308628/93172477-e68d5100-f765-11ea-8240-2310086bbf77.png"
          width="23"
          height="23"
        />
        {{ postItem.restaurant_closed_days }}<br />
        <img
          src="https://user-images.githubusercontent.com/49308628/93583329-aab0f080-f9de-11ea-8bf7-8f93a78c17d8.png"
          width="23"
          height="23"
        />
        {{ postItem.restaurant_main_menu }}<br />
        <img
          src="https://user-images.githubusercontent.com/49308628/94024382-4e8d0880-fdf2-11ea-8e96-3fb7c466db2c.png"
          width="25"
          height="25"
        />
        {{ postItem.restaurant_food_origin }}<br />
        <img
          src="https://user-images.githubusercontent.com/49308628/93583186-75a49e00-f9de-11ea-8271-c101534c0d11.png"
          width="23"
          height="23"
        />
        {{ postItem.restaurant_break_time }}
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
import { deleteRestaurant, setOnOff } from '@/api/restaurants';
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
        await deleteRestaurant(this.postItem.restaurant_num);
        this.$emit('refresh');
      }
    },
    routeEditPage() {
      const restaurant_num = this.postItem.restaurant_num;
      this.$router.push(`/post/${restaurant_num}`);
    },
    routeMenuPage() {
      const restaurant_name = this.postItem.restaurant_name;
      if (confirm(`가게 '${restaurant_name}'의 메뉴를 관리하시겠습니까?`)) {
        const restaurant_num = this.postItem.restaurant_num;
        this.$router.push(`/menu/${restaurant_num}`);
      }
    },
    routeEditLogoPage() {
      const restaurant_name = this.postItem.restaurant_name;
      if (confirm(`가게 '${restaurant_name}'의 로고를 변경하시겠습니까?`)) {
        const restaurant_num = this.postItem.restaurant_num;
        const restaurant_logo = this.postItem.restaurant_logo;
        this.$router.push({
          name: 'logo',
          params: { restaurant_num, restaurant_logo },
        });
      }
    },
    async setOff() {
      const restaurant_name = this.postItem.restaurant_name;
      if (confirm(`가게 '${restaurant_name}'를 마감하시겠습니까? `)) {
        try {
          await setOnOff(this.postItem.restaurant_num, false);
          this.postItem.restaurant_isOpen = false;
        } catch (error) {
          console.error(error);
        }
      }
    },
    async setOn() {
      const restaurant_name = this.postItem.restaurant_name;
      if (confirm(`가게 '${restaurant_name}'를 오픈하시겠습니까? `)) {
        await setOnOff(this.postItem.restaurant_num, true);
        this.postItem.restaurant_isOpen = true;
      }
    },
  },
};
</script>

<style>
b {
  color: #9ab4d4;
  font-family: 'Jua', sans-serif;
}
.post-title:hover {
  color: #5caaef;
}
.post-container:hover {
  color: #9ab4d4;
}
.post-logo {
  border-radius: 50%;
}
</style>
