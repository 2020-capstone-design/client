<template>
  <li class="post-container">
    <div class="menu-list">
      <span class="post-contents">
        <b>{{ menuItem.menu_name }}</b> &nbsp;
        {{ menuItem.menu_intro }}
        {{ menuItem.menu_price }}&nbsp;
        <i class="menu-icon ion-md-create" @click="routeEditPage"></i>&nbsp;
        <i class="menu-icon ion-md-trash" @click="deleteItem"></i>
      </span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    menuItem: {
      type: Object,
      required: true,
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
