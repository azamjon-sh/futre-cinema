<template>
  <h1>Hello!</h1>
  <div>
    <input type="text" v-model="title">
  </div>
  <button @click="getMovies">Click me</button>
  <div class="card__wrapper" v-if="res">
    <div class="card" v-for="item in res.results" :key="item.id">
      <div class="card__img">
        <img :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`" alt="">
        <img :src="`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`" alt="">
      </div>
      <div class="card__body">
        <div class="card__title">{{item.title}}</div>
        <div class="card__rating">{{item.vote_average}}</div>
        <div class="card__stars">{{item.release_date}}</div>
        <div class="card__buttons">
          <button>Play</button>
          <button>Watch later</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
 *
 *
 */


import axios from "axios";

export default {
  name: "TestApi",
  data() {
    return {
      res: null,
      title: ''
    }
  },
  methods: {
    getMovies() {
      let self = this,
          t = this.title;
      axios.get(`https://api.themoviedb.org/3/movie/top_rated${this.$store.state.api_key}&language=ru-RU&page=1`)
          .then(function (response) {
            self.res = response.data
          })
          .catch(function (error) {
            self.res = error
          })
    }
  }
}
</script>