

<script>
export default {
    name: 'MovieList',
    props: {
        movies: Array
    }
}
</script>

<template>
    <div class="movie-list">
        <div v-for="movie in movies" :key="movie.id" class="movie-item">
            <h2>{{ movie.title }}</h2>
            <p>Titolo Originale: {{ movie.original_title }}</p>
            <p>Lingua: {{ movie.original_language }}</p>
            <p>Voto: {{ movie.vote_average }}</p>
        </div>
    </div>
</template>