
<script>
import { store } from './store.js'
import SearchBar from './components/SearchBar.vue'
import MovieList from './components/MovieList.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    SearchBar,MovieList
  },
  data() {
    return {
      store
    }
  },
  methods: {
    searchMovies(query) {
      axios.get(`${store.apiBaseUrl}/search/movie`, {
        params: {
          api_key: store.apiKey,
          query: query
        }
      })
        .then(response => {
          store.movies = response.data.results
        })
        .catch(error => {
          console.error('Error fetching movies:', error)
        })
    }
  }
}
</script>

<template>
  <div id="app">
    <h1>BOOFLIX</h1>
    <SearchBar @search="searchMovies" />
    <MovieList :movies="store.movies" />
  </div>
</template>
