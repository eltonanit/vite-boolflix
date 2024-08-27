<script>
export default {

}
</script>

<template lang="">
    <header>
       <h1> BOOFLIX </h1>
        <div>
            <input v-model="searchQuery" @keyup.enter="searchMovies" placeholder="Search for a movie...">
            <button @click="searchMovies">Search</button>
        </div>
        
    <div v-if="movies.length">
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
   </header>

</template>

<style lang="scss">
header {
    background-color: rgb(126, 42, 42);
    color: black;
    padding: 30px 15px;
}
</style>