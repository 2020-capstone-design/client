<template>
  <div>
    <v-container id="edit-image-container">
      <v-row>
        <v-expansion-panels focusable>
          <v-expansion-panel>
            <v-expansion-panel-header
              >가게 로고 이미지 변경</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <EditRestaurantLogo
                :data="data"
                @refresh="fetchData"
              ></EditRestaurantLogo
            ></v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
              >가게 외관 이미지 변경</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <EditRestaurantOutsideImage
                :data="data"
                @refresh="fetchData"
              ></EditRestaurantOutsideImage
            ></v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
              >가게 메뉴 이미지 변경</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <EditRestaurantMenuImage
                :data="data"
                @refresh="fetchData"
              ></EditRestaurantMenuImage
            ></v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
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

<style>
#edit-image-container {
  margin-top: 100px;
  width: 50%;
}
</style>
