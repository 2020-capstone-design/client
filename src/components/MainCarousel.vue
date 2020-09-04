<template>
  <v-carousel :show-arrows="false" id="mainCarousel">
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
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
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
