<template>
  <li class="post-container">
    <div>
      <div v-if="postItem.restaurant_on_off === false">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/1234/1234190.svg"
          width="50px"
          height="50px"
          @click="setOn"
        />
      </div>
      <div v-else>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/1234/1234189.svg"
          width="50px"
          height="50px"
          @click="setOff"
        />
      </div>
      <span>
        <img
          v-bind:src="`http://localhost:3000${postItem.restaurant_logo}`"
          width="30px"
          height="30px"
          onerror="this.src='https://image.flaticon.com/icons/svg/685/685681.svg'"
          class="post-logo"
          @click="routeEditLogoPage"
      /></span>
      <span class="post-title" @click="routeMenuPage">
        {{ postItem.restaurant_name }}
      </span>
      <div class="post-contents">
        <img
          src="https://image.flaticon.com/icons/svg/817/817382.svg"
          width="27"
          height="27"
        />
        {{ postItem.restaurant_category }}<br />
        <img
          src="https://user-images.githubusercontent.com/49308628/92916064-21427100-f468-11ea-8e33-34e84386761f.png"
          width="22"
          height="22"
        />
        {{ postItem.restaurant_phone }}<br />
        <img
          src="https://user-images.githubusercontent.com/49308628/92915865-ef310f00-f467-11ea-977d-7c608b4dd99b.png"
          width="23"
          height="23"
        />
        {{ postItem.restaurant_loc }}<br />
        <img
          src="https://user-images.githubusercontent.com/49308628/92915990-0ec83780-f468-11ea-8922-51b9d0c58520.png"
          width="23"
          height="23"
        />
        {{ postItem.restaurant_university }}<br />
        <img
          src="https://user-images.githubusercontent.com/49308628/92915765-d7598b00-f467-11ea-9972-72cdbe5343f4.png"
          width="23"
          height="23"
        />
        {{ postItem.restaurant_intro }}<br />
        <img
          src="https://user-images.githubusercontent.com/49308628/92915639-b8f38f80-f467-11ea-82ee-bc4e5750cefb.png"
          width="22"
          height="22"
        />
        {{ postItem.restaurant_operating_time }}<br />
        <img
          src="https://user-images.githubusercontent.com/49308628/92915418-85186a00-f467-11ea-92d1-fa0f8f8eea87.png"
          width="21"
          height="21"
        />
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
import { deletePost, setOnOff } from '@/api/posts';
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
          this.postItem.restaurant_on_off = false;
        } catch (error) {
          console.error(error);
        }
      }
    },
    async setOn() {
      const restaurant_name = this.postItem.restaurant_name;
      if (confirm(`가게 '${restaurant_name}'를 오픈하시겠습니까? `)) {
        await setOnOff(this.postItem.restaurant_num, true);
        this.postItem.restaurant_on_off = true;
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
