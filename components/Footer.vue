<template>
  <div class="Vdark">
    <footer>
      <v-container>
        <v-row class="white--text">
          <v-col>
            <img
              src="../assets/vbgf.png"
              alt="Västerbergslagens geologiska förening ikon"
              width="80"
            />
            <p class="pa-0 ma-0">Ludvika Gammelgård</p>
            <p class="pa-0 ma-0">Nils Nils gata 7</p>
            <p class="pa-0 ma-0">771 53 Ludvika</p>
          </v-col>
          <v-col>
            <ul class="display_list" v-for="(menu, i) in menus" :key="i">
              <nuxt-link :to="menu.link" class="white--text">
                <li>{{ menu.name }}</li>
              </nuxt-link>
            </ul>
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row justify="center" class="Vlightblue--text mt-10">
          <p>© 2011 Västerbergslagens Geologiska Förening Ludvika</p>
        </v-row>
      </v-container>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      colors: ["Vlilac", "Vlightblue", "Vdark", "Vgrey", "Voffwhite"],
      menus: [
        { name: "Museet", link: "/" },
        {
          name: "Föredrag",
          link: "/foredrag",
        },
        {
          name: "Astroblem",
          link: "/astroblem",
        },

        {
          name: "Exkursioner",
          link: "/exkursioner",
        },
        {
          name: "Aktiviteter",
          link: "/aktiviteter",
        },
        {
          name: "Kurser",
          link: "/kurser",
        },
        {
          name: "Om oss",
          link: "/omoss",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.display_list {
  text-align: center;
  list-style-type: none;
}
</style>