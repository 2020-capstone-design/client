<template>
  <div>
    <li class="post-container">
      <div>
        <div class="post-title" @click="routeMenuPage">
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
  </div>
</template>

<script>
export default {};
</script>

<style></style>
