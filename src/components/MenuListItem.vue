<template>
  <li class="post-container">
    <div class="menu-list">
      <span class="post-contents">
        <b>{{ menuItem.menu_name }}</b> &nbsp; | {{ menuItem.menu_category }} |
        {{ menuItem.menu_intro }} | {{ menuItem.menu_price }}원&nbsp;
        <i class="menu-icon ion-md-create" @click="routeEditPage"></i>&nbsp;
        <i class="menu-icon ion-md-trash" @click="deleteItem"></i>
      </span>
    </div>
  </li>
</template>

<script>
import { deleteMenu } from '@/api/menus';

export default {
  props: {
    menuItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      try {
        if (confirm('해당 메뉴를 삭제하시겠습니까?')) {
          const res = await deleteMenu(this.menuItem.menu_num);
          console.log(res);
          this.$router.go();
        }
      } catch (error) {
        console.log(error);
      }
    },
    async routeEditPage() {
      try {
        alert(this.menuItem.menu_num);
      } catch (error) {
        console.log(error);
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

.menu-icon {
}
</style>
