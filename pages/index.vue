<template>
  <v-container>
     <v-row>
            <h1 class="pt-10 pb-5 mx-auto Vdark--text text-uppercase">
              Västerbergslagens geologiska förening
            </h1>
          </v-row>
    <v-container class="pa-0 ma-0" fluid>
      <v-carousel hide-delimiter-background height="500" cycle interval="8000">
        <v-carousel-item
          v-for="(carousel, i) in carousel"
          :key="`${i}-${carousel.fields.text}`"
          :src="carousel.fields.image.fields.file.url"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        <v-col
            sm="8"
            offset-sm="2"
            md="4"
            offset-md="7"
            class=""
            height="400"
          >
            <v-card
              color="rgb(242, 242, 242, .77)"
              class="mt-12"
              min-width="250px"
            >
              <v-card-title v-html="compiledMarkdown(carousel.fields.title)" class="Vdark--text px-6 pb-0 title"></v-card-title>
              <!-- <p class="Vdark--text pb-3 px-3 text-karusell"
                >Text</p
              > -->
              <p
            v-html="compiledMarkdown(carousel.fields.text)"
            class="Vdark--text pb-3 px-6"
          ></p>
              <!-- <figcaption align="end" class="Vgrey--text pr-3 pb-3">
                Descrition
              </figcaption> -->
            </v-card>
          </v-col>
       
        </v-carousel-item>
       
      </v-carousel>
    </v-container>
    <v-container>
      <!-- <v-col
        v-for="(carousel, i) in carouselStartsida"
        :key="`${i}-${carousel.fields.longtext}`"
        cols="12"
        md="10"
        offset-md="1"
        height="400"
      >
        <v-card tile flat min-width="250px">
          <v-card-title
            v-html="compiledMarkdown(carousel.fields.titel)"
            class="Vdark--text px-6"
            ></v-card-title
          >
          <p
            v-html="compiledMarkdown(carousel.fields.longtext)"
            class="Vdark--text pb-3 px-6"
          ></p>
        </v-card>
      </v-col> -->
    </v-container>

    <v-row>
      <v-col
        v-for="(program, i) in information"
        :key="`${i}-${program.fields.text}`"
        cols="12"
        sm="8"
        md="8"
      >
        <div class="Vlightblue pa-8">
          <h3 v-html="compiledMarkdown(program.fields.title)"></h3>
          <p v-html="compiledMarkdown(program.fields.text)"></p>
        </div>
      </v-col>
      <v-col>
        <div class="Vgrey pa-5 mb-5">
          <h3>Aktiviteter på gång</h3>
          <p class="pa-0 ma-0">Studiebesök Geologiska Museét i Borlänge</p>
          <p class="pa-0 ma-0">
            <strong class="Vdark--text">Datum: </strong>
            Tisdag, 11 feb
          </p>
          <p class="px-0 mx-0">
            <strong class="Vdark--text">Klockan: </strong> 18.00
          </p>
          <hr />
          <p class="pa-0 ma-0">Årsmöte i Mineralmuseet</p>
          <p class="pa-0 ma-0">
            <strong class="Vdark--text">Datum: </strong>
            Söndag, 23 feb
          </p>
          <p class="px-0 mx-0">
            <strong class="Vdark--text">Klockan: </strong> 15.00
          </p>
          <p class="pa-0 ma-0">Aktivitet för barnen!</p>
          <p class="pa-0 ma-0">
            <strong class="Vdark--text">Datum: </strong>
            Tisdag, 25 feb
          </p>
          <p class="px-0 mx-0">
            <strong class="Vdark--text">Klockan: </strong> 10.00 - 12.00
          </p>
          <p class="pa-0 ma-0">Studiebesök Geologiska Museét i Borlänge</p>
          <p class="pa-0 ma-0">
            <strong class="Vdark--text">Datum: </strong>
            Tisdag, 11 feb
          </p>
          <p class="px-0 mx-0">
            <strong class="Vdark--text">Klockan: </strong> 18.00
          </p>
          <p class="pa-0 ma-0">Årsmöte i Mineralmuseet</p>
          <p class="pa-0 ma-0">
            <strong class="Vdark--text">Datum: </strong>
            Söndag, 23 feb
          </p>
          <p class="px-0 mx-0">
            <strong class="Vdark--text">Klockan: </strong> 15.00
          </p>
          <p class="pa-0 ma-0">Aktivitet för barnen!</p>
          <p class="pa-0 ma-0">
            <strong class="Vdark--text">Datum: </strong>
            Tisdag, 25 feb
          </p>
          <p class="px-0 mx-0">
            <strong class="Vdark--text">Klockan: </strong> 10.00 - 12.00
          </p>
        </div>
      </v-col>
    </v-row>
      <h2>Blog</h2>
    <v-row>
      <v-col 
      v-for="(post, i) in blog"
          :key="`${i}-${post.fields.text}`"
      cols="12" sm="12" md="10">
        <h3 v-html="compiledMarkdown(post.fields.title)" class="Vlilac--text mb-4"></h3>
        <p v-html="compiledMarkdown(post.fields.text)">
        </p>
        <v-row>
          <v-col>
            <p class="Vlilac--text"><strong v-html="compiledMarkdown(post.fields.author)" ></strong></p>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="text-right">
            <p class="Vlilac--text"><em v-html="compiledMarkdown(post.sys.updatedAt).substr(0, 13)"></em></p>
          </v-col>
        </v-row>
        <hr>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import VueMarkdown from "vue-markdown";
import marked from "marked";
import { createClient } from "../plugins/contentful";

const client = createClient();

export default {
  components: {
    VueMarkdown,
  },

  computed: {
    ...mapState("getpage", ["information"]),
    ...mapState("getpage", ["carousel"]),
    ...mapState("getpage", ["blog"]),
  },
  async created() {
    await this.getPage({ content_type: "information" });
    await this.getPage({ content_type: "carousel" });
    await this.getPage({ content_type: "blog" });
    console.log(this.blog);
  },
  methods: {
    ...mapActions("getpage", ["getPage"]),

    compiledMarkdown: function (info) {
      return marked(info, { sanitize: false });
    },

    /*  getMarked (information) {
      return {
        __html: marked(information, { sanitize: true})
      }
    } */

    /* renderList(list) {
      if (list) {
        list.forEach(element => {
          return 
        });
        this.punktlista
      }
    },*/

    /* getAssets(bild) {
      if (bild) {
        this.srcimg = bild
      }
      return this.srcimg
    }, */
  },
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
  components: {},
};
</script>
