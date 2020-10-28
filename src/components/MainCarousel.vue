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
            'https://user-images.githubusercontent.com/49308628/97386967-62a7b680-1918-11eb-86d2-ecad12440909.png',
        },
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
            'https://user-images.githubusercontent.com/49308628/94505586-5dd2e280-0246-11eb-9518-1b4c579e2329.jpg',
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
