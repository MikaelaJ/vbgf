<template>
  <v-container>
    <v-app-bar flat app>
      <v-btn to="/" icon class="ml-3">
        <v-icon class="Vdark--text">mdi-home</v-icon>
      </v-btn>
      <v-row justify="center">
        <v-btn v-for="(menu, i) in menus" :key="i" text>{{ menu }}</v-btn>
      </v-row>
    </v-app-bar>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      model: 0,
      colors: ["Vlilac", "Vlightblue", "Vdark", "Vgrey", "Voffwhite"],
      menus: [
        "Museet",
        "Föredrag",
        "Astroblem",
        "Exkursioner",
        "Aktiviteter",
        "Kurser",
        "Kontakt",
        "Om oss",
      ],
    };
  },
  methods: {},
};
</script>
