<script>
export default {
  name: 'MovieList',
  props: {
    movies: Array
  },
  methods: {
    hasFlag(language) {
      return ['en', 'it', 'fr', 'es'].includes(language);
    },
    getFlagSrc(language) {
      return `@/assets/img/flags/${language}.png`;
    }
  }
}
</script> 


<template>
  <div class="movie-list">
    <div v-for="movie in movies" :key="movie.id" class="movie-item">
      <h2>{{ movie.title }}</h2>
      <p>Titolo Originale: {{ movie.original_title }}</p>
      <p>Lingua: 
        <img 
          v-if="hasFlag(movie.original_language)" 
          :src="getFlagSrc(movie.original_language)" 
          :alt="movie.original_language"
          class="flag"
        >
        <span v-else>{{ movie.original_language }}</span>
      </p>
      <p>Voto: {{ movie.vote_average }}</p>
    </div>
  </div>
</template>



<style scoped>
.flag {
  width: 30px;
  height: 20px;
  vertical-align: middle;
}
</style>

