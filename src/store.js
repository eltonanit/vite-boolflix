 
import { reactive } from 'vue';

const store = reactive({
    movies: [],
    tvShows: [],
    imageBaseUrl: 'https://image.tmdb.org/t/p/',
    apiKey: '0bd6ccebdf4db426f1acd075c94d2b84',
    apiBaseUrl: 'https://api.themoviedb.org/3'
});

export function useStore() {
    return store;
}