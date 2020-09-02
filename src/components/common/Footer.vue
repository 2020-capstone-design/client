<template>
  <div class="footer">
    <v-footer light padless>
      <v-card class="flex" flat tile>
        <v-row align="center">
          <v-card-text class="py-2 white--text text-center">
            &copy;2020 —
            <a href="https://github.com/2020-capstone-design">Capstone Team</a>
          </v-card-text>
        </v-row>
      </v-card></v-footer
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        name: 'mdi-github',
        url: 'https://github.com/2020-capstone-design',
        target: '_blank',
      },
      {
        name: 'fab fa-github',
        url: 'https://www.github.com/AfricanTurtles',
        target: '_blank',
      },
      {
        name: 'fab fa-linkedin',
        url: 'https://www.linkedin.com/in/AfricanTurtles',
        target: '_blank',
      },
      {
        name: 'fab fa-instagram',
        url: 'https://www.instagram.com/AfricanTurtles',
        target: '_blank',
      },
    ],
  }),
};
</script>

<style>
.footer {
  margin: 100px 0px 0px 0px;
}
</style>
