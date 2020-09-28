<template>
  <div>
    <EditRestaurantLogo :data="data" @refresh="fetchData"></EditRestaurantLogo>
    <EditRestaurantOutsideImage
      :data="data"
      @refresh="fetchData"
    ></EditRestaurantOutsideImage>
    <EditRestaurantMenuImage
      :data="data"
      @refresh="fetchData"
    ></EditRestaurantMenuImage>
  </div>
</template>

<script>
import { fetchRestaurant } from '@/api/restaurants';
import EditRestaurantLogo from '@/components/image/EditRestaurantLogo.vue';
import EditRestaurantOutsideImage from '@/components/image/EditRestaurantOutsideImage.vue';
import EditRestaurantMenuImage from '@/components/image/EditRestaurantMenuImage.vue';

export default {
  data() {
    return {
      data: {},
    };
  },
  components: {
    EditRestaurantLogo,
    EditRestaurantOutsideImage,
    EditRestaurantMenuImage,
  },
  methods: {
    async fetchData() {
      const { restaurant_num } = {
        restaurant_num: this.$route.params.restaurant_num,
      };
      console.log(restaurant_num);
      const { data } = await fetchRestaurant(restaurant_num);
      this.data = data.restaurant;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
