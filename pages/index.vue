<template>
  <v-container>
    <v-container class="pa-0 ma-0" fluid>
      <v-carousel hide-delimiter-background height="450" cycle interval="4000">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-row>
            <h1 class="pt-7 mx-auto Voffwhite--text text-uppercase">
              Västerbergslagens geologiska förening
            </h1>
          </v-row>
          <!-- <v-container>
            <nuxt-link to="/">
              <img
                class="pt-8 d-none d-sm-flex"
                width="120px"
              />
            </nuxt-link>
          </v-container> -->
          <!--  <v-col
            sm="8"
            offset-sm="2"
            md="8"
            offset-md="2"
            class="text-carousel"
            height="400"
          >
            <v-card
              color="rgb(242, 242, 242, .2)"
              class="mx-auto mb-10"
              min-width="250px"
            >
              <v-card-title class="Vdark--text px-3 title">Titel</v-card-title>
              <vue-markdown class="Vdark--text pb-3 px-3 text-karusell"
                >Text</vue-markdown
              >
              <figcaption align="end" class="Vgrey--text pr-3 pb-3">
                Descrition
              </figcaption>
            </v-card>
          </v-col> -->
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container>
      <v-col cols="12" md="10" offset-md="1" height="400">
        <v-card tile flat min-width="250px">
          <v-card-title class="Vdark--text px-6">Månadens mineral</v-card-title>
          <!-- OBS! vue-markdown måste vara på en och samma rad -->
          <p class="Vdark--text pb-3 px-6">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
        </v-card>
      </v-col>
    </v-container>
    <v-row>
      <v-col
        v-for="(program, i) in index"
        :key="`${i}-${program.fields.text}`"
        cols="12"
        sm="8"
        md="8"
      >
        <div class="Vlightblue pa-8">
          <h3>{{ program.fields.title }}</h3>

          <!-- <h3>Program</h3> -->
<vue-markdown>{{program.fields.text}}</vue-markdown>

          

          <!-- <p>
            På grund av COVID-19 är alla aktiviteter under maj månad inställda
            (klubbmötet 6/5, exkursion 9/5, besök i Bötberget 14/5 och Oråsens
            grustag 24/5) Vi återkommer med besked hur det blir med programmet i
            juni och framåt. Exkursionen till Gräsberg med rundvandring den 11
            juni är inställd. Vi planerar att ha den någon gång i höst i
            stället. Vi planerar att köra Järnruttenvecken tis 30/6 till lör
            4/7. Vi återkommer på hemsidan om vi måste ställa in pga
            coronapandemin.
          </p>
          <p>Ur programmet:</p>
          <ul>
            <li>Visning av Mineralmusset</li>
            <li>Utställning av malmmineral</li>
            <li>
              Vi ställer ut diverse referenslitteratur och berggrundskartor över
              Kopparbergs län. * Information om gruvor ochn hyttor, tips på
              besöksmål.
            </li>
            <li>Testa dina mineralkunskaper i Gissa stenen.</li>
            <li>
              Kl 13 guidning av Gruvmuseet genom Ludvika hembygdsförening och
              stångången körs.
            </li>
          </ul>
          <p>
            Resten av studiecirkeln om Mineralernas systemetik är uppskjuten
            tills efter sommaren pga coronapandemin. De två första träffarna är
            genomförda. Vi planerar att köra resten i höst. De två första
            avsnitten finns nu på hemsidan. Klicka på knappen Föredrag och sedan
            på Lektion 1-2. Meddelande på den här sidan när Lektion 3 har lagts
            ut. För att se innehållet klicka på Mineralernas sytematik
          </p> -->
        </div>
      </v-col>
      <!--  <v-col cols="12" sm="4" md="4">
        <div class="Vgrey pa-5 mb-5">
          <h3>Öppettider</h3>
          <p class="pa-0 ma-0">Öppet dagligen juni - augusti</p>
          <p class="pa-0 ma-0">Annan tid efter överenskommelse</p>
          <p><strong>Fri entré</strong></p>
        </div>
      </v-col>
      <v-col cols="12" sm="4" md="4" offset-md="8">
        
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
      </v-col>-->
     <!--  <v-col>
        <h3>{{ program.fields }}</h3>
        <div v-if="listItem.fields.punktlista.length > 0">He j</div>
        <ul>
          <li>
            <vue-markdow>{{ program.fields.listItem }} </vue-markdow>
          </li>
        </ul>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
/* import VueMarkdown from 'vue-markdown' */
import VueMarkdown from "vue-markdown";

export default {
  components: {
    VueMarkdown,
  },

  computed: {
    ...mapState("getpage", ["index"]),
  },
  async created() {
    await this.getPage({ content_type: "index" });
    console.log(this.$store.state);
  },
  methods: {
    ...mapActions("getpage", ["getPage"]),
    /* renderList(list) {
      if (list) {
        list.forEach(element => {
          return 
        });
        this.punktlista
      }
    },
    
    getAssets(bild) {
      if (bild) {
        this.srcimg = bild
      }
      return this.srcimg
    },*/
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
