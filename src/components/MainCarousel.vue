<template>
  <v-carousel :show-arrows="false" id="mainCarousel" cycle interval="3000">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            'https://user-images.githubusercontent.com/49308628/92195011-f1fb9500-eea6-11ea-8f67-a9e27b3bcf80.png',
        },
        {
          src:
            'https://user-images.githubusercontent.com/49308628/93612204-2f653400-fa0a-11ea-9208-44b76bae3cd8.jpg',
        },
        {
          src:
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
          src:
            'https://images.unsplash.com/photo-1473187983305-f615310e7daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
      ],
    };
  },
};
</script>

<style>
#mainCarousel {
  margin: 40px;
  border-radius: 10px;
}
</style>
