<script>
import axios from 'axios';
import { store } from '../store.js';
export default {

}
</script>

<template lang="">
    <header>
       <h1> BOOFLIX </h1>
        

<template>
    <div id="app">
        <h1>Movie Search</h1>

        <!-- Search Bar -->
        <div>
            <input v-model="searchQuery" @keyup.enter="searchMovies" placeholder="Search for a movie..." />
            <button @click="searchMovies">Search</button>
        </div>

        <!-- Display Results -->
        <div v-if="movies.length > 0">
            <h2>Results:</h2>
            <ul>
                <li v-for="movie in movies" :key="movie.id">
                    <h3>{{ movie.title }}</h3>
                    <p><strong>Original Title:</strong> {{ movie.original_title }}</p>
                    <p><strong>Language:</strong> {{ movie.original_language }}</p>
                    <p><strong>Rating:</strong> {{ movie.vote_average }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '', // Stringa di ricerca
      movies: [] // Array dei risultati dei film
    };
  },
  methods: {
    async searchMovies() {
      const apiKey = '0bd6ccebdf4db426f1acd075c94d2b84'; // Sostituisci con la tua chiave API
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.searchQuery}`;
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.movies = data.results; // Salva i film ottenuti
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
  }
};
</script>

<style>
/* Stili di base per layout e struttura */
#app {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
}

input {
    padding: 10px;
    margin-right: 5px;
    width: 300px;
}

button {
    padding: 10px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
}
</style>