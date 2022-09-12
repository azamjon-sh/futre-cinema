<template>
  <section class="intro">
    <div class="intro__main">
      <div class="intro__card" v-if="item">
        <div class="intro__img"
             :style="`background-image: url('https://image.tmdb.org/t/p/original/${item.backdrop_path}')`">
        </div>
        <div class="intro__body">
          <h1 class="intro__title">{{ item.title }}</h1>
          <div class="intro__rating" :class="item.vote_average >= 7 ? 'green':''"> Понравилось
            <span>{{ item.vote_average * 10 }}%</span>
          </div>
          <div class="intro__genres" v-if="genres">
            <span v-for="(el,index) in item.genre_ids" :key="index">
              {{ (index > 0 ? ', ' : '') + genres.find(item => item.id === el).name }}
            </span>
          </div>
          <div class="intro__buttons">
            <Btn :btn-class="'btn btn-play'" :text="'Смотреть'" :icon="'play'"/>

            <Btn :btn-class="'btn btn-later'" :text="'Подробнее'" :icon="'info'"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Btn from "@/components/ui/Btn";

export default {
  name: "IntroSection",
  components: {Btn},
  data() {
    return {
      item: null,
      genres: null,
    }
  },
  methods: {
    getPopMovie() {
      let self = this;
      axios.get(`https://api.themoviedb.org/3/movie/popular${this.$store.state.api_key}&language=ru-RU&page=1`)
          .then(function (response) {
            self.$store.state.movies = response.data.results;
            self.$store.state.pages = response.data.total_pages;
            self.$store.state.moviesCount = response.data.total_results;
            self.item = self.$store.state.movies[0]
          })
          .catch(function (error) {
            console.log(error)
          })
    },
    getGenresList() {
      let self = this;
      axios.get(`https://api.themoviedb.org/3/genre/movie/list${this.$store.state.api_key}&language=ru-RU`)
          .then(function (response) {
            self.$store.state.genres = response.data.genres;
            self.genres = self.$store.state.genres
          })
          .catch(function (error) {
            console.log(error)
          })
    },
  },
  created() {
    this.getGenresList()
    this.getPopMovie()
  }
}
</script>

<style scoped>

</style>