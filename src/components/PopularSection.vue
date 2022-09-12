<template>
  <section class="popular">
    <div class="content">
      <div class="popular__inner">
        <h2 class="popular__title"></h2>
        <div class="popular__list">
          <div class="popular__item" v-for="item in $store.state.movies">
            <div class="popular__img">
              <img :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`" alt="">
            </div>
            <div class="popular__body">
              <h3 class="popular__title">{{ item.title }}</h3>
              <div class="popular__rating " :class="item.vote_average >= 7 ? 'green':''">
                Понравилось <span>{{ item.vote_average * 10 }}%</span>
              </div>
              <div class="popular__date">{{ spliceDate(item.release_date) }}</div>
              <div class="popular__genres intro__genres" v-if="this.$store.state.genres">
                <span v-for="(el,index) in item.genre_ids" :key="index">
                  {{ (index > 0 ? ', ' : '') + this.$store.state.genres.find(item => item.id === el).name }}
                </span>
              </div>
              <div class="popular__buttons">
                <button class="btn btn-play">

                </button>
                <button class="btn btn-later">Watch later</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PopularSection",
  data() {
    return {
      genres: this.$store.state.genres
    }
  },
  methods: {
    spliceDate(item) {
      return item.slice(0, 4)
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>