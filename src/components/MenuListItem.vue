<template>
  <div class="menu-container">
    <li>
      <div>
        {{ menuItem.menu_name }}
        <p>가격</p>
        {{ menuItem.menu_price }}<br />
      </div>
    </li>
  </div>
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

<style></style>
