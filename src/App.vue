
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
    <header>
      <h1 class="logo">BOOLFLIX</h1>
      <SearchBar @search="searchMedia" />
    </header>
    <main>
      <MediaList :items="store.movies.concat(store.tvShows)" />
    </main>
  </div>
</template>
<style>
#app {
  font-family: Arial, sans-serif;
  background-color: #2d2b2b;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;
}

.logo {
  color: #E50914;
  font-size: 2rem;
  font-weight: bold;
}

main {
  padding: 2rem;
}
</style>